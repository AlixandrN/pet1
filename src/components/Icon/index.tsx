import React, { CSSProperties, Suspense } from 'react';
import { icons } from '../../components/icons';

export type TIcons = keyof typeof icons;

type TIconProps = {
  name: TIcons;
  style?: CSSProperties;
  onClick?: (event: React.MouseEvent<HTMLOrSVGElement>) => void;
  headerTheme?: string;
  color?: string;
};

const Icon = ({ name, style, headerTheme, ...props }: TIconProps) => {
  const SVGIcon = React.lazy(() => icons[name]);

  return (
    <Suspense fallback={'...loading'}>
      <SVGIcon style={style} {...props} theme={headerTheme} />
    </Suspense>
  );
};

export default React.memo(Icon);
