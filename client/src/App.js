import React, { useState, useEffect } from "react";

import Navigation from "./components/Navigation";
import Workspace from "./components/Workspace/Workspace";
import Admin from "./components/Admin/Admin";
import AccessToken from "./components/AccessToken";
import Pricing from "./components/Pricing";
import Signup from "./components/Login/SignupForm";
import Signin from "./components/Login/SigninForm";
import Integrations from "./components/Integrations/Integrations";
import UserContext from "./context/UserContext";
import Home from "./components/Home";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import axios from "axios";

import "./App.css";

function App() {
  const [userData, setUserData] = useState({
    token: undefined,
    user: undefined,
  });

  useEffect(() => {
    try {
      const checkLoggedIn = async () => {
        let token = localStorage.getItem("auth-token");

        if (token === null) {
          localStorage.setItem("auth-token", "");
          token = "";
        }
        const tokenRes = await axios.post(
          `http://localhost:5000/user/tokenisvalid`,
          null,
          {
            headers: { "x-auth-token": token },
          }
        );

        if (tokenRes.data) {
          const userRes = await axios.get(`http://localhost:5000/user`, {
            headers: { "x-auth-token": token },
          });
          setUserData({
            token,
            user: userRes.data,
          });
        }
      };
      checkLoggedIn();
    } catch (error) {
      console.log("Error:", error.message);
    }
  }, []);

  return (
    <>
      {" "}
      <Router>
        <UserContext.Provider value={{ userData, setUserData }}>
          <Navigation />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/workspace" exact component={Workspace} />
            <Route path="/admin" exact component={Admin} />
            <Route path="/pricing" exact component={Pricing} />
            <Route path="/signin" exact component={Signin} />
            <Route path="/signup" exact component={Signup} />
            <Route path="/ac" exact component={AccessToken} />
            <Redirect to="/" />
          </Switch>
        </UserContext.Provider>{" "}
      </Router>
    </>
  );
}

export default App;
