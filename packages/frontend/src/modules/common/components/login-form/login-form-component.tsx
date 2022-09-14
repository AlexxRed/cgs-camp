import React, { FC } from 'react';
import { Formik, FormikHelpers } from 'formik';

import { Box, CreateTodo, FormTitle, FormButton } from './login-form.styled';
import InputField from '../input-field-component/input-field.component';
import loginValidation from '../../consts/validation/login-validation';
import { IUser } from '../../types/user.types';

interface IProps {
  data: IUser;
  onSave: (item: IUser) => void;
  title: string;
}

const RegisterFormComponent: FC<IProps> = ({ data, onSave, title }) => {
  const handleSubmit = (values: IUser, { resetForm }: FormikHelpers<IUser>) => {
    onSave(values);
    resetForm();
    // history.push(`${ROUTER_KEYS.ROOT}`);
  };

  return (
    <Box>
      <FormTitle>{title}</FormTitle>

      <Formik initialValues={data} onSubmit={handleSubmit} validationSchema={loginValidation}>
        <CreateTodo autoComplete="off">
          <InputField name="login" title="Username/Email" type="text" />
          <InputField name="password" title="Password" type="password" />
          <FormButton type="submit">Login</FormButton>
        </CreateTodo>
      </Formik>
    </Box>
  );
};
export default RegisterFormComponent;
