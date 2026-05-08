import ENV from "./config/envConfig.js";
import express, { type Express } from "express";
import helmet from "helmet";
import morgan from "morgan";
import cors from "cors";
// LOCAL ROUTES IMPORT
import { authRouter } from "./routes/auth.route.js";
import { errorMiddleware } from "./middleware/error.middleware.js";

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

// ROUTES
app.use("/api/auth", authRouter);

app.get("/", (_req, res) => {
  res.json({
    message: "Backend is Running",
  });
});

app.use(errorMiddleware);

export { app };
