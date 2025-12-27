import { Request, Response } from "express";
import { catchAsync } from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { medicineService } from "../services/medicine.service";

const getAllMedicine = catchAsync(async (req: Request, res: Response) => {
  const result = await medicineService.getAllMedicine();
  sendResponse(res, {
    statusCode: 200,
    success: true,
    data: result,
    message: "User registered successfully",
  });
});
const getMedicineById = catchAsync(async (req: Request, res: Response) => {
  const result = await medicineService.getMedicineById(req.params.id);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    data: result,
    message: "User registered successfully",
  });
});

export const medicineController = {
  getAllMedicine,
  getMedicineById,
};
