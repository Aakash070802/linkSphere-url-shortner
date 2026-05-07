import dotenv from "dotenv";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({
  path: path.resolve(__dirname, "../../../../.env"),
});

if (!process.env.PORT) {
  throw new Error("PORT is not present in ENV file!");
}

if (!process.env.CLIENT_URL) {
  throw new Error("CLIENT_URL is not present in ENV file!");
}

const PORT = Number(process.env.PORT);
const CLIENT_URL = process.env.CLIENT_URL;

if (Number.isNaN(PORT)) {
  throw new Error("Invalid PORT");
}

const envConfig = {
  PORT,
  CLIENT_URL,
};

export default envConfig;
