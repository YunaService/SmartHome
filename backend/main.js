var app = require("express")();
var server = require("http").Server(app);
var io = require("socket.io")(server);
const bcrypt = require("bcrypt");

const users = require("./configs/users.json");

server.listen(80);
// WARNING: app.listen(80) will NOT work here!

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/index.html");
});

const hashPassword = function (password) {
  bcrypt.hash(password, 10, (err, hash) => {
    if (err) {
      throw err;
    }
    console.log("Your hash: ", hash);
    return hash;
  })
};

io.on("connection", function (socket) {
  socket.on("auth", function (data) {
    if (data) {
      if (typeof data.Key == "string") {
        if (data.Key == "aaa") {
          socket.emit("auth", { success: true, Token: "djnajkda" });
          return;
        }
      }
      if (typeof data.Token == "string") {
        if (data.Token == "djnajkda") {
          socket.emit("auth", { success: true, Token: "djnajkda" });
          return;
        }
      }
    }
    socket.emit("auth", { success: false });
  });

  socket.on("status", function (data) {
    if (typeof data.Token == "string") {
      if (data.Token == "djnajkda") {
        socket.emit("status", { success: true });
        return;
      }
    }
    socket.emit("status", {
      authorized: false
    });
  });
  socket.on("users", function () {
    socket.emit("data", users);
  });

  socket.on("user", function () {
    for (u in users) {
      socket.emit("data", users[u]);
    }
  });



});
