import User from "../models/User.js";
import { handleValidationError } from "../utils/validationError.js";
const signUp = async (req, res) => {
  const { username, email, password, role } = req.body;
  try {
    const existingUser = await User.findOne({ $or: [{ email }, { username }] });
    console.log(existingUser);
    if (existingUser) {
      return res.json({ message: "User already exists" });
    }

    const newUser = new User({
      username,
      email,
      password,
      role,
    });

    const savedUser = await newUser.save();
    res.json({ message: "User signed up successfully", id: savedUser.id });
  } catch (error) {
    handleValidationError(error, res);
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
