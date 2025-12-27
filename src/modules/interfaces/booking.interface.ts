enum BookingStatus {
  PENDING = "PENDING",
  COMPLETED = "COMPLETED",
  CANCELLED = "CANCELLED",
}
interface IBooking {
  doctorId: string;
  userId: string;
  date: Date;
  note: string;
  isCompleted: boolean;
  bookingStatus: BookingStatus;
}
