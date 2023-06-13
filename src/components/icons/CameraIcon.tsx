import { SVGProps, FC } from "react";

type TCameraIconPropsTypes = {
  props?: SVGProps<SVGSVGElement>;
};

const CameraIcon: FC<TCameraIconPropsTypes> = (props) => {
  return (
    <svg
      width="20"
      height="18"
      viewBox="0 0 20 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.17 2.9H5.5664L5.83399 2.60755L7.3964 0.9H12.6036L14.166 2.60755L14.4336 2.9H14.83H18C18.6029 2.9 19.1 3.39706 19.1 4V16C19.1 16.6029 18.6029 17.1 18 17.1H2C1.39706 17.1 0.9 16.6029 0.9 16V4C0.9 3.39706 1.39706 2.9 2 2.9H5.17ZM13.9 10C13.9 7.85294 12.1471 6.1 10 6.1C7.85294 6.1 6.1 7.85294 6.1 10C6.1 12.1471 7.85294 13.9 10 13.9C12.1471 13.9 13.9 12.1471 13.9 10Z"
        stroke="white"
        strokeWidth="1.8"
      />
    </svg>
  );
};

export default CameraIcon;
