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
  },
  line2: {
    top: "21vw",
  },
  line3: {
    top: "28vw",
  },
};

class ListTitle extends React.Component {
  render() {
    const { title } = this.props;
    return (
      <div>
        <h2>{title}</h2>
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
            Welcome to ReadyFestive! We curate and deliver decorations for the
            holidays and seasons you love—whether they’re for your home,
            vacation home, or business!
          </p>
          <p>
            We source from makers large and small, with the goal of finding the
            most on-trend, quality decorations and festive items— that you would
            otherwise have to purchase from several different stores— and bring
            them all to one convenient location: your ReadyFestive box! It is
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
            We are not a monthly or quarterly subscription—that’s not very
            festive! Sign up for *only* the holiday and seasonal boxes you want
            to receive (minimum of 3 boxes per year).
          </p>
        </Collapsible>
        <Collapsible
          trigger=<ListTitle title="What all comes in the box? Why do I need this service?" />
          triggerStyle={{ fontWeight: "bold" }}
        >
          <p>
            You will be able to choose the theme/collection *and* the decor
            items that you want to receive for the holidays/seasons you sign up
            to receive—you will only be surprised if you want to!
          </p>
        </Collapsible>
      </CustomTabPanel>

      <CustomTabPanel value={value} index={1}>
        <Collapsible
          trigger=<ListTitle title="What is Unbox Holidays?" />
          triggerStyle={{ fontWeight: "bold" }}
        >
          <p>
            We are not a monthly or quarterly subscription—that’s not very
            festive! Sign up for *only* the holiday and seasonal boxes you want
            to receive (minimum of 3 boxes per year).
          </p>
        </Collapsible>
      </CustomTabPanel>
    </Box>
  );
}

//export Faq;
