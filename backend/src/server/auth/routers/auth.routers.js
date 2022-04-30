import express from "express";
const router = express.Router();
// services
import { createNewUser, registerUser } from "../services/auth.services.js";

router.post('/signup', createNewUser);
router.post('/login', registerUser)

export default router;