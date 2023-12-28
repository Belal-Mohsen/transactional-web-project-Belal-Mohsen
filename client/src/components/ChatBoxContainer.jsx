import React from "react";
import {
  MainContainer,
  ChatContainer,
  MessageList,
  Message,
  MessageInput,
} from "@chatscope/chat-ui-kit-react";
import styles from "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import { useState } from "react";

const ChatBoxContainer = () => {
  const [messages, setMessages] = useState([
    {
      message: "Hello, I am a chatbot!",
      sender: "Chatbot",
    },
  ]);

  const handelSend = async (message) => {
    const newMessage = {
      message: message,
      sender: "user",
      direction: "outgoing",
    };
    const newMessages = [...messages, newMessage];
    setMessages(newMessages);
    // [TODO! Process messages!]
  };

  return (
    <div style={{ position: "relative", height: "500px", width: "400px" }}>
      <MainContainer>
        <ChatContainer>
          <MessageList>
            {messages.map((message, i) => {
              return <Message key={i} model={message} />;
            })}
          </MessageList>
          <MessageInput placeholder="Type message here" onSend={handelSend} />
        </ChatContainer>
      </MainContainer>
    </div>
  );
};

export default ChatBoxContainer;
