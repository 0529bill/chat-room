import React from "react";
import "./ChatContent.css";

const ChatContent = ({ message: { user, text }, name }) => {
  let ChatContentCheck = true;
  if (user === name) {
    ChatContentCheck = false;
  }

  return ChatContentCheck ? (
    <div className="d-flex">
      <div id="ChatContentCard" className="my-3 ml-3 mr-1">
        <div className=" mx-3 my-3">{text}</div>
      </div>
      <div className="d-flex align-items-center" id="ChatContentAdmin">
        {user}
      </div>
    </div>
  ) : (
    <div className="d-flex" id="ChatContentUser">
      <div className="d-flex align-items-center" id="ChatContainerReplyUser">
        {user}
      </div>
      <div id="ChatContentReplyCard" className=" d-flex my-2 ml-1 mr-3">
        <div className=" mx-3 my-3">{text}</div>
      </div>
    </div>
  );
};

export default ChatContent;
