import React, { FC, useState } from 'react';
// import { useField } from 'formik';
import cx from 'classnames';
import {
  Box,
  FormHelperText,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  IconButton
} from '@mui/material';

import { useCapsLockPress } from '../../hooks/useCapsLockPress';
// import { CAPSLOCK_WARNING, LOGIN_OR_PASSWORD_WRONG_WARNING } from 'constants/stringConstants';
import {
  eyeButtonStyles,
  hintStyles,
  inputBoxStyles,
  inputLabelStyles,
  inputStyles
} from './styles';
import Icon from '../Icon';

type TPasswordInputProps = {
  label: string;
  name: string;
  responseError: boolean;
};

export const InputPassword: FC<TPasswordInputProps> = ({ label, responseError, ...props }) => {
  const [isLabelVisible, setIsLabelVisible] = useState(false);
  const [isInputActive, setIsInputActive] = useState(false);
  const [isPasswordShown, setIsPasswordShown] = useState(false);
  const isCapsLockPressed = useCapsLockPress();
//   const [field, meta] = useField(props);

//   const isEyeVisible = isLabelVisible || field.value;
  const isEyeVisible = isLabelVisible;

  const errors = [
    {
      isRelevant: isCapsLockPressed && isInputActive,
      text: 'CAPSLOCK_WARNING'
    },
    // {
    //   isRelevant: meta.error !== undefined,
    //   text: meta.error
    // },
    {
      isRelevant: responseError,
      text: 'LOGIN_OR_PASSWORD_WRONG_WARNING'
    }
  ];

  const firstError = errors.find((error) => error.isRelevant);

  const onPasswordFocus = () => {
    setIsLabelVisible(true);
    setIsInputActive(true);
  };

  const onPasswordBlur = () => {
    // if (!field.value) {
    //   setIsLabelVisible(false);
    // }
    setIsInputActive(false);
  };

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const handleClickShowPassword = () => {
    setIsPasswordShown(!isPasswordShown);
  };

  return (
    <Box sx={inputBoxStyles}>
      <InputLabel
        className={cx({ isLabelVisible })}
        sx={{
          ...inputLabelStyles.common,
          transform: isLabelVisible ? inputLabelStyles.transform : ''
        }}>
        {label}
      </InputLabel>

      <OutlinedInput
        {...props}
        // {...field}
        fullWidth
        onFocus={onPasswordFocus}
        onBlur={onPasswordBlur}
        // error={(isCapsLockPressed && isInputActive) || !!meta.error || responseError}
        error={(isCapsLockPressed && isInputActive) || responseError}
        type={isPasswordShown ? 'text' : 'password'}
        sx={{
          ...inputStyles,
          mt: isLabelVisible ? 2.7 : ''
        }}
        endAdornment={
          <InputAdornment position='end'>
            {responseError ? (
              <Icon name='WarningIcon' />
            ) : (
              isEyeVisible && (
                <IconButton
                  aria-label='toggle password visibility'
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge='end'
                  sx={eyeButtonStyles}>
                  {isPasswordShown ? (
                    <Icon name='PasswordVisibleIcon' />
                  ) : (
                    <Icon name='PasswordInvisibleIcon' />
                  )}
                </IconButton>
              )
            )}
          </InputAdornment>
        }
      />
      {firstError && (
        <FormHelperText error sx={hintStyles}>
          {firstError.text}
        </FormHelperText>
      )}
    </Box>
  );
};
