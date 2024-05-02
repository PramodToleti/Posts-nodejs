/*
  This middleware will handle all the errors that are thrown in the application.
  It will catch the error and send the response in JSON format.
*/

const ErrorHandler = (err, req, res, next) => {
  const errStatus = err.statusCode || 500;
  const errMsg = err.message || "Something went wrong";
  res.status(errStatus).json({
    success: false,
    status: errStatus,
    message: errMsg,
    stack: err.stack,
  });
};

export default ErrorHandler;
