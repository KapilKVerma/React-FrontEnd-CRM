import React, { useEffect, useState } from "react";
import { Card, Table } from "react-bootstrap";
import ConnnectionsList from "./ConnectionList";
import axios from "axios";

const Connections = (props) => {
  const { connections } = props;
  const [render, setRender] = useState(false);

  const changeStatus = (id) => {
    axios
      .get(
        `http://localhost:5000/connection/connectioncreate/${id}/changestatus`
      )
      .then((res) => {})
      .catch((err) => {
        console.log(err);
      });
    setRender(true);
  };

  const editConnection = (id) => {};

  const deleteConnection = (id) => {
    axios
      .delete(`http://localhost:5000/connection/connectioncreate/${id}/delete`)
      .then((res) => {
        setRender(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {}, [render]);

  return (
    <>
      <Table size="sm" style={{ fontSize: "12px" }}>
        <tbody>
          <tr>
            <th>Conection Name</th>
            <th>Slack Channel</th>
            <th>Workspace</th>
            <th>Actions</th>
          </tr>
          {connections &&
            connections.map((connection) => {
              return (
                <ConnnectionsList
                  key={connection.id}
                  connection={connection}
                  deleteConnection={deleteConnection}
                  changeStatus={changeStatus}
                  editConnection={editConnection}
                />
              );
            })}
        </tbody>
      </Table>
    </>
  );
};

export default Connections;
