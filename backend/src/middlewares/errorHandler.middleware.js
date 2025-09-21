export const errorHandler = (err, req, res, next) => {
  if (err instanceof AppError)
    return res.status(err.statusCode).json({
      message: err.message,
      error: err.errorCode,
    });

  return res.status(HTTPSTATUS.INTERNAL_SERVER_ERROR).json({
    message: 'Internal Server Error',
    error: err?.message || 'Unknown error occurred',
  });
};
