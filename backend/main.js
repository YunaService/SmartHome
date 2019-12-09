const app = require("express")();
const port = 3000;

const path = require("path");
const fs = require("fs");

const http = require("http").createServer();
const config = require("./config.json");
const io = require("socket.io")(http);

/*const gpiop = require("rpi-gpio").promise; //https://www.npmjs.com/package/rpi-gpio

gpiop
  .setup(40, gpiop.DIR_OUT)
  .then(() => {
    return gpiop.write(40, true);
  })
  .catch(err => {
    console.log("Error: ", err.toString());
  });
*/


function saveConfig() {
  fs.writeFile("config.json", JSON.stringify(config), "utf8", function(err) {
    if (err) {
      console.log("An error occured while writing JSON Object to File.");
      return console.log(err);
    }

    console.log("JSON file has been saved.");
  });
}

app.get('/', function (req, res) {
    var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    if (ip === "::1") {
        res.sendFile(path.join(__dirname + "/static/Local.html"));
    } else {
        res.send(ip);
        //res.sendFile(path.join(__dirname + "/static/Public.html"));
    }  
});

app.get("/getall", function(req, res) {
  res.json(config.ports);
});

app.get("/get/:id", function(req, res) {
  var id = req.params.id;
  if (config.ports[id] != null) {
    res.json(config.ports[id]);
  }else
  res.json({});
});

app.get("/create/:id/:name/:type/:state", function(req, res) {
  config.ports[req.params.id] = {};
  config.ports[req.params.id].type = req.params.type;
  config.ports[req.params.id].state = req.params.state;
  config.ports[req.params.id].name = req.params.name;
  saveConfig();
  res.send("ok");
});

app.get("/set/:id/:state", function(req, res) {
  config.ports[req.params.id].state = req.params.state;
  saveConfig();
  res.send("ok");
});


io.on("connection", socket => {
  console.log("+ " + socket.id);
  io.emit("test", "TZAASDA");
  socket.emit("welcome", "Hello and welcome to the Socker.io Server");
  socket.on("disconnect", function() {
    console.log("- " + socket.id);
  });
});

app.listen(port, function() {
  console.log("Backend is listening on port " + port + "!");
});