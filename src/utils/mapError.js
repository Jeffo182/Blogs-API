const errorMap = [
  { type: 400, message: { message: 'Some required fields are missing' } },
  { type: 400, message: { message: 'one or more "categoryIds" not found' } },
  { type: 400, message: { message: 'Invalid fields' } },
  { type: 400,
    message: { 
      message: '"displayName" length must be at least 8 characters long',
    } },
  { type: 400, message: { message: '"email" must be a valid email' } },
  { type: 400, message: { message: '"password" length must be at least 6 characters long' } },
  { type: 400, message: { message: '"name" is required' } }, 
  { type: 401, message: { message: 'Unauthorized user' } },
  { type: 401, message: { message: 'Token not found' } }, 
  { type: 401, message: { message: 'Expired or invalid token' } },
  { type: 404, message: { message: 'User does not exist' } },
  { type: 404, message: { message: 'Post does not exist' } },
  { type: 409, message: { message: 'User already registered' } },
  { type: 500, message: { message: 'Message not maping' } },
];

const mapError = (messageError) => {
  const object = errorMap.find((error) => (error.message.message === messageError));

  if (!object) return mapError('Message not maping');

  return object;
  };

module.exports = {
  mapError,
};