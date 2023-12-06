import Mentee from "../models/Mentee.js";
import mongoose from "mongoose";

const getAllMentees = async (req, res) => {
  try {
    const mentees = await Mentee.find();
    console.log(mentees);
    res.json(mentees);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const specificMentees = async (req, res) => {
  const menteeId = req.params.id;
  try {
    const mentee = await Mentee.findById({ _id: menteeId });
    console.log(mentee);
    res.json(mentee);
  } catch (error) {}
};
const registerMentee = async (req, res) => {
  // const { name, email } = req.body;
  const mentee = new Mentee({
    ...req.body,
  });
  try {
    const savedMentee = await mentee.save();
    console.log(savedMentee);
    res.status(201).json(savedMentee);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const updateMentee = async (req, res) => {
  const { name, email } = req.body;
  const menteeId = req.params.id;
  if (!mongoose.isValidObjectId(menteeId)) {
    return res.status(400).json({ message: "Invalid Mentee ID" });
  }
  try {
    const updatedMentee = await Mentee.findOneAndUpdate(
      { _id: menteeId },
      {
        name,
        email,
        returnOriginal: false,
      },
      { new: true }
    );
    if (!updatedMentee) {
      return res.status(404).json({ message: "Mentee not found" });
    }
    res.json(updatedMentee);
  } catch (error) {
    res.status(500).json(error);
  }
};

const removeMentee = async (req, res) => {
  const menteeId = req.params.id;
  try {
    const deletedMentee = await Mentee.findByIdAndDelete({
      _id: menteeId,
    });
    console.log(deletedMentee);
    if (!deletedMentee) {
      return res.status(404).json({ message: "Mentee not found" });
    }
    res.json(deletedMentee);
  } catch (error) {
    console.log(error);
    res.json(error.message);
  }
};

export {
  getAllMentees,
  registerMentee,
  updateMentee,
  removeMentee,
  specificMentees,
};
