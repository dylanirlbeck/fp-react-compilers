import React from "react";
import { Image } from "mdx-deck";
import { Row } from "../../../../components/ui/Common";

const PreviousWork = props => {
  const { images, ...rest } = props;
  return (
    <Row align="center" justify="between" {...rest}>
      {images.map(src => {
        return (
          <Image
            key={src}
            src={src}
            size={80}
            style={{
              width: 80,
              height: 80,
              marginHorizontal: 16,
            }}
          />
        );
      })}
    </Row>
  );
};

export default PreviousWork;
