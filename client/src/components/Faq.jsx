import React from "react";

export const Faq = () => {
  // Inline styles as an object
  const styles = {
    container: {
      position: 'absolute',
      width: '70%',
      maxWidth: '800px',
      left: '50%',
      transform: 'translateX(-50%)',
      top: '25vh',
    },
    rectangle: {
      position: 'absolute',
      width: '100%',
    },
    rectangle14: {
      height: '9vw',
      top: '2vw',
      background: '#F7EADE',
      transform: 'scaleX(-1)',
    },
    rectangle15: {
      height: '20vw',
      top: '10vw',
      background: '#F7F6F2',
    },
    text: {
      position: 'absolute',
      width: '90%',
      maxWidth: '1168px',
      left: '5%',
      top: '3vw',
      fontFamily: 'Inter',
      fontWeight: 300,
      fontSize: '1.8vw',
      lineHeight: '5vw',
      textAlign: 'center',
      letterSpacing: '0.05em',
      color: '#342F19',
    },
    question: {
      position: 'absolute',
      width: '90%',
      maxWidth: '1146px',
      left: '5%',
      fontFamily: 'Inter',
      fontWeight: 600,
      fontSize: '1.2vw',
      lineHeight: '5vw',
      letterSpacing: '0.05em',
      color: '#342F19',
    },
    line: {
      position: 'absolute',
      width: '90%',
      maxWidth: '1126px',
      left: '5%',
      height: '0.1vw',
      border: '0.1vw solid #C0876A',
      transform: 'rotate(0.01deg)',
    },
    line1: {
      top: '15vw',
    },
    line2: {
      top: '21vw',
    },
    line3: {
      top: '28vw',
    },
  };

  return (
    <div style={styles.container}>
      <div style={{ ...styles.rectangle, ...styles.rectangle14 }} />
      <p style={styles.text}>
        How it works&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;Billing &amp; Shipping
      </p>
      <div style={{ ...styles.rectangle, ...styles.rectangle15 }} />
      <p style={{ ...styles.question, top: '158px' }}>
        What is Unbox Holidays?&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#c0876a] text-[30px]">+</span>
      </p>
      <p style={{ ...styles.question, top: '258px' }}>
        How many holidays do you offer? How much is each box? &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#c0876a] text-[30px]">+</span>
      </p>
      <p style={{ ...styles.question, top: '350px' }}>
        How does it work? Do I get to choose what comes in my boxes? &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#c0876a] text-[30px]">+</span>
      </p>
      <div style={{ ...styles.line, ...styles.line1 }} />
      <div style={{ ...styles.line, ...styles.line2 }} />
      <div style={{ ...styles.line, ...styles.line3 }} />
    </div>
  );
};

export default Faq;