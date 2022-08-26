import * as yup from 'yup';

const createdTodoValidation = yup.object({
  title: yup.string().required('Title is required'),
  description: yup.string().required('Description name is required'),
  year: yup.number().required('Year is required'),
  public: yup.boolean(),
  completed: yup.boolean()
});

export default createdTodoValidation;
