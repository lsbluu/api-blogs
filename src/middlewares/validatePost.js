const Joi = require('joi');

const loginValidation = Joi.object({
  title: Joi.string().required(),
  content: Joi.string().required(),
}).messages({
  'any.required': 'Some required fields are missing',
});

const validate = (req, _res, next) => {
  const { error } = loginValidation.validate(req.body, { abortEarly: false });
  if (error) {
    // const message = error.details.map((err) => err.message);
    const erro = { status: 400, message: error.message }; 
    throw erro;
  }  
  next();
};

module.exports = validate;