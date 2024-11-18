import React from "react";
import Button from "../../components/button";

const Template1 = () => {
  return (
    <h1>
      This is Template 1
      <Button
        label="Primary Button"
        onClick={() => alert("Button Clicked!")}
        variant="contained"
        color="primary"
        size="medium"
      />
    </h1>
  );
};

export default Template1;
