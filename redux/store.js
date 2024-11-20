import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import TemplateReducer from "./TemplateSlice";

const store = configureStore({
  reducer: {
    template: TemplateReducer,
  },
  middleware: [thunk],
});

export default store;
