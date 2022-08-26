import React, { FC } from 'react';
import { Formik, ErrorMessage, FormikHelpers } from 'formik';
import { useHistory } from 'react-router-dom';
// import { Notify } from 'notiflix/build/notiflix-notify-aio';

import {
  LableForm,
  Box,
  CreateTodo,
  FormTitle,
  InputForm,
  FormButton
} from './create-todo-form.styled';
import createdTodoValidation from '../../consts/validation/created-todo-validation';
import { ITodo } from '../../types/todo.types';
import { ROUTER_KEYS } from '../../consts/app-keys.const';

interface IProps {
  data: ITodo;
  onSave: (item: ITodo) => void;
  title: string;
}
// const initialValues = {
//     title: '',
//     description: '',
//     year: 2022,
//     public: false,
//     completed: false
//   };

const CreateTodoFormComponent: FC<IProps> = ({ data, onSave, title }) => {
  const history = useHistory();

  const handleSubmit = (values: ITodo, { resetForm }: FormikHelpers<ITodo>) => {
    onSave(values);
    resetForm();
    history.push(`${ROUTER_KEYS.ROOT}`);
  };

  const renderError = (message: string) => <div style={{ color: 'red' }}>{message}</div>;

  return (
    <Box>
      <FormTitle>{title}</FormTitle>

      <Formik initialValues={data} onSubmit={handleSubmit} validationSchema={createdTodoValidation}>
        <CreateTodo autoComplete="off">
          <LableForm htmlFor="title">
            Title
            <InputForm type="text" name="title" placeholder="Example title" />
          </LableForm>
          <ErrorMessage name="title" render={renderError} />

          <LableForm htmlFor="description">
            Description
            <InputForm
              component="textarea"
              rows="5"
              name="description"
              placeholder="Your Todo here"
            />
          </LableForm>
          <ErrorMessage name="description" render={renderError} />

          <LableForm htmlFor="year">
            Year
            <InputForm type="text" name="year" placeholder="2022" />
          </LableForm>
          <ErrorMessage name="year" render={renderError} />

          <LableForm htmlFor="public" style={{ display: 'flex' }}>
            Public
            <InputForm style={{ height: 20 }} type="checkbox" name="public" />
          </LableForm>

          <LableForm htmlFor="completed">
            Completed
            <InputForm style={{ height: 20 }} type="checkbox" name="completed" />
          </LableForm>
          {title === 'Create new Todo' ? (
            <FormButton type="submit">Create</FormButton>
          ) : (
            <FormButton type="submit">Edit</FormButton>
          )}
        </CreateTodo>
      </Formik>
    </Box>
  );
};

export default CreateTodoFormComponent;
