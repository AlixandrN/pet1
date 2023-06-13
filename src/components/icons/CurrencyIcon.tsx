import { SVGProps, FC } from 'react';
import { palette } from '../../theme/palette';

type TCurrencyIconPropsTypes = {
  props?: SVGProps<SVGSVGElement>;
  theme: string;
};

export const CurrencyIcon: FC<TCurrencyIconPropsTypes> = (props) => {
  const isColorThemeLight = props.theme === 'light';
  const fillColor = isColorThemeLight ? palette.primary.darkGrey : palette.common.white;

  return (
    <svg
      width='20'
      height='20'
      viewBox='0 0 20 20'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}>
      <path
        d='M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 18C5.59 18 2 14.41 2 10C2 5.59 5.59 2 10 2C14.41 2 18 5.59 18 10C18 14.41 14.41 18 10 18ZM10.31 9.14C8.54 8.69 7.97 8.2 7.97 7.47C7.97 6.63 8.76 6.04 10.07 6.04C11.45 6.04 11.97 6.7 12.01 7.68H13.72C13.67 6.34 12.85 5.11 11.23 4.71V3H8.9V4.69C7.39 5.01 6.18 5.99 6.18 7.5C6.18 9.29 7.67 10.19 9.84 10.71C11.79 11.17 12.18 11.86 12.18 12.58C12.18 13.11 11.79 13.97 10.08 13.97C8.48 13.97 7.85 13.25 7.76 12.33H6.04C6.14 14.03 7.4 14.99 8.9 15.3V17H11.24V15.33C12.76 15.04 13.96 14.17 13.97 12.56C13.96 10.36 12.07 9.6 10.31 9.14Z'
        fill={fillColor}
      />
    </svg>
  );
};

