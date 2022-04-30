import express from "express";
const router = express.Router();
// services
import { createNewUser } from "../services/auth.services.js";

router.post('/signup', createNewUser);


export default router;