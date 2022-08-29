import * as yup from 'yup';

const createdTodoValidation = yup.object({
  title: yup
    .string()
    .min(3, 'Min value 3.')
    .max(30, 'Max value 100.')
    .required('Title is required'),
  description: yup
    .string()
    .min(5, 'Min value 5.')
    .max(30, 'Max value 1000.')
    .required('Title is required')
    .required('Description name is required'),
  year: yup.number().required('Year is required'),
  public: yup.boolean(),
  completed: yup.boolean()
});

export default createdTodoValidation;
