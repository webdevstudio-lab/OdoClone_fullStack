import { ErrorCodeEnum } from '#enums/error-code.enum.js';
import { HTTPSTATUS } from '#config/http.config.js';

export class AppError extends Error {
  constructor(message, statusCode, errorCode) {
    super(message);
    this.statusCode = statusCode;
    this.errorCode = errorCode;

    Error.captureStackTrace(this, this.constructor);
  }
}

export class HttpException extends AppError {
  constructor(message = 'Http Exception Error', statusCode) {
    super(message, statusCode, ErrorCodeEnum.VALIDATION_ERROR);
  }
}

export class ForbiddenException extends AppError {
  constructor(message = 'Forbidden') {
    super(message, HTTPSTATUS.FORBIDDEN, ErrorCodeEnum.FORBIDDEN);
  }
}

export class Internal extends AppError {
  constructor(message = 'Internal Server Error') {
    super(
      message,
      HTTPSTATUS.INTERNAL_SERVER_ERROR,
      ErrorCodeEnum.INTERNAL_SERVER_ERROR
    );
  }
}

export class BadRequestException extends AppError {
  constructor(message = 'Bad Request') {
    super(message, HTTPSTATUS.BAD_REQUEST, ErrorCodeEnum.VALIDATION_ERROR);
  }
}

export class NotFoundException extends AppError {
  constructor(message = 'Not Found') {
    super(message, HTTPSTATUS.NOT_FOUND, ErrorCodeEnum.RESOURCE_NOT_FOUND);
  }
}

export class UnauthorizedException extends AppError {
  constructor(message = 'Unauthorized') {
    super(message, HTTPSTATUS.UNAUTHORIZED, ErrorCodeEnum.ACCESS_UNAUTHORIZED);
  }
}

export class ConflictException extends AppError {
  constructor(message = 'Conflict') {
    super(message, HTTPSTATUS.CONFLICT, ErrorCodeEnum.CONFLICT);
  }
}
