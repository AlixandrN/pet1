import { theme } from "../../theme";

export const cardStyle = {
  py: '5px', 
  minWidth: "250px",
  height: "400px",
  bgcolor: theme.palette.primary.main,
  borderRadius: "5%",
  position: "relative",
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '5px'
};


export const productWrapStyle = {
  width: "150px",
  height: "150px",
  bgcolor: theme.palette.common.black,
  borderRadius: "100%",
  position: "relative",
};

export const circleStyle = {
  top: "50%",
  transform: "translate(0, -50%)",
  mx: "auto",
  width: "100px",
  height: "100px",
  borderRadius: "100%",
  position: "relative",
};

export const additionalBtnStyle = {
  bgcolor: theme.palette.primary.green,
  width: "36px",
  height: "36px",
  borderRadius: "100%",
  position: "absolute",
  top: "64px",
  left: "64px",
  cursor: "pointer",

  // "& svg": {
  //   position: "absolute",
  //   top: "5px",
  //   left: "11.33px",
  // },
};

export const textStyle = {
  position: "absolute",
  top: "1px",
  left: "13px",
  fontWeight: "500",
};

export const avatarStyle = {
  width: "100%",
  height: "100%",
};

export const labelWrapStyle = {
  "& .blackout": {
    bgcolor: "#212529",
    width: "100%",
    height: "100%",
    borderRadius: "100%",
    position: "absolute",
    top: "0",
    left: "0",
    opacity: "0",
  },

  "& .btn": {
    width: "100%",
    height: "100%",
    position: "absolute",
    top: "0",
    left: "0",
    opacity: "0",
  },

  "&:hover .blackout": {
    opacity: "0.3",
    transition: "0.5s",
  },

  "&:hover .btn": {
    opacity: "1",
    transition: "0.5s",
  },
};
