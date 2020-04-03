import React from "react";
import { Row, Container } from "../../components/ui/Common";

const clients = [
  {
    title: "Apollo",
    imageSrc: "https://flaviocopes.com/apollo/logo.png",
    href: "https://www.apollographql.com/",
  },
  {
    title: "Relay",
    imageSrc:
      "https://cdn.auth0.com/blog/relay/relay-logo-transparent.png",
    href: "https://relay.dev/",
  },
];

const ClientAlternatives = () => {
  return (
    <Container>
      <h1 style={{ textAlign: "center" }}>
        Client Alternatives
      </h1>
      <p>
        There's a couple more, but these are the big{" "}
        <span
          alt="Dog Emoji"
          role="img"
          aria-label="Dog Emoji"
        >
          🐶
        </span>
      </p>
      <Row justify="between" style={{ marginTop: 100 }}>
        {clients.map(client => {
          return (
            <Container key={client.title}>
              <img
                src={client.imageSrc}
                style={{ width: 250, height: 90 }}
              />
              <a
                href={client.href}
                rel="noopener noreferrer"
                target="_blank"
              >
                <p style={{ textAlign: "center" }}>
                  {client.title}
                </p>
              </a>
            </Container>
          );
        })}
      </Row>
    </Container>
  );
};

export default ClientAlternatives;
