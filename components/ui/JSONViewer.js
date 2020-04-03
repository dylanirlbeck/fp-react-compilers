import React from "react";
import {
  ObjectInspector,
  chromeLight,
} from "react-inspector";
import { Container } from "./Common";

const JSONViewer = props => {
  const { data } = props;

  return (
    <Container
      style={{
        borderRadius: 4,
        padding: 16,
        backgroundColor: "white",
      }}
    >
      <ObjectInspector
        theme={{
          ...chromeLight,
          TREENODE_FONT_SIZE: "20px",
          TREENODE_LINE_HEIGHT: 1.6,
        }}
        data={data}
        sortObjectKeys
        expandLevel={1}
      />
    </Container>
  );
};

export default JSONViewer;
