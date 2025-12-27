import { Booking } from "../models/booking.model";

const createBooking = async (booking: Partial<IBooking>) => {
  return await Booking.create(booking);
};

const getMyBookings = async (id: string) => {
  await Booking.find({ userId: id });
};
export const bookingService = {
  createBooking,
  getMyBookings,
};
