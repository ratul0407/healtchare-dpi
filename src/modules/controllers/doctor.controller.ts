import { Request, Response } from "express";
import { catchAsync } from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { doctorService } from "../services/doctor.service";

const registerDoctor = catchAsync(async (req: Request, res: Response) => {
  const result = await doctorService.registerDoctor(req.body);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    data: result,
    message: "User registered successfully",
  });
});

const getDoctorById = catchAsync(async (req: Request, res: Response) => {
  const result = await doctorService.getDoctorById(req.params.id);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    data: result,
    message: "User fetched successfully",
  });
});

const getAllDoctors = catchAsync(async (req: Request, res: Response) => {
  const result = await doctorService.getAllDoctors();
  sendResponse(res, {
    statusCode: 200,
    success: true,
    data: result,
    message: "User fetched successfully",
  });
});
export const doctorController = {
  registerDoctor,
  getDoctorById,
  getAllDoctors,
};
