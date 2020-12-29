import React from "react";
import { Row, Col, Card } from "react-bootstrap";
import HomeImage from "../Images/homeImage.jpg";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import { Container } from "@material-ui/core";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const Home = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col lg={6}>
            <Card
              style={{
                height: "42vh",
                margin: "3rem",

                borderColor: "#ededed",
                borderWidth: "0px",
                fontSize: "2rem",
              }}
            >
              <span
                style={{
                  fontSize: "5rem",
                  fontWeight: "500",
                }}
              >
                {" "}
                CFirst
              </span>
              <span
                style={{
                  fontSize: "1.5rem",
                  fontWeight: "500",
                  marginTop: "2rem",
                }}
              >
                {" "}
                Software designed for customers Software.{" "}
              </span>{" "}
              <span style={{ fontSize: "1rem" }}>
                {" "}
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </span>
              <span
                style={{
                  fontWeight: "500",
                  marginTop: "2rem",
                }}
              >
                <Button
                  variant="contained"
                  color="secondary"
                  className="mr-3 "
                  href="/pricing"
                >
                  Get Started
                </Button>{" "}
              </span>
            </Card>
          </Col>
          <Col lg={6}>
            <img src={HomeImage} style={{ width: "100%", marginTop: "2rem" }} />
          </Col>{" "}
        </Row>
      </Container>

      <footer style={{ marginTop: "10rem" }}>
        <Box mt={8}>
          <Copyright />
        </Box>
      </footer>
    </div>
  );
};

export default Home;
