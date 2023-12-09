import Mentee from "../models/Mentee.js";
import Mentor from "../models/Mentor.js";
import User from "../models/User.js";
const signUp = async (req, res) => {
  const { username, email, password, role } = req.body;
  try {
    const existingUser = await User.findOne({ $or: [{ email }, { username }] });
    if (existingUser) {
      return res.json({ message: "User already exists" });
    }

    const newUser = new User({ username, email, password, role });

    // Validate user schema before saving
    const validationError = newUser.validateSync();
    if (validationError) {
      const errors = Object.values(validationError.errors).map(
        (error) => error.message
      );
      return res.status(400).json({ error: errors });
    }

    if (role === "mentee" || role === "mentor") {
      const savedUser = await newUser.save();

      if (role === "mentee") {
        const newMentee = new Mentee({ user: savedUser._id });
        const savedMentee = await newMentee.save();
        return res.json({
          message: "Mentee signed up successfully",
          mentee: savedMentee,
        });
      } else if (role === "mentor") {
        const newMentor = new Mentor({ user: savedUser._id });
        const savedMentor = await newMentor.save();
        return res.json({
          message: "Mentor signed up successfully",
          mentor: savedMentor,
        });
      }
    } else {
      return res.json({
        message: "Role not recognized. User not saved.",
      });
    }
  } catch (error) {
    console.error("Error occurred:", error);
    return res
      .status(500)
      .json({ error: error.message || "An error occurred during signup" });
  }
};

const getUser = async (req, res) => {
  try {
    const user = await User.find();
    res.json(user);
  } catch (err) {
    res.send(err);
  }
};

export { signUp, getUser };
