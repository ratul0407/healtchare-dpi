import dotenv from "dotenv";
dotenv.config();
export const config = {
  port: Number(process.env.PORT) as number,
  dbUrl: process.env.DB_URL as string,
  frontendUrl: process.env.FRONTEND_URL as string,
};
