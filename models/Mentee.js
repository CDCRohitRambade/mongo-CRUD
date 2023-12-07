import mongoose from "mongoose";
const { Schema } = mongoose;

const MenteeSchema = new Schema({
  name: String,
  username: String,
  email: String,
  password: String,
  role:String,
  college: String,
});

const Mentee = mongoose.model("Mentee", MenteeSchema);
export default Mentee;
