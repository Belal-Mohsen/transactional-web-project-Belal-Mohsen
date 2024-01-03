import React from "react";
import { ThemeProvider } from 'styled-components';
import ChatBot from "react-simple-chatbot";

const ChatBoxContainer = () => {
  const theme = {
    background: '#f5f8fb',
    fontFamily: 'Helvetica Neue',
    headerBgColor: '#C0876A',
    headerFontColor: '#fff',
    headerFontSize: '15px',
    botBubbleColor: '#fff',
    botFontColor: '#C0876A',
    userBubbleColor: '#E7D5CA',

    userFontColor: '#342F19',
  };
  const steps = [
    {
      id: '1',
      message: 'Hey! How can I help you today?',
      trigger: '2',
    },
    {
      id: '2',
      options: [
        { value: 1, label: 'Products', trigger: '3' },
        { value: 2, label: 'FAQs', trigger: '3' },
        { value: 3, label: 'Order Status', trigger: '1' },
        { value: 4, label: 'Our company', trigger: '1' },
      ],
    },
    {
      id: '3',
      options: [
        { value: 1, label: 'What is hot', trigger: '4' },
        { value: 2, label: 'All the holiday boxes', trigger: '5' },
        { value: 3, label: 'Go back', trigger: '2' },
      ],
    },
    {
      id: '4',
      message: 'Now we have Christmas box, NewYear Box and Valentine box.',
      trigger: '3',
    },
    {
      id: '5',
      message: `We offer boxes for 4 seasons and 10 holidays!
      SEASONS: Spring, Summer, Fall, Winter
      HOLIDAYS: Valentine’s Day, St. Patrick’s Day, Easter Monday, Saint Jean Baptiste Day, Canada, Thanksgiving, Halloween, Christmas, New Year’s Eve`,
      end: true,
    },
    
  ];

  return (
    <ThemeProvider theme={theme}>
      <ChatBot steps={steps} />
    </ThemeProvider>
  );
};

export default ChatBoxContainer;
