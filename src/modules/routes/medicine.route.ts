import { Router } from "express";
import { medicineController } from "../controllers/medicine.controller";

const router = Router();
router.get("/", medicineController.getAllMedicine);
router.get("/:id", medicineController.getMedicineById);
export const medicineRoutes = router;
