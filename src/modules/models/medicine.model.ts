import { model, Schema } from "mongoose";

const medicineSchema = new Schema(
  {
    medicineName: {
      type: String,
      required: true,
    },

    manufacturer: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    originalPrice: {
      type: Number,
      required: true,
    },
    discount: {
      type: Number,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
  },
  { timestamps: true, versionKey: false }
);
export const Medicine = model("Medicine", medicineSchema);
