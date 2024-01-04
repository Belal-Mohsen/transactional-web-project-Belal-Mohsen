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
      message: 'Hey! 👋 I’m UnboxBot. How can I help you today?',
      trigger: '2',
    },
    {
      id: '2',
      options: [
        { value: 1, label: 'Products', trigger: '3' },
        { value: 2, label: 'FAQs', trigger: '6' },
        { value: 3, label: 'Order Status', trigger: '11' },
        { value: 4, label: 'Our company', trigger: '12' },
      ],
    },
    {
      id: '3',
      options: [
        { value: 1, label: 'What’s hot', trigger: '4' },
        { value: 2, label: 'All holiday boxes', trigger: '5' },
        { value: 3, label: 'Go Back', trigger: '2' },
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
      trigger: '3',
    },
    {
      id: '6',
      options: [
        { value: 1, label: 'Billing', trigger: '7' },
        { value: 2, label: 'Shipping', trigger: '8' },
        { value: 3, label: 'Technical Issues', trigger: '1' },
        { value: 4, label: 'Go Back', trigger: '2' },
      ],
    },
    {
      id: '7',
      message: 'Our convenient, flexible “Pay As You Go” billing option means you will be billed at the time that you choose/reserve your box for each holiday/season on your plan. Your Unbox Holidays box subscriptions automatically renew each year. You can add or skip/cancel a box at any time in My Account.',
      trigger: '3',
    },
    {
      id: '8',
      options: [
        { value: 1, label: 'How much is shipping?', trigger: '9' },
        { value: 2, label: 'When will my box ship?', trigger: '10' },
        { value: 3, label: 'Go Back', trigger: '6' },
      ],
    },
    {
      id: '9',
      message: `Shipping is a flat rate of $12 for box.
      We are a small business and while we wish we could cover the cost of shipping, it is simply not possible for us to do so and remain in business. Thank you for your understanding!`,
      trigger: '6',
    },
    
    {
      id: '10',
      message: 'Please reference the CALENDAR Page for all of these important dates!',
      trigger: '6',
    },
    {
      id: '11',
      message: 'This function is not available yet.',
      trigger: '2',
    },
    {
      id: '12',
      message: `Welcome to Unbox Holidays! We curate and deliver decorations for the holidays and seasons you love—whether they’re for your home, vacation home, or business!
    
      Our goal is to find the most on-trend, quality decorations and festive items— that you would otherwise have to purchase from several different stores— and bring them all to one convenient location: your box! It is our mission to surprise, inspire and help you prepare for the holiday—however that looks for you—so that you can stress less and festive more!`,
      trigger: '2',
    },
    
  ];

  return (
    <ThemeProvider theme={theme}>
      <ChatBot steps={steps} />
    </ThemeProvider>
  );
};

export default ChatBoxContainer;
