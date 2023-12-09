import mongoose from "mongoose";
const { Schema } = mongoose;

const MentorSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: "User" },
  expertise: String,
  company: String,
});

const Mentor = mongoose.model("Mentor", MentorSchema);
export default Mentor;
