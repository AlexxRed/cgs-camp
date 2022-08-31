import * as yup from 'yup';

const loginValidation = yup.object({
  login: yup.string().min(3, 'Min value 3.').max(30, 'Max value 100.'),
  password: yup.string().required('Password is required')
});

export default loginValidation;
