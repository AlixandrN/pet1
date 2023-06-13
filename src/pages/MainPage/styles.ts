import { theme } from '../../theme';
import { shadows, ShadowsArray } from '../../theme/shadows';

export const mainPageStyles = {
  // height: '100%',
  pt: '10px',
  display: 'flex',
  justifyContent: 'center',
  gap: '20px',
  flexWrap: 'wrap',
  // flexDirection: 'column',
  // alignItems: 'flex-end',
  // minHeight: '100vh'
};

export const mainPageContainerStyles = {
  bgcolor: 'teal',
  position: 'relative',
  top: '90px',
  height: 'calc(100vh - 90px)'
};

// export const loginBoxStyles = {
//   width: 407,
//   position: 'relative',
//   zIndex: 2,
//   p: 4,
//   mb: 2,
//   backgroundColor: theme.palette.common.white,
//   borderRadius: theme.spacing(1),
//   boxShadow: shadows[ShadowsArray.components]
// };

