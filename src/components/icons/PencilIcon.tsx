import { SVGProps, FC } from "react";

type TPencilIconPropsTypes = {
  props?: SVGProps<SVGSVGElement>;
};

const PencilIcon: FC<TPencilIconPropsTypes> = (props) => {
  return (
    <svg
      width="17"
      height="17"
      viewBox="0 0 17 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.66732 3.99955L11.5782 2.08872C11.7344 1.93249 11.9463 1.84473 12.1673 1.84473C12.3883 1.84473 12.6002 1.93249 12.7565 2.08872L14.9115 4.24372C15.0677 4.39999 15.1555 4.61191 15.1555 4.83288C15.1555 5.05385 15.0677 5.26578 14.9115 5.42205L13.0007 7.33288M9.66732 3.99955L1.57815 12.0887C1.42186 12.245 1.33403 12.4569 1.33398 12.6779V14.8329C1.33398 15.0539 1.42178 15.2659 1.57806 15.4221C1.73434 15.5784 1.9463 15.6662 2.16732 15.6662H4.32232C4.54331 15.6662 4.75524 15.5783 4.91148 15.4221L13.0007 7.33288M9.66732 3.99955L13.0007 7.33288"
        stroke="#50636C"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default PencilIcon;
