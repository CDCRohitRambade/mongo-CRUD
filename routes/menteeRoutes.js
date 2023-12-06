import express from "express";
import {
  getAllMentees,
  registerMentee,
  removeMentee,
  specificMentees,
  updateMentee,
} from "../controller/MenteeController.js";

const router = express.Router();

router.get("/", getAllMentees);
router.get("/:id", specificMentees);
router.post("/", registerMentee);
router.post("/:id", updateMentee);
router.delete("/:id", removeMentee);
export default router;
