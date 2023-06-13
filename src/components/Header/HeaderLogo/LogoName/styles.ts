import { keyframes } from "@mui/system";

export const appearance = keyframes`
    0% {
        opacity: 0;
        transform: translateX(-100%);
    }
    48% {
        opacity: 0;
    }
    100% {
        opacity: 1;
        transform: translateX(0);
    }
`;

export const logoNameStyles = {
  transition: "0.6s ease",
  "& p": {
    fontSize: "40px",
  },
};

export const logoNameAppearance = `${appearance} .3s linear`;
