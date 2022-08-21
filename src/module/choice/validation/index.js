const { celebrate, Joi, Segments } = require("celebrate");

class ItemValidator {
  static createItemSchema = celebrate({
    [Segments.BODY]: Joi.array().items(
      Joi.object().keys({
        item: Joi.string().max(64).required(),
        poll_id: Joi.number().integer().positive().required(),
      })
    ),
  });
}
module.exports = ItemValidator;
