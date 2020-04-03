import React from "react";

const withLink = Component => props => {
  const { url, ...rest } = props;
  return (
    <a href={url} rel="noopener noreferrer" target="_blank">
      <Component {...rest} />
    </a>
  );
};

export default withLink;
