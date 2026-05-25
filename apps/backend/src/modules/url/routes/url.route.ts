import { Router } from "express";
import {
  createShortUrlController,
  deleteShortUrlController,
  redirectToOriginalUrlController,
  urlHealthController,
} from "../controller/url.controller.js";
import { authMiddleware } from "../../auth/index.js";

const urlRouter: Router = Router();

/**
 * @route /api/url/health
 * @desc For checking if the URL module is working
 * @access Public
 */
urlRouter.route("/health").get(urlHealthController);

/**
 * @route /api/url/create
 * @desc For creating a short URL
 * @access Private
 */
urlRouter.route("/create").post(authMiddleware, createShortUrlController);

/**
 * @route /api/url/delete/:urlId
 * @desc For deleting a short URL
 * @access Private
 */
urlRouter
  .route("/delete/:urlId")
  .delete(authMiddleware, deleteShortUrlController);

/**
 * @route /api/url/:shortCode
 * @desc For redirecting to the original URL
 * @access Public
 */
urlRouter.route("/:shortCode").get(redirectToOriginalUrlController);

export { urlRouter };
