import React from "react";

const createStyleGetter = activeStep => step => ({
  opacity: activeStep === step ? 1 : 0.2,
});

const steps = [
  { title: "Looking back" },
  { title: "Different paradigm" },
  { title: "Core Tenets" },
  { title: "Moving faster" },
];

const TableOfContents = props => {
  const { activeStep } = props;

  const getStyle = createStyleGetter(activeStep);

  return (
    <div>
      {steps.map((step, index) => {
        const { title } = step;
        return <h2 style={getStyle(index)}>{title}</h2>;
      })}
    </div>
  );
};

export default TableOfContents;
