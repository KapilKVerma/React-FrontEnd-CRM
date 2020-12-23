import React, { useContext, useEffect } from "react";
import { Nav, Navbar, Container, NavDropdown } from "react-bootstrap";
import { Button } from "@material-ui/core";
import UserContext from "../context/UserContext";
import { useHistory } from "react-router-dom";

const Navigation = () => {
  const { userData, setUserData } = useContext(UserContext);
  const history = useHistory();

  const signOut = () => {
    setUserData({
      token: undefined,
      user: undefined,
    });
    localStorage.setItem("auth-token", "");
    history.push("/");
  };

  return (
    <div>
      <Navbar
        style={{
          background: "white",
          borderBottom: "1px solid",
          borderColor: "#6a74fc",
        }}
        className="p-2 shadow"
      >
        <Container>
          <Navbar.Brand href="/">CFirst</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse
            className="justify-content-end"
            style={{ fontWeight: "500" }}
          >
            <Nav className="mr-3">About </Nav>
            <Nav className="mr-3">Contact </Nav>
            <Button
              variant="contained"
              color="secondary"
              className="mr-2"
              style={{ fontSize: "12px", padding: "0.3rem 0.5rem" }}
              href="/signin"
            >
              Signin
            </Button>{" "}
            |{" "}
            <Button
              variant="contained"
              color="primary"
              className="ml-2"
              style={{ fontSize: "12px", padding: "0.3rem 0.5rem" }}
              href="/signup"
            >
              Signup
            </Button>
            <div>
              <Nav
                className="mr-auto "
                style={{ color: "white", fontWeight: "500" }}
              >
                <NavDropdown
                  // title={userData.user.username}
                  id="basic-nav-dropdown"
                >
                  <NavDropdown.Item
                    href="/workspace"
                    style={{ fontSize: "12px" }}
                  >
                    Workspace
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/admin" style={{ fontSize: "12px" }}>
                    Admin
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    href="/runtest"
                    style={{ fontSize: "12px" }}
                  >
                    Run Test
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/intgs" style={{ fontSize: "12px" }}>
                    Integrations
                  </NavDropdown.Item>

                  <NavDropdown.Item href="/ac" style={{ fontSize: "12px" }}>
                    Acess Token
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item>
                    <Button
                      variant="contained"
                      color="secondary"
                      size="sm"
                      style={{ width: "100%", fontSize: "12px" }}
                      onClick={signOut}
                    >
                      Sign Out
                    </Button>{" "}
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </div>
            {/* ) : null} */}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigation;
