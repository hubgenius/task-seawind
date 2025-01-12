const Joi = require("joi");
const validation = require("./validation");

const userCreateSchema = async (req, res, next) => {
  const schema = Joi.object({
    name: Joi.string().required(),
    age: Joi.number().required(),
    email: Joi.string().email().required(),
    phoneNumber: Joi.string().min(10).max(10).required(),
  });
  validation(req, res, next, schema);
};
const userUpdateSchema = async (req, res, next) => {
  const schema = Joi.object({
    name: Joi.string(),
    age: Joi.number(),
    email: Joi.string().email(),
    phoneNumber: Joi.string().min(10).max(10),
  });
  validation(req, res, next, schema);
};

module.exports = { userCreateSchema, userUpdateSchema };
