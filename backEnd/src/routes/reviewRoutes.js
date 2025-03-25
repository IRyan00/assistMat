import express from "express";

import {
  createReview,
  getReviews,
  deleteReview,
} from "../controllers/reviewController.js";
import { protect } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/create", protect, createReview);
router.get("/get", protect, getReviews);
router.delete("/delete/:id", protect, deleteReview);

export default router;
