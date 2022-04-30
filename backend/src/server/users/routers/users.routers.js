import express from "express";
const router = express.Router();
// services
import { deleteUser, getAllUsers } from "../services/users.services.js";
// verify token
import { verifyToken } from "../../auth/middlewares/jwt.verify.js";

router.get('/all', getAllUsers);
router.post('/delete', verifyToken, deleteUser)

export default router;