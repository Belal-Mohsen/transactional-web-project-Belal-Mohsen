import React from "react";
import ChatBot from "react-simple-chatbot";

const ChatBoxContainer = () => {
  const steps = [
    {
      id: '1',
      message: 'What number I am thinking?',
      trigger: '2',
    },
    {
      id: '2',
      options: [
        { value: 1, label: 'Number 1', trigger: '4' },
        { value: 2, label: 'Number 2', trigger: '3' },
        { value: 3, label: 'Number 3', trigger: '1' },
      ],
    },
    {
      id: '3',
      message: 'Wrong answer, try again.',
      trigger: '2',
    },
    {
      id: '4',
      message: 'Awesome! You are a telepath!',
      end: true,
    },
  ];

  return (
    <ChatBot steps={steps} />
  );
};

export default ChatBoxContainer;
