// Username, Email and Password
import React, { useState, useEffect, useContext } from "react";
import { Card } from "react-bootstrap";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "44ch",
    },
  },
}));

const SigninForm = () => {
  const classes = useStyles();

  return (
    <>
      <Card style={{ fontSize: "14px", borderWidth: "0px" }} className="shadow">
        <Card.Header
          style={{
            backgroundColor: "#4b51b8",
            color: "white",
            padding: "1.25rem",
          }}
        >
          <Card.Title>Login to your account </Card.Title>
        </Card.Header>
        <Card.Body>
          {" "}
          <form className={classes.root} noValidate autoComplete="off">
            <TextField
              required
              id="outlined-required"
              label="Email"
              variant="outlined"
            />
            <div></div>
            <TextField
              required
              id="outlined-required"
              label="Password"
              variant="outlined"
            />{" "}
            <div></div>
            <Button
              variant="contained"
              color="primary"
              style={{ width: "95%", padding: "0.75rem" }}
            >
              Signin
            </Button>
          </form>
        </Card.Body>
      </Card>
    </>
  );
};

export default SigninForm;
