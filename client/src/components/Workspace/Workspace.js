import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Tabs, Tab, Typography, Box } from "@material-ui/core";
import QueryRegisForm from "./components/forms/QueryReg";
import SearchUserForm from "./components/forms/SearchUser";
import CustRegForm from "./components/forms/CustomerReg";
import EmpProfile from "./components/EmpProfile";
import { Container, Row, Col, Card } from "react-bootstrap";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    "aria-controls": `scrollable-auto-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "100%",
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function Workspace() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          padding: "1rem",
          fontWeight: "500",
        }}
      >
        Customer Service Dashboard
      </div>
      <AppBar position="static" color="default" className=" mb-3">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="default"
          centered
        >
          <Tab label="Queries" {...a11yProps(0)} />
          <Tab label="Customer Registration" {...a11yProps(1)} />
          <Tab label="Profile" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <Container>
          <Row>
            <Col className="mr-1">
              <SearchUserForm />
            </Col>
            <Col className="ml-1">
              <QueryRegisForm />
            </Col>
          </Row>
        </Container>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Container style={{ width: "42%" }}>
          <CustRegForm />
        </Container>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Container>
          <EmpProfile />
        </Container>
      </TabPanel>
    </div>
  );
}
