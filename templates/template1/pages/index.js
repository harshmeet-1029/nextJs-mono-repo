import React, { useEffect } from "react";
import Button from "../../../components/Button";
import Button2 from "../../../components2/Button";
import { formatNumber } from "../../../utils/utils";
import { getTemplateInitialData } from "../../../utils/fetchProduct";
import { useDispatch, useSelector } from "react-redux";
import setTemplateData from "../../../redux/TemplateSlice";

const Template1 = () => {
  const dispatch = useDispatch();
  const templateData = useSelector((state) => state.template.templateData);
  console.log("templateData: ", templateData);
  const fetchTemplateData = async () => {
    const tData = await getTemplateInitialData(null);
    console.log('tData: ', tData);
    dispatch(setTemplateData(tData));
  };

  useEffect(() => {
    console.log("index.js");
    fetchTemplateData();
  }, []);
  return (
    <h1
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",
      }}
    >
      This is Template 1
      <Button
        label="Primary Button"
        onClick={() => alert("Button Clicked!")}
        variant="contained"
        color="primary"
        size="medium"
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

export default Template1;
