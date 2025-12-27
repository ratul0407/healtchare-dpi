import express, { Request, Response } from "express";
import cors from "cors";
import router from "./modules/routes/index.route";
const app = express();
app.use(cors({ origin: "http://localhost:5173" }));
app.use(express.json());
app.use("/api", router);
app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to HealthCare Backend");
});

export default app;
