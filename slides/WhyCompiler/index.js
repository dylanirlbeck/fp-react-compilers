import React from "react";
import ImagesRow from "../Author/components/ImagesRow";

const WhyCompiler = props => {
  return (
    <div>
      <h2>Why write a compiler?</h2>
      <li>Show off the core features of Reason</li>
      <li>It's what Reason/OCaml is especially good at</li>
      <ImagesRow
        style={{ opacity: 1.0, marginTop: 20 }}
        images={[
          "https://flow.org/static/ogp-1200x630-1.png",
          "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Hack_%28programming_language%29_logo.svg/1200px-Hack_%28programming_language%29_logo.svg.png",
          "https://research.fb.com/wp-content/uploads/2016/12/infer.jpg",
        ]}
      />
    </div>
  );
};

export default WhyCompiler;
