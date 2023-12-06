import Mentee from "../models/Mentee.js";

//Get All Mentees

const getAllMentees = async (req, res) => {
  try {
    const mentees = await Mentee.find();
    console.log(mentees);
    res.json(mentees);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
const registerMentee = async (req, res) => {
  const { name, email } = req.body;
  const mentee = new Mentee({
    name,
    email,
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
  const id = req.params.id;
  //   const findMentee = await Mentee.findById({ _id: id });
  //   console.log(findMentee);
  console.log(typeof id);
  try {
    const mentee = await Mentee.findById(id);
    console.log(mentee);
  } catch (error) {
    console.log(error);
  }
};

export { getAllMentees, registerMentee, updateMentee };
