import { Request, Response } from "express";
import { catchAsync } from "../../utils/catchAsync";
import { bookingService } from "../services/booking.service";
import sendResponse from "../../utils/sendResponse";

const createBooking = catchAsync(async (req: Request, res: Response) => {
  const result = await bookingService.createBooking(req.body);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    data: result,
    message: "Booking created successfully",
  });
});
const getMyBookings = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.body;
  const result = await bookingService.getMyBookings(id);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    data: result,
    message: "Booking created successfully",
  });
});
export const bookingController = {
  createBooking,
  getMyBookings,
};
