import dotenv from "dotenv";
import PATH from "path";

const root = PATH.join.bind(this, __dirname, "../");
dotenv.config({path: root(".env")});

export const isProduction = process.env.NODE_ENV === "production";
export const isDevelopment = !isProduction;
export const SERVER = process.env.SERVER;
