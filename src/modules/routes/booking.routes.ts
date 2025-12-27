import { Router } from "express";
import { bookingController } from "../controllers/booking.controller";

const router = Router();
router.post("/", bookingController.createBooking);
router.post("/get-my-bookings", bookingController.getMyBookings);
export const bookingRoutes = router;
