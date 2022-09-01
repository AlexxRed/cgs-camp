import Joi from 'joi';

export const joiUserLoginSchema = Joi.object({
  username: Joi.string().min(1).max(50),
  email: Joi.string().email({
    minDomainSegments: 2,
    tlds: { allow: ['com', 'net'] }
  }),
  password: Joi.string().min(4).required()
});
