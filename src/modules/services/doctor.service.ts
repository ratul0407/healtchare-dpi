import { Doctor } from "../models/doctor.model";

const registerDoctor = async (doctor: Partial<IDoctor>) => {
  return await Doctor.create(doctor);
};

const getDoctorById = async (id: string) => {
  return await Doctor.findOne({ _id: id });
};
const getAllDoctors = async () => {
  return await Doctor.find();
};
export const doctorService = {
  registerDoctor,
  getDoctorById,
  getAllDoctors,
};
