import ENV from "./config/env.js";
import express, { type Express } from "express";
import helmet from "helmet";
import morgan from "morgan";
import cors from "cors";
// LOCAL ROUTES IMPORT
import { authRouter } from "./modules/auth/index.js";
import { errorMiddleware } from "./common/middleware/error.middleware.js";
import cookieParser from "cookie-parser";

const app: Express = express();

// MIDDLEWARES
app.use(express.json());
app.use(
  cors({
    origin: ENV.CLIENT_URL,
    credentials: true,
  }),
);
app.use(helmet());
app.use(morgan("dev"));
app.use(cookieParser());

// ROUTES
app.use("/api/auth", authRouter);

app.get("/", (_req, res) => {
  res.json({
    message: "Backend is Running",
  });
});

app.use(errorMiddleware);

export { app };
