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

const PORT = Number(process.env.PORT);
const CLIENT_URL = process.env.CLIENT_URL;
const DB_URL = process.env.DATABASE_URL;

if (Number.isNaN(PORT)) {
  throw new Error("Invalid PORT");
}

const envConfig = {
  PORT,
  CLIENT_URL,
  DB_URL,
};

export default envConfig;
