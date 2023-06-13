import { keyframes } from '@mui/system';
import { palette } from '../../theme/palette';
import { typography } from '../../theme/typography';

export const appearance = keyframes`
  0% {
    opacity: 1;
  }
  14% {
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
`;

export const inputBoxStyles = {
  position: 'relative',
  maxWidth: 343,
  mb: 2
};

export const inputStyles = {
  mb: 1,
  '& input': {
    py: 1.5625,
    '&::placeholder': {
      color: palette.text.main,
      opacity: 1
    }
  },
  '&.Mui-focused': {
    '& .MuiOutlinedInput-notchedOutline': {
      borderColor: palette.text.disabled,
      borderWidth: '2px'
    }
  },
  '&.Mui-error': {
    '& .MuiOutlinedInput-notchedOutline': {
      borderColor: palette.error.main,
      borderWidth: '1px'
    }
  }
};

export const inputAfter = {
  content: '"+7 "',
  pr: 1,
  position: 'absolute',
  left: '12px',
  zIndex: 1400,
  color: palette.text.primary
};

export const inputLabelStyles = {
  common: {
    mb: 1,
    position: 'absolute',
    top: 14,
    left: 12,
    transition: '.2s linear',

    '&.isLabelVisible': {
      fontSize: '14px'
    }
  },
  transform: 'translateY(-20px) translateX(-12px)',
  animation: `${appearance} .4s linear`
};

export const hintStyles = {
  mt: 0,
  fontSize: typography.hint.fontSize,
  lineHeight: typography.hint.lineHeight,
  fontWeight: typography.hint.fontWeight,
  letterSpacing: 0
};

export const eyeButtonStyles = { mr: '-9px' };
