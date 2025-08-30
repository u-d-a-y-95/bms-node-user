import { config } from "dotenv";
config();

const {
  NODE_ENV,
  PORT,
  SERVICE_NAME,
  DB_HOST,
  DB_PORT,
  DB_USERNAME,
  DB_PASSWORD,
  DB_NAME,
  JWT_PUBLIC_KEY_PATH,
} = process.env;

export const CONFIG = {
  NODE_ENV,
  PORT: Number(PORT),
  SERVICE_NAME,
  DB_HOST,
  DB_PORT,
  DB_USERNAME,
  DB_PASSWORD,
  DB_NAME,
  JWT_PUBLIC_KEY_PATH,
};
