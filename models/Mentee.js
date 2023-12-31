import mongoose from "mongoose";
const { Schema } = mongoose;

const MenteeSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: "User" },
  expertise: String,
  college: String,
});

const Mentee = mongoose.model("Mentee", MenteeSchema);
export default Mentee;
