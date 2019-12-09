const app = require("express")();
const port = 3000;

const path = require("path");
const http = require("http").createServer();

const config = require("./config");

const io = require("socket.io")(http);

const gpiop = require("rpi-gpio").promise; //https://www.npmjs.com/package/rpi-gpio

gpiop
  .setup(40, gpiop.DIR_OUT)
  .then(() => {
    return gpiop.write(40, true);
  })
  .catch(err => {
    console.log("Error: ", err.toString());
  });



app.get('/', function (req, res) {
    var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    if (ip === "::1") {
        res.sendFile(path.join(__dirname + "/static/Local.html"));
    } else {
        res.send(ip);
        //res.sendFile(path.join(__dirname + "/static/Public.html"));
    }  
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