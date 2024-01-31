import React from "react";

import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useTranslation } from "react-i18next";


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
  const { t } = useTranslation();

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
          <Tab label={t("howItWorsLabel")} {...a11yProps(0)} />
          <Tab label={t("billingShippingLabel")} {...a11yProps(1)} />
        </Tabs>
      </Box>
      <CustomTabPanel
        value={value}
        index={0}
        style={{ backgroundColor: "#F7F6F2" }}
      >
        <Collapsible
          trigger=<ListTitle title= {t("whatIsUnboxHolidaysTitle")} />
          triggerStyle={{ fontWeight: "bold" }}
        >
          <p> {t("whatIsUnboxHolidaysText")}
            
          </p>
          <p>
            {t("whatIsUnboxHolidaysTextEnding")}
            
          </p>
        </Collapsible>
        <Collapsible
          trigger=<ListTitle title= {t("howManyHolidaysTitle")} />
          triggerStyle={{ fontWeight: "bold" }}
        >
          <p> {t("howManyHolidaysTextBeginning")} <br></br> 
          {t("howManyHolidaysTextSeasons")} <br></br>
          {t("howManyHolidaysTextHolidays")} <br></br>
          </p>
        </Collapsible>
        <Collapsible
          trigger=<ListTitle title={t("howDoesItWorkTitle")} />
          triggerStyle={{ fontWeight: "bold" }}
        >
          <p>
          {t("howDoesItWorkText")}
          
          </p>
        </Collapsible>
      </CustomTabPanel>

      <CustomTabPanel value={value} index={1}
      style={{ backgroundColor: "#F7F6F2" }}>
        <Collapsible
          trigger=<ListTitle title={t("howDoesPaymentWorkitle")} />
          triggerStyle={{ fontWeight: "bold" }}
        >
          <p> {t("howDoesPaymentWorkText")}
         
          </p>
        </Collapsible>
        <Collapsible
          trigger=<ListTitle title={t("howMuchIsShippingTitle")} />
          triggerStyle={{ fontWeight: "bold" }}
        >
          <p> {t("howMuchIsShippingTextBeginning")}<br></br>

          {t("howMuchIsShippingTextEnd")}
          </p>
        </Collapsible>
        <Collapsible
          trigger=<ListTitle title={t("whenWillMyBoxShipTitle")} />
          triggerStyle={{ fontWeight: "bold" }}
        >
          <p>{t("whenWillMyBoxShipText")}
          
          </p>
        </Collapsible>
      </CustomTabPanel>
    </Box>
  );
}

//export Faq;
