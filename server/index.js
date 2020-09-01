const app = require("express")();
const server = require("http").createServer(app);
const port = process.env.PORT || 8080;
const io = require("socket.io")(server, { wsEngine: "ws" });
const { addUser, removeUser, getUser, getUsersInRoom } = require("./users.js");
const cors = require("cors");
const router = require("./router");

app.use(router);
app.use(cors());

io.on("connection", (socket) => {
  socket.on("Datas", ({ name, room }, callback) => {
    const { error, user } = addUser({ id: socket.id, name, room });

    if (error) return callback(error);

    socket.join(user.room);

    socket.emit("message", {
      user: "admin",
      text: `${user.name}, welcome to room ${user.room}`,
    });

    socket.broadcast
      .to(user.room)
      .emit("message", { user: "admin", text: `${user.name} has joined` });

    io.to(user.room).emit("roomdata", {
      rooms: user.room,
      users: getUsersInRoom(user.room),
    });

    callback();
  });

  socket.on("sendMessage", (message, callback) => {
    const user = getUser(socket.id);
    io.to(user.room).emit("message", { user: user.name, text: message });

    callback();
  });

  socket.on("disconnect", () => {
    const user = removeUser(socket.id);

    if (user) {
      io.to(user.room).emit("message", {
        user: "Admin",
        text: `${user.name} has left.`,
      });
    }
  });
});

server.listen(port, () => {
  console.log("server is up and running ~~");
});
