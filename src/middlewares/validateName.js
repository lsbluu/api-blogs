const Joi = require('joi');

const loginValidation = Joi.object({
  displayName: Joi.string().required().min(8),
  email: Joi.string().required().email(),
  password: Joi.string().required().min(6),
  image: Joi.string().required(),
}).messages({
  'any.required': '{{#label}} is required',
});

const validateName = (req, _res, next) => {
  const { error } = loginValidation.validate(req.body, { abortEarly: false });
  if (error) {
    // const message = error.details.map((err) => err.message);
    const erro = { status: 400, message: error.message }; 
    throw erro;
  }  
  next();
};

module.exports = validateName;