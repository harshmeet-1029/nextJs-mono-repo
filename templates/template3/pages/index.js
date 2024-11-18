import React from "react";
import Button from "../../components/button";

const Template3 = () => {
  return (
    <h1>
      This is Template 3
      <Button
        label="Text Button"
        onClick={() => alert("Button Clicked!")}
        variant="text"
        color="default"
        size="large"
      />
    </h1>
  );
};

export default Template3;
