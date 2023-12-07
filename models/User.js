import mongoose from "mongoose";
const { Schema } = mongoose;

const UserSchema = new Schema({
  username: {
    type: String,
    required: true,
    minlength: [5, "Username Must be at least 6, got {VALUE}"],
    maxlength: 20,
  },
  email: {
    type: String,
    required: [true, "Email is required"],
  },
  password: {
    type: String,
    required: true,
    min: [6, "Password Must be at least 6, got {VALUE}"],
    max: 12,
  },
  role: String,
});

const User = mongoose.model("User", UserSchema);
export default User;
