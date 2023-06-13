import { createSlice } from "@reduxjs/toolkit";

type TLangState = {
  isEnglish: boolean;
};
const initialState: TLangState = {
  isEnglish: true,
};

const languageSlice = createSlice({
  name: "languageState",
  initialState,
  reducers: {
    changeLang(state) {
      state.isEnglish = !state.isEnglish;
    },
  },
});

export default languageSlice.reducer;
export const { changeLang } = languageSlice.actions;

export const getCurrentLang = (state: {
  languageSlice: { isEnglish: boolean };
}) => state.languageSlice.isEnglish;
