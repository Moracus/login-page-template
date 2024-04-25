const express = require("express");
import { registerUser, login } from "../controller/user.controller";
const router = express.Router();
router.post("/register", registerUser);
router.post("/login", login);
export default router;
