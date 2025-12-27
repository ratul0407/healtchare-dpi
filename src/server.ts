import mongoose from "mongoose";
import { config } from "./config";
import app from "./app";
const bootstrap = async () => {
  await mongoose
    .connect(config.dbUrl)
    .then(() => {
      console.log("Connected to DB");
    })
    .catch((err) => {
      console.log(err);
    });
  app.listen(config.port, () => {
    console.log(`Server is running on port ${config.port}`);
  });
};

bootstrap();
