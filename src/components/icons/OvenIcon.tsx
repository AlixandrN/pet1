import { SVGProps, FC } from "react";
import { palette } from "../../theme/palette";

type Types = {
  props?: SVGProps<SVGSVGElement>;
  theme: string;
};

const OvenIcon: FC<Types> = (props) => {
  const isColorThemeLight = props.theme === "light";
  const fillColor = isColorThemeLight
    ? palette.primary.darkGrey
    : palette.primary.lightGrey;

  return (
    <svg
      width="88"
      height="44"
      viewBox="0 0 24 24"
      fill={fillColor}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3 16H21M3 16V19H21V16M3 16V13C3 8.02944 7.02944 4 12 4M21 16V13C21 8.02944 16.9706 4 12 4M12 4V7M12 7C15.3137 7 18 9.68629 18 13V16H6V13C6 9.68629 8.68629 7 12 7ZM20.5 12.5H18M6 12.5H3.5M7.16747 9.70994L4.63878 8.25M9.30144 7.82596L7.75 5.13878M14.6986 7.82596L16.25 5.13878M16.8325 9.70994L19.3612 8.25M13.1402 9.73794C14.1578 11.392 14.6667 12.5905 14.6667 13.3333C14.6667 14.8061 13.4728 16 12 16C10.5272 16 9.33333 14.8061 9.33333 13.3333C9.33333 12.9904 9.44178 12.5503 9.65868 12.0132L11.285 12.9516L13.1402 9.73794Z"
        stroke="#000000"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default OvenIcon;
