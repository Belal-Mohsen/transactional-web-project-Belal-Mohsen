import React, { useState } from "react";
import ChatBoxContainer from "./ChatBoxContainer";
import { FaRocketchat } from "react-icons/fa";

const ChatBot = () => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    // when i click on the button, the active state will be true
    setActive(!active);
  };

  return (
    <>
      <button onClick={handleClick} className="!fixed !right-20 !bottom-20">
        <FaRocketchat color="#7d5844" size="3em" />
      </button>
      <div style={active ? { display: "block" } : { display: "none" }} className="!fixed !right-20 !bottom-32">
        <ChatBoxContainer />
      </div>
    </>
  );
};

export default ChatBot;
