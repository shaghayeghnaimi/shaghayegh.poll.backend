const { celebrate, Joi, Segments } = require('celebrate');

class UserValidator {
  
  static createUserSchema = celebrate({
    [Segments.BODY]: Joi.object().keys({
      first_name: Joi.string().required(),
      last_name: Joi.string().default("teymori"),
      mobile: Joi.string().required(),
      email: Joi.string().email().required(),
      password: Joi.string().min(5).required(),
    }),
  });
  
  static updateUserSchema  = celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      id: Joi.number().integer().positive().required(),
    }),
    [Segments.BODY]: Joi.object().keys({
      first_name: Joi.string(),
      last_name: Joi.string(),
      mobile: Joi.string(),
      email: Joi.string().email(),
    })
  })
}

module.exports = UserValidator;