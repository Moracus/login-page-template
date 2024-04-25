const bcrypt = require("bcrypt");
const UserModel = require("../models/user");

export const registerUser = async (req, res) => {
  try {
    const { password, email } = request.body;
    const hash = await bcrypt.hash(password, 12);
    const user = new UserModel({
      email,
      password: hash,
    });
    await user.save();
    res.status(201).json({
      message: "user registerd succesfully",
      user: {
        _id: user._id,
        email: user.email,
        password: user.password,
      },
    });
  } catch (error) {
    console.error("Error during registration:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await UserModel.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: "Invalid email or password" });
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid email or password" });
    }
    res.status(200).json({
      message: "Login successful",
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
        pic: user.pic,
      },
      token,
    });
  } catch (error) {
    console.error("Error during login:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
