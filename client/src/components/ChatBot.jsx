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
      <button onClick={handleClick} className="fixed right-5 bottom-5 md:right-20 md:bottom-20">
        <FaRocketchat className="text-4xl md:text-5xl text-[#7d5844]" />
      </button>
      <div style={{ display: active ? 'block' : 'none' }} className="fixed right-5 bottom-20 md:right-20 md:bottom-32">
        <ChatBoxContainer />
      </div>
    </>
  );
};

export default ChatBot;
