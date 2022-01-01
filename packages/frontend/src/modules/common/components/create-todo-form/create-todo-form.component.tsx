import React, { FC } from 'react';
import { Formik, FormikHelpers } from 'formik';
import { useHistory } from 'react-router-dom';
// import { Notify } from 'notiflix/build/notiflix-notify-aio';

import { Box, CreateTodo, FormTitle, FormButton } from './create-todo-form.styled';
import InputField from '../input-field-component/input-field.component';
import createdTodoValidation from '../../consts/validation/created-todo-validation';
import { ITodo } from '../../types/todo.types';
import { ROUTER_KEYS } from '../../consts/app-keys.const';

interface IProps {
  data: ITodo;
  onSave: (item: ITodo) => void;
  title: string;
}

const CreateTodoFormComponent: FC<IProps> = ({ data, onSave, title }) => {
  const history = useHistory();

  const handleSubmit = (values: ITodo, { resetForm }: FormikHelpers<ITodo>) => {
    onSave(values);
    resetForm();
    history.push(`${ROUTER_KEYS.ROOT}`);
  };

  return (
    <Box>
      <FormTitle>{title}</FormTitle>

      <Formik initialValues={data} onSubmit={handleSubmit} validationSchema={createdTodoValidation}>
        <CreateTodo autoComplete="off">
          <InputField name="title" title="Title" type="text" />
          <InputField name="description" title="Description" type="textarea" />
          <InputField name="year" title="Year" type="text" />
          <InputField name="public" title="Public" type="checkbox" />
          <InputField name="completed" title="Completed" type="checkbox" />
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
