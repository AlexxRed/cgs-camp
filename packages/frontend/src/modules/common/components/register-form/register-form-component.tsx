import React, { FC } from 'react';
import { Formik, FormikHelpers } from 'formik';
import { Box, CreateTodo, FormTitle, FormButton } from './register-form.styled';
import InputField from '../input-field-component/input-field.component';
import registerValidation from '../../consts/validation/register-validation';
import { IUser } from '../../types/user.types';

interface IProps {
  data: IUser;
  onSave: (item: IUser) => void;
  title: string;
}

const LoginFormComponent: FC<IProps> = ({ data, onSave, title }) => {
  const handleSubmit = (values: IUser, { resetForm }: FormikHelpers<IUser>) => {
    onSave(values);
    resetForm();
  };

  return (
    <Box>
      <FormTitle>{title}</FormTitle>

      <Formik initialValues={data} onSubmit={handleSubmit} validationSchema={registerValidation}>
        <CreateTodo autoComplete="off">
          <InputField name="username" title="Username" type="text" />
          <InputField name="email" title="Email" type="text" />
          <InputField name="password" title="Password" type="password" />
          <InputField name="repeat_password" title="Verify Password" type="password" />
          <FormButton type="submit">Register</FormButton>
        </CreateTodo>
      </Formik>
    </Box>
  );
};
export default LoginFormComponent;
