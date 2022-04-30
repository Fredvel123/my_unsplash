import express from "express";
const router = express.Router();
// services
import { getAllUsers } from "../services/users.services.js";

router.get('/all', getAllUsers);

export default router;