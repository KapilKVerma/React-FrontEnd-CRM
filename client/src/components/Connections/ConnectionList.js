import React from "react";

const ConnectionList = (props) => {
  const { connection, deleteConnection, editConnection, changeStatus } = props;

  return (
    <>
      <tr>
        <td style={{ width: "36%" }}># {connection.connection_name}</td>

        <td style={{ width: "23%" }}>{connection.channel_name}</td>
        <td style={{ width: "23%" }}>{connection.workspace_name}</td>

        <td style={{ width: "16%" }}>
          <i
            className="fas fa-volume-mute mr-1"
            onClick={() => {
              changeStatus(connection.id);
            }}
            style={{ cursor: "pointer" }}
          />{" "}
          <i
            className="fa fa-pencil-alt mr-1"
            onClick={() => {
              editConnection(connection.id);
            }}
          ></i>{" "}
          <i
            className="fa fa-trash-alt mr-1"
            onClick={() => {
              deleteConnection(connection.id);
            }}
            style={{ cursor: "pointer" }}
          ></i>{" "}
          {/* <span className="mr-2">{connection.active.toString()}</span> */}
        </td>
      </tr>
    </>
  );
};

export default ConnectionList;
