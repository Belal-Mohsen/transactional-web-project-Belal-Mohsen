import React, { useState } from "react";
import ChatBoxContainer from "./ChatBoxContainer";

const ChatBox = ({ className }) => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    // when i click on the button, the active state will be true
    setActive(!active);
    // then the chatboxcontainer will show, and the button will disappear
  };

  return (
    <>
      <div>
        <button onClick={handleClick}>
          <img
            className={`w-[65px] h-[61px] top-0 left-0 ${className}`}
            alt="Chat box"
            src="https://c.animaapp.com/qqWqs49g/img/chatbox-1.svg"
          />
        </button>
      </div>
      <div style={active ? { display: "block" } : { display: "none" }}>
        <ChatBoxContainer />
      </div>
    </>
  );
};

export default ChatBox;
