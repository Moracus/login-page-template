import { Schema, model } from "mongoose";

const userSchema = new Schema({
  email: {
    type: String,
    required: [true, "email is required"],
  },
  username: {
    type: String,
    required: [true, "username can not be empty "],
  },
  password: {
    type: String,
    required: [true, "passowrd can not be empty "],
  },
});

export default model("User", userSchema);
