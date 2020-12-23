import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Tabs, Tab, Typography, Box } from "@material-ui/core";
import { Container, Row, Col, Jumbotron } from "react-bootstrap";
import Issues from "./components/Issues";
import Jira from "./components/Jira";

import Users from "./components/Users";
import Employees from "./components/Employees";
import EmpRegisForm from "./components/forms/EmpRegis";
import axios from "axios";

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

export default function Admin() {
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
        Admin/Managers Dashboard
      </div>
      <AppBar position="static" color="primary" className="mb-3">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="default"
          centered
        >
          <Tab label="Home" {...a11yProps(0)} />
          <Tab label="Employees" {...a11yProps(1)} />
          <Tab label="Register Employees" {...a11yProps(2)} />
          <Tab label="Integrate Services" {...a11yProps(3)} />{" "}
          <Tab label="Add Query Type" {...a11yProps(4)} />
          <Tab label="Add Department" {...a11yProps(5)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <Container>
          <Row>
            <Col>
              <Issues />
            </Col>
          </Row>
        </Container>
      </TabPanel>

      <TabPanel value={value} index={1}>
        <Container>
          <Employees />
        </Container>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Container>
          <EmpRegisForm />
        </Container>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Container>
          <Jira />
        </Container>
      </TabPanel>
    </div>
  );
}
