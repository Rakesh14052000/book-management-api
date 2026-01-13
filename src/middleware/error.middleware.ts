import { Request, Response, NextFunction } from "express";
import { AppError } from "../utils/AppError";

export const errorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (!err) return next();

  // console.error("ERROR: ", err);

  const statusCode =
    err instanceof AppError ? err.statusCode : 500;

  res.status(statusCode).json({
    error: err.message || "Server Error"
  });
};
