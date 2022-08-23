import Joi from 'joi';

export const JoiTodoCreationSchema = Joi.object({
  title: Joi.string().min(3).required(),
  description: Joi.string().min(5).max(1000),
  year: Joi.number(),
  completed: Joi.boolean().optional(),
  public: Joi.boolean().optional()
});
