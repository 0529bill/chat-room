import React, { useEffect, useState } from "react";
import queryString from "query-string";
import Content from "../Content/Content";
import "./Chat.css";
import InfoBar from "../InfoBar/InfoBar";
import Input from "../Input/Input";
import io from "socket.io-client";

let socket;

function Chat() {
  const [name, setNames] = useState("");
  const [room, setRooms] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [users, setUsers] = useState("");

  const URL = "https://chat-app-water.herokuapp.com/";

  useEffect(() => {
    const { name, room } = queryString.parse(window.location.search);

    socket = io(URL);
    setRooms(room);
    setNames(name);

    socket.emit("Datas", { name, room }, (error) =>
      error ? alert(error) : null
    );
    return () => {
      socket.emit("disconnect");
      console.log("clientDisconnect");
      socket.disconnect();
    };
  }, [window.location.search, URL]);

  useEffect(() => {
    socket.on("message", (message) => setMessages([...messages, message]));

    socket.on("roomdata", ({ users }) => setUsers(users));
  }, [messages]);

  const sendMessage = (event) => {
    event.preventDefault();

    if (message) {
      socket.emit("sendMessage", message, () => setMessage(""));
    }
  };

  return (
    <div className="" id="ChatContainer">
      <div className="shadow-lg" id="ChatBorder">
        <InfoBar room={room} />
        <Content messages={messages} name={name} />
        <Input
          sendMessage={sendMessage}
          message={message}
          setMessage={setMessage}
          room={room}
          name={name}
        />
      </div>
    </div>
  );
}

export default Chat;
