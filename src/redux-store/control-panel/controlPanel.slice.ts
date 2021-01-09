import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ControlPanel {
  code: string;
}

const initialState: ControlPanel = {
  code: "",
};

const { reducer: controlPanelReducer, actions } = createSlice({
  name: "controlPanel",
  initialState,
  reducers: {},
});

export default controlPanelReducer;
