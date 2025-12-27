import { Request, Response } from "express";
import { catchAsync } from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { userService } from "../services/user.service";

const registerUser = catchAsync(async (req: Request, res: Response) => {
  const result = await userService.registerUser(req.body);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    data: result,
    message: "User registered successfully",
  });
});

const getUser = catchAsync(async (req: Request, res: Response) => {
  const result = await userService.getUser(req.params.id);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    data: result,
    message: "User fetched successfully",
  });
});
export const userController = {
  registerUser,
  getUser,
};
