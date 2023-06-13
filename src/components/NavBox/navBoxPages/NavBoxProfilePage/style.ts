import { theme } from "../../../../theme";

export const tabStyles = {
  color: theme.palette.text.primary,
  fontWeight: 400,
  textTransform: "none",
  padding: "15px 12px",
  fontSize: "16px",
  "&.Mui-selected": {
    color: theme.palette.text.primary,
    fontWeight: 700,
  },
};

export const contentContainerStyles = {
  pt: 5,
  pb: 2.5,
  pl: 5,
  pr: 9,
  
  flexDirection: "column",
  justifyContent: "space-between",
  width: "calc(100vw - 388px)",
//   backgroundColor: "#FCFDFD",
  backgroundColor: "grey",
  display: "flex",
  height: '100%',
};

export const tabPanelStyles = {
  backgroundColor: theme.palette.common.white,
  height: "100%",
  width: "100%",
  padding: "40px 50px 0px 50px",
};
