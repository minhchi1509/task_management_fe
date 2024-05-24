import { MenuItem, styled, TextField, TextFieldProps } from '@mui/material';
import React from 'react';

interface ISelectOption {
  label: string;
  value: string;
}
type TSelectProps = TextFieldProps & {
  options: ISelectOption[];
};

const StyledTextField = styled(TextField)({
  '& .MuiFormHelperText-root': {
    marginLeft: '3px'
  }
});

const Select: React.FC<TSelectProps> = ({ options, ...otherProps }) => {
  return (
    <StyledTextField size="small" select {...otherProps}>
      {options.map((option, index) => (
        <MenuItem key={index} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </StyledTextField>
  );
};

export default Select;
