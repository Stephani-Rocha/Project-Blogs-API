const Joi = require('joi');

const emptyError = (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: 'Some required fields are missing' });
  }
  next();
};

const validateData = (req, res, next) => {
  const schema = Joi.object({
    displayName: Joi.string().min(8).required().messages({
      'string.min': '400|"displayName" length must be at least {#limit} characters long',
    }),
    email: Joi.string().email().required().messages({
      'string.email': '400|"email" must be a valid email' }),
    password: Joi.string().min(6).required().messages({
      'string.min': '400|"password" length must be at least {#limit} characters long',
    }),
    image: Joi.string().required().messages({ 'string.empty': '400|Image are missing' }),
  });
  const { error } = schema.validate(req.body);
  if (error) {
    const [status, message] = error.message.split('|');
    return res.status(Number(status)).json({ message });
  }
  next();
};

const validateName = (req, res, next) => {
  const schema = Joi.object({
    name: Joi.string().required().messages({
      'string.empty': '400|"name" is required',
      'any.required': '400|"name" is required',
    }),
  });
  const { error } = schema.validate(req.body);
  if (error) {
    const [status, message] = error.message.split('|');
    return res.status(Number(status)).json({ message });
  }
  next();
};

module.exports = {
  emptyError,
  validateData,
  validateName,
};