import React from "react";
import Button from "../../components/button";

const Template2 = () => {
  return (
    <h1>
      This is Template 2
      <Button
        label="Secondary Button"
        onClick={() => alert("Button Clicked!")}
        variant="outlined"
        color="secondary"
        size="small"
      />
    </h1>
  );
};

export default Template2;
