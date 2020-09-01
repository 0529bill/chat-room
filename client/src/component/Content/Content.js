import React from "react";
import ChatContent from "../ChatContent/ChatContent";
import ScrollToBottom from "react-scroll-to-bottom";
import "./Content.css";
const Content = ({ messages, name }) => (
  <ScrollToBottom id="Scroll" className="messageScroll">
    {messages.map((message, i) => (
      <div key={i}>
        <ChatContent message={message} name={name} />
      </div>
    ))}
  </ScrollToBottom>
);

export default Content;
