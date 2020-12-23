import React, { useState, useEffect } from "react";
import { Form, Card, Button, Row, Col } from "react-bootstrap";
import axios from "axios";

const Addwebhook = () => {
  const [channels, setChannels] = useState();
  const [webhook, setWebhook] = useState();

  const addWebhook = (e) => {
    e.preventDefault();
    if (webhook.channel_webhook !== null)
      axios
        .put("http://localhost:5000/channel/addwebhook", webhook)
        .then((res) => {
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
  };

  useEffect(() => {
    axios
      .get("http://localhost:5000/channel/nw")
      .then((res) => {
        setChannels(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <Card>
        <Card.Body className="m-4">
          <Form>
            <Form.Group controlId="exampleForm.ControlSelect1">
              <Row>
                <Col>
                  <Form.Label>Slack Channel</Form.Label>
                  <Form.Control
                    as="select"
                    size="sm"
                    onChange={(e) => {
                      setWebhook({
                        ...webhook,
                        channel_name: e.target.value.trim(),
                      });
                    }}
                    size="sm"
                  >
                    <option></option>
                    {channels &&
                      channels.map((channel) => {
                        return (
                          <option
                            key={channel.id}
                            style={{ fontSize: "12px", fontWeight: "500" }}
                          >
                            {channel.channel_name.trim()}
                          </option>
                        );
                      })}
                  </Form.Control>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Label className="mt-3">Webhook</Form.Label>
                  <Form.Control
                    type="text"
                    size="sm"
                    onChange={(e) => {
                      setWebhook({
                        ...webhook,
                        channel_webhook: e.target.value.trim(),
                      });
                    }}
                  />
                </Col>
              </Row>
            </Form.Group>
            <Button variant="info" type="submit" size="sm" onClick={addWebhook}>
              Add webhook
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </>
  );
};

export default Addwebhook;
