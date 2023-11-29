import Joi from 'joi';

const userValidationSchema = Joi.object({
  userId: Joi.number().required().messages({
    'number.base': 'userId must be a number',
    'any.required': 'userId is required',
  }),
  username: Joi.string().trim().required().messages({
    'string.base': 'username must be a string',
    'any.required': 'username is required',
  }),
  password: Joi.string().required().messages({
    'string.base': 'password must be a string',
    'any.required': 'password is required',
  }),
  fullName: Joi.object({
    firstName: Joi.string()
      .trim()
      .pattern(/^[A-Z][a-z]*$/, { name: 'capitalize' })
      .required()
      .messages({
        'string.base': 'firstName must be a string',
        'string.pattern.base':
          'firstName must start with an uppercase letter followed by lowercase letters',
        'any.required': 'firstName is required',
      }),
    lastName: Joi.string().trim().required().messages({
      'string.base': 'lastName must be a string',
      'any.required': 'lastName is required',
    }),
  })
    .required()
    .messages({
      'object.base': 'fullName must be an object',
      'any.required': 'fullName is required',
    }),
  age: Joi.number().required().messages({
    'number.base': 'age must be a number',
    'any.required': 'age is required',
  }),
  email: Joi.string().email().required().messages({
    'string.base': 'email must be a string',
    'any.required': 'email is required',
  }),
  isActive: Joi.boolean().required().messages({
    'boolean.base': 'isActive must be a boolean',
    'any.required': 'isActive is required',
  }),
  hobbies: Joi.array().items(Joi.string()).required().messages({
    'array.base': 'hobbies must be an array',
    'any.required': 'hobbies are required',
  }),
  address: Joi.object({
    street: Joi.string().required().messages({
      'string.base': 'street must be a string',
      'any.required': 'street is required',
    }),
    city: Joi.string().required().messages({
      'string.base': 'city must be a string',
      'any.required': 'city is required',
    }),
    country: Joi.string().required().messages({
      'string.base': 'country must be a string',
      'any.required': 'country is required',
    }),
  })
    .required()
    .messages({
      'object.base': 'address must be an object',
      'any.required': 'address is required',
    }),
  isDeleted: Joi.boolean().default(false),
  orders: Joi.array()
    .items(
      Joi.object({
        productName: Joi.string().required().messages({
          'string.base': 'productName must be a string',
          'any.required': 'productName is required',
        }),
        price: Joi.number().required().messages({
          'number.base': 'price must be a number',
          'any.required': 'price is required',
        }),
        quantity: Joi.number().required().messages({
          'number.base': 'quantity must be a number',
          'any.required': 'quantity is required',
        }),
      }),
    )
    .optional()
    .messages({
      'array.base': 'orders must be an array',
      'any.required': 'orders are required',
    }),
});

export default userValidationSchema;
