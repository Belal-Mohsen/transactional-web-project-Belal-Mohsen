import React from "react";

const ChatBox = ({ className }) => {
  return (
    <img
      className={`w-[65px] h-[61px] top-0 left-0 ${className}`}
      alt="Chat box"
      src="https://c.animaapp.com/qqWqs49g/img/chatbox-1.svg"
    />
  );
};

export default ChatBox;