import React from "react";
import Button from "../../../components/Button";
import Button2 from "../../../components2/Button";
import { formatNumber } from "../../../utils/utils";

const Template3 = () => {
  return (
    <h1
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",
      }}
    >
      This is Template 3
      <Button
        label="Text Button"
        onClick={() => alert("Button Clicked!")}
        variant="text"
        color="default"
        size="large"
      />
      {formatNumber(1234567890)}
      <Button2
        label="Primary Button"
        onClick={() => alert("Button Clicked!")}
        variant="contained"
        color="primary"
        size="medium"
      />
    </h1>
  );
};

export default Template3;
