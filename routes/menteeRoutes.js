import express from "express";
import {
  getAllMentees,
  registerMentee,
  updateMentee,
} from "../controller/MenteeController.js";

const router = express.Router();

router.get("/", getAllMentees);
router.post("/", registerMentee);
router.get("/:id", updateMentee);
export default router;
