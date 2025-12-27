import { Medicine } from "../models/medicine.model";

const getAllMedicine = async () => {
  return await Medicine.find();
};
const getMedicineById = async (id: string) => {
  return await Medicine.findOne({ _id: id });
};
export const medicineService = {
  getAllMedicine,
  getMedicineById,
};
