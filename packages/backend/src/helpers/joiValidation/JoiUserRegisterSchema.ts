import Joi from 'joi';

// const emailRegexp = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;

export const joiUserRegisterSchema = Joi.object({
  username: Joi.string().min(1).max(50),
  email: Joi.string()
    .min(5)
    .max(100)
    .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
  // .pattern(emailRegexp),
  password: Joi.string().min(4).max(16).required()
  // repeat_password: Joi.ref('password')
});
