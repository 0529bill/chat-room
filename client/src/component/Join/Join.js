import React, { useState, useEffect, useRef } from "react";
import "./Join.css";

import { Link } from "react-router-dom";

const Join = () => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");

  const input1 = useRef(null);

  useEffect(() => {
    input1.current.focus();
  }, []);

  let test = (event) => (!name || !room ? event.preventDefault() : null);
  return (
    <div id="roots">
      <div
        className="d-flex flex-column align-items-center "
        id="JoinContainer"
      >
        <div
          className=" border d-flex flex-column align-items-center pt-5 px-5 pb-4 shadow bg-light"
          id="JoinBorder"
        >
          <h1 id="JoinTitle">Instachat</h1>
          <div>
            <input
              className="form-control shadow-none mt-5"
              type="text"
              placeholder="put your name here "
              onChange={(event) => setName(event.target.value)}
              ref={input1}
            />
            <input
              className="form-control mt-2 shadow-none"
              type="text"
              placeholder="put room number here"
              onChange={(event) => setRoom(event.target.value)}
            />
          </div>
          <div className="d-flex align-items-center">
            <Link onClick={test} to={`/chat?name=${name}&room=${room}`}>
              <button
                type="button"
                className="btn btn-primary mt-4 shadow-none text-center"
              >
                Submit
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Join;
