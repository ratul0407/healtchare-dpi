import { Router } from "express";
import { doctorController } from "../controllers/doctor.controller";

const router = Router();
router.post("/register", doctorController.registerDoctor);
router.get("/", doctorController.getAllDoctors);
router.get("/:id", doctorController.getDoctorById);
export const doctorRoutes = router;
