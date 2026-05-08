import { Router } from "express";
import { signUpController } from "../controllers/auth.controller.js";

const authRouter: Router = Router();

authRouter.route("/signup").post(signUpController);

export { authRouter };
