import React from "react";

const Footer = () => (
  <ul
    css={{
      position: "fixed",
      display: "flex",
      flexWrap: "nowrap",
      justifyContent: "flex-end",
      alignItems: "center",
      width: "100%",
      right: 0,
      bottom: 0,
      margin: 16,
      listStyleType: "none",
      opacity: 0.75,
      li: {
        padding: 8,
      },
    }}
  >
    <li>{"Hi"}</li>
    <li></li>
    <li css={{ flexGrow: 1 }}></li>
    <li>{"Dylan Irlbeck"}</li>
    <li></li>
  </ul>
);

export default Footer;
