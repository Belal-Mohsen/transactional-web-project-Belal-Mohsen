import React from "react";

import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import Collapsible from "react-collapsible";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const stylesGeneral = {
  line: {
    left: "5%",
    marginTop: "5px",
    marginBottom: "5px",
    height: "0.1vw",
    border: "0.1vw solid #C0876A",
    transform: "rotate(0.01deg)",
  },
  line1: {
    top: "15vw",
    marginTop: "1vw",
    marginBottom: "1vw",
  },
  line2: {
    top: "21vw",
    marginTop: "1vw",
    marginBottom: "1vw",
  },
  line3: {
    top: "28vw",
    marginTop: "1vw",
    marginBottom: "1vw",
  },
};

class ListTitle extends React.Component {
  render() {
    const { title } = this.props;
    return (
      <div>
        <h2 style={{marginTop:"1vw"}}>{title}</h2>
        <div style={{ ...stylesGeneral.line, ...stylesGeneral.line1 }} />
      </div>
    );
  }
}

export default function Faq() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "80%" }}>
      <Box
        sx={{
          borderBottom: 1,
          borderColor: "divider",
          backgroundColor: "#F7EADE",
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          centered="true"
        >
          <Tab label="How it Works" {...a11yProps(0)} />
          <Tab label="Billing & Shipping" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <CustomTabPanel
        value={value}
        index={0}
        style={{ backgroundColor: "#F7F6F2" }}
      >
        <Collapsible
          trigger=<ListTitle title="What is Unbox Holidays?" />
          triggerStyle={{ fontWeight: "bold" }}
        >
          <p>
            Welcome to Unbox Holidays! We curate and deliver decorations for the
            holidays and seasons you love—whether they’re for your home,
            vacation home, or business!
          </p>
          <p>
            Our goal is to find the most on-trend, quality decorations and festive items— that you would
            otherwise have to purchase from several different stores— and bring
            them all to one convenient location: your box! It is
            our mission to surprise, inspire and help you prepare for the
            holiday—however that looks for you—so that you can stress less and
            festive more!
          </p>
        </Collapsible>
        <Collapsible
          trigger=<ListTitle title="How many holidays/seasons do you offer? How much is each box?" />
          triggerStyle={{ fontWeight: "bold" }}
        >
          <p>
            We offer boxes for 4 seasons and 10 holidays. <br></br>

                SEASONS: Spring, Summer, Fall, Winter <br></br>

                HOLIDAYS: Valentine’s Day, St. Patrick’s Day, Easter Monday, Saint Jean Baptiste Day, Canada, Thanksgiving, Halloween, Christmas, New Year’s Eve <br></br>
          </p>
        </Collapsible>
        <Collapsible
          trigger=<ListTitle title="How does it work? Do I get to choose what comes in my boxes?" />
          triggerStyle={{ fontWeight: "bold" }}
        >
          <p>
          To start, you will take a simple 4-question Style Quiz to curate your decor style. 
          Then, we will select the perfect products for you!
          </p>
        </Collapsible>
      </CustomTabPanel>

      <CustomTabPanel value={value} index={1}
      style={{ backgroundColor: "#F7F6F2" }}>
        <Collapsible
          trigger=<ListTitle title="How does payment work?" />
          triggerStyle={{ fontWeight: "bold" }}
        >
          <p>
          Our convenient, flexible “Pay As You Go” billing option means you will be billed at the time that you choose/reserve your 
          box for each holiday/season on your plan.  Your Unbox Holidays box subscriptions automatically renew each year. 
          You can add or skip/cancel a box at any time in My Account.
          </p>
        </Collapsible>
        <Collapsible
          trigger=<ListTitle title="How much is shipping?" />
          triggerStyle={{ fontWeight: "bold" }}
        >
          <p>
          Shipping is a flat rate of $12 for box.<br></br>

            We are a small business and while we wish we could cover the cost of shipping, it is simply not possible for us 
            to do so and remain in business. Thank you for your understanding!
          </p>
        </Collapsible>
        <Collapsible
          trigger=<ListTitle title="When will my box ship?" />
          triggerStyle={{ fontWeight: "bold" }}
        >
          <p>
          Please reference the CALENDAR Page for all of these important dates!
          </p>
        </Collapsible>
      </CustomTabPanel>
    </Box>
  );
}

//export Faq;
