import React from "react";
import "./Input.css";

const Input = ({ sendMessage, message, setMessage }) => {
  return (
    <div className="input-group input-group-lg" id="InputGroup">
      <input
        type="text"
        className="form-control shadow-none"
        placeholder="Type something here..."
        value={message}
        onKeyPress={(event) =>
          event.key === "Enter" ? sendMessage(event) : null
        }
        onChange={(event) => setMessage(event.target.value)}
      />
      <div className="input-group-append">
        <button
          className="btn btn-primary shadow-none"
          type="button"
          id="button-addon2"
          onClick={(e) => sendMessage(e)}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Input;
