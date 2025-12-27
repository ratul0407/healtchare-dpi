import { model, Schema } from "mongoose";

const bookingSchema = new Schema<IBooking>(
  {
    doctorId: {
      type: String,
      required: true,
    },
    userId: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
    note: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export const Booking = model<IBooking>("Booking", bookingSchema);
