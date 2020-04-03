import React from "react";
import { Row, Container } from "../../components/ui/Common";

const restRequests = [
  { method: "GET", route: "/me" },
  { method: "GET", route: "/profile/:id" },
  { method: "GET", route: "/blog-posts" },
  { method: "GET", route: "/blog-posts/:id" },
  { method: "GET", route: "/blog-posts/:id?lang=en" },
];

const OneEndpoint = () => {
  return (
    <Container>
      <h1 style={{ textAlign: "center" }}>One endpoint</h1>
      <Row justify="between">
        <Container style={{ marginRight: 64 }}>
          <p>REST: validation, routing, controllers</p>
          {restRequests.map(req => {
            return (
              <p style={{ opacity: 0.4 }}>
                <code>
                  {req.method}&nbsp;{req.route}
                </code>
              </p>
            );
          })}
        </Container>
        <Container style={{ marginLeft: 64 }}>
          <p>
            GraphQL: point to <strong>schema</strong>
          </p>
          <p style={{ opacity: 0.4 }}>
            <code>GET /graphql</code>
          </p>
        </Container>
      </Row>
    </Container>
  );
};

export default OneEndpoint;
