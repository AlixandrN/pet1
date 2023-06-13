import { SVGProps, FC } from 'react';
import { palette } from '../../theme/palette';

type TPhoneIconPropsTypes = {
  props?: SVGProps<SVGSVGElement>;
  theme: string;
};

export const PhoneIcon: FC<TPhoneIconPropsTypes> = (props) => {
  const isColorThemeLight = props.theme === 'light';
  const fillColor = isColorThemeLight ? palette.primary.darkGrey : palette.common.white;

  return (
    <svg
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}>
      <path
        d='M17 2H7C5.89543 2 5 2.89543 5 4V20C5 21.1046 5.89543 22 7 22H17C18.1046 22 19 21.1046 19 20V4C19 2.89543 18.1046 2 17 2Z'
        stroke={fillColor}
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M12 18H12.01'
        stroke={fillColor}
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};
