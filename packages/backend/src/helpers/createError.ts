interface Imessages {
  [key: number]: string;
}

const messages: Imessages = {
  400: 'Bad Request',
  401: 'Not Authorize',
  403: 'Fobidden',
  404: 'Not Found',
  409: 'Conflict'
};

const createError = (status: number, message = messages[status]) => {
  const error = new Error(message);
  return error;
};

export default createError;
