import { Router } from "express";
import { userController } from "../controllers/user.controller";

const router = Router();
router.post("/register", userController.registerUser);
router.get("/:id", userController.getUser);
export const userRoutes = router;
