import { Response } from "express";

interface TResponse<T> {
  statusCode: number;
  success: boolean;
  data: T;
  message: string;
}
const sendResponse = <T>(res: Response, data: TResponse<T>) => {
  res.status(data.statusCode).json({
    statusCode: data.statusCode,
    success: data.success,
    data: data.data,
    message: data.message,
  });
};

export default sendResponse;
