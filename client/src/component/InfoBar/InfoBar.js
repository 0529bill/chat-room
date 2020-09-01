import React from "react";
import "./InfoBar.css";
import onlineIcon from "../../icons/onlineIcon.png";
import closeIcon from "../../icons/closeIcon.png";

const InfoBar = ({ room }) => {
  return (
    <div className="d-flex" id="InfoRoom">
      <div className="d-flex pt-3 pl-3 pb-3">
        <span>
          <img src={onlineIcon} alt="onlineIcon" />
        </span>
        <span className="ml-3">{`Room ${room}`}</span>
      </div>
      <div className=" pt-3 pr-3" id="InfoCloseIcon">
        <a href="/" className="">
          <img src={closeIcon} id="closeIcon" alt="closeIcon" />
        </a>
      </div>
    </div>
  );
};

export default InfoBar;
