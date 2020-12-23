import React, { useState } from "react";
import { Card, Modal, Table } from "react-bootstrap";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "52ch",
    },
  },
}));

const JIRA = () => {
  const [show, setShow] = useState(false);
  const classes = useStyles();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      {" "}
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        {" "}
        <h5>JIRA Connections</h5>
        <Button variant="contained" color="primary" onClick={handleShow}>
          {" "}
          Create{" "}
        </Button>
      </div>
      <hr></hr>
      <Table striped hover>
        <tbody>
          <tr>
            <td style={{ width: "15%" }}>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td className="p-2" style={{ width: "16%" }}>
              {" "}
              <Button
                variant="contained"
                style={{
                  backgroundColor: "#00c45f",
                  color: "white",
                  padding: "0.25rem",
                }}
              >
                {" "}
                Edit{" "}
              </Button>{" "}
              |{" "}
              <Button
                variant="contained"
                color="secondary"
                style={{ padding: "0.25rem 1rem" }}
              >
                {" "}
                Delete{" "}
              </Button>
            </td>
          </tr>
        </tbody>
      </Table>
      <hr></hr>
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Create Connection</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {" "}
          <form className={classes.root} noValidate autoComplete="off">
            <TextField
              required
              id="outlined-required"
              label="Host Name"
              variant="outlined"
            />
            <TextField
              required
              id="outlined-required"
              label="Username"
              variant="outlined"
            />{" "}
            <TextField
              required
              id="outlined-required"
              label="API key"
              variant="outlined"
            />{" "}
            <TextField
              required
              id="outlined-required"
              label="Project key"
              variant="outlined"
            />
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="contained" color="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="contained" color="primary" onClick={handleClose}>
            Create
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default JIRA;
