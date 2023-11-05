import express from "express";
import { init, vasCheck } from "../controllers/main.controller.js";

const router = express.Router();

router.get('/', init);
router.get('/vas', vasCheck);

export default router;