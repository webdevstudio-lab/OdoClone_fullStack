import { AppError } from '#utils/app-error.js';
import { HTTPSTATUS } from '#config/http.config.js';
import { z, ZodError } from 'zod';

const formatZodErrors = (res, error) => {
  const errors = error?.issues?.map(err => ({
    field: err.path.join('.'),
    message: err.message,
  }));
  return res.status(HTTPSTATUS.BAD_REQUEST).json({
    message: 'Erreur de validation des données envoyées',
    errors: errors,
  });
};

export const errorHandler = (err, req, res, next) => {
  if (err instanceof ZodError) return formatZodErrors(res, err);
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
