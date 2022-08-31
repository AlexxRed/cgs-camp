import React from 'react';
import { ErrorMessage } from 'formik';
import { LableForm, Box, InputForm } from './input-field.component.styled';
import { COLORS } from '../../../theme/colors.const';

interface IInput {
  name: string;
  title?: string;
  type?: 'text' | 'textarea' | 'input' | 'checkbox' | 'password';
  placeholder?: string | boolean;
}
const InputField = ({ name, title, type, placeholder }: IInput) => {
  const renderError = (message: string) => <div style={{ color: COLORS.red }}>{message}</div>;

  return (
    <Box>
      <LableForm htmlFor={name}>
        {title ?? name}
        {type === 'text' && <InputForm name={name} placeholder={placeholder} />}
        {type === 'input' && <InputForm name={name} placeholder={placeholder} />}
        {type === 'password' && <InputForm name={name} placeholder={placeholder} type={type} />}
        {type === 'checkbox' && <InputForm style={{ height: 20 }} name={name} type={type} />}
        {type === 'textarea' && (
          <InputForm name={name} placeholder={placeholder} rows="5" component={type} />
        )}
        <ErrorMessage name={name} render={renderError} />
      </LableForm>
    </Box>
  );
};

export default InputField;
