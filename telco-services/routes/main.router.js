import express from "express";
import { init } from "../controllers/main.controller.js";

const router = express.Router();

router.get('/', init);

export default router;