import * as yup from 'yup';

const registerValidation = yup.object({
  username: yup
    .string()
    .min(1, 'Min value 2.')
    .max(50, 'Max value 100.')
    .required('Name is required'),
  email: yup.string().min(5).max(100).required('Email is required'),
  password: yup
    .string()
    .min(8, 'Password should be of minimum 8 characters length')
    .required('Password is required'),
  repeat_password: yup
    .string()
    .min(8, 'Password should be of minimum 8 characters length')
    .oneOf([yup.ref('password'), null], 'Password must match')
    .required('Verify assword is required')
});

export default registerValidation;
