import express from "express";
import { signIn, signUp } from "../controllers/user";

const router = express.Router();

router.post("/api/signin", signIn);
router.post("/api/signup", signUp);

export default router;