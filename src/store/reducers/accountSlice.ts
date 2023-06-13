import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const hasAccess = () => {
  return localStorage.getItem('hasAccess') === 'true';
};

const getUserName = () => {
  const storageUserName = localStorage.getItem('accountUserName');
  return typeof storageUserName === 'string' ? storageUserName : ' ';
};

type TAccountState = {
  isAuthorized: boolean;
  accountUserName: string;
};

const initialState: TAccountState = {
  isAuthorized: hasAccess(),
  accountUserName: getUserName(),
};

const accountSlice = createSlice({
  name: "accountState",
  initialState,
  reducers: {
    logIn(state, action: PayloadAction<string>) {
      console.log('action is: ', action) // delete
      localStorage.setItem('hasAccess', 'true');
      localStorage.setItem('accountUserName', action.payload);
      state.isAuthorized = hasAccess();
      state.accountUserName = getUserName();
    },
    logOut(state) {
      localStorage.setItem('hasAccess', 'false');
      localStorage.removeItem('accountUserName');
      state.isAuthorized = hasAccess();
    },
  },
});

export default accountSlice.reducer;
export const { logIn, logOut } = accountSlice.actions;

export const getAccountStatus = (state: {
  accountSlice: { isAuthorized: boolean };
}) => state.accountSlice.isAuthorized;

export const getAccountUserName = (state: {
  accountSlice: { accountUserName: string };
}) => state.accountSlice.accountUserName;
