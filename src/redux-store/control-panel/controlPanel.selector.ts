import { RootState } from "../store";

export const codeSelector = (state: RootState) => state.controlPanel.code;
