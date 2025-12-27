import { Router } from "express";
import { userRoutes } from "./user.route";
import { doctorRoutes } from "./doctor.routes";
import { bookingRoutes } from "./booking.routes";
const router = Router();
const moduleRoutes = [
  {
    path: "/user",
    routes: userRoutes,
  },
  {
    path: "/doctor",
    routes: doctorRoutes,
  },
  {
    path: "/booking",
    routes: bookingRoutes,
  },
];
moduleRoutes.forEach((route) => {
  router.use(route.path, route.routes);
});
export default router;
