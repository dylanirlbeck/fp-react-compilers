import React from "react";
import { Container } from "./Common";

const SimpleProfilePlaceholder = () => {
  return (
    <Container
      style={{
        backgroundColor: "rgba(255, 255, 255, 0.3)",
        borderRadius: 6,
        boxShadow: "2px 2px 2px 1px rgba(0, 0, 0, .4)",
        padding: "24px 16px 0 16px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <img
        src="https://thispersondoesnotexist.com/image"
        style={{
          width: 100,
          height: 100,
          borderRadius: 50,
        }}
      />

      <p style={{ fontWeight: "bold" }}>John Smith</p>
    </Container>
  );
};

export default SimpleProfilePlaceholder;
