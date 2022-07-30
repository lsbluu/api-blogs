const Joi = require('joi');

const nameValidation = Joi.object({
  name: Joi.string().required(),
}).messages({
  'any.required': '{{#label}} is required',
});

const validateName = (req, res, next) => {
  const { error } = nameValidation.validate(req.body, { abortEarly: false });
  if (error) {
    const erro = { status: 400, message: error.message };
    throw erro;
  }
  next();
};

module.exports = validateName;