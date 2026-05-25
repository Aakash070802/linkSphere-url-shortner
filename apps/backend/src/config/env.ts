import dotenv from "dotenv";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({
  path: path.resolve(__dirname, "../../../../.env"),
});

if (process.env.PORT === undefined) {
  throw new Error("PORT is not present in ENV file!");
}

if (process.env.CLIENT_URL === undefined) {
  throw new Error("CLIENT_URL is not present in ENV file!");
}

if (process.env.DATABASE_URL === undefined) {
  throw new Error("DATABASE_URL is not present in ENV file!");
}

if (process.env.REDIS_URL === undefined) {
  throw new Error("REDIS_URL is not present in ENV file!");
}

if (process.env.ACCESS_TOKEN_SECRET === undefined) {
  throw new Error("ACCESS_TOKEN_SECRET is not present in ENV file!");
}

if (process.env.ACCESS_EXPIRES_IN === undefined) {
  throw new Error("ACCESS_EXPIRES_IN is not present in ENV file!");
}

if (process.env.REFRESH_TOKEN_SECRET === undefined) {
  throw new Error("REFRESH_TOKEN_SECRET is not present in ENV file!");
}

if (process.env.REFRESH_EXPIRES_IN === undefined) {
  throw new Error("REFRESH_EXPIRES_IN is not present in ENV file!");
}

if (process.env.NODE_ENV === undefined) {
  throw new Error("NODE_ENV is not present in ENV file!");
}

const PORT = Number(process.env.PORT);
const CLIENT_URL = process.env.CLIENT_URL;
const DB_URL = process.env.DATABASE_URL;
const REDIS_URL = process.env.REDIS_URL;
const ACCESS_TOKEN_SECRET = process.env.ACCESS_TOKEN_SECRET;
const ACCESS_EXPIRES_IN = process.env.ACCESS_EXPIRES_IN;
const REFRESH_TOKEN_SECRET = process.env.REFRESH_TOKEN_SECRET;
const REFRESH_EXPIRES_IN = process.env.REFRESH_EXPIRES_IN;
const NODE_ENV = process.env.NODE_ENV;

if (Number.isNaN(PORT)) {
  throw new Error("Invalid PORT");
}

const ENV = {
  PORT,
  CLIENT_URL,
  DB_URL,
  REDIS_URL,
  ACCESS_TOKEN_SECRET,
  ACCESS_EXPIRES_IN,
  REFRESH_TOKEN_SECRET,
  REFRESH_EXPIRES_IN,
  NODE_ENV,
};

export default ENV;
