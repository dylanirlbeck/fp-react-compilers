import React from "react";
import Footer from "./footer";

const Provider = ({ children, theme, index, slides }) => (
  <div
    css={{
      a: {
        color: theme.colors.link,
        textDecoration: "none",
      },
    }}
  >
    {children}
    <Footer theme={theme} index={index} />
  </div>
);

export default {
  Provider,
};
