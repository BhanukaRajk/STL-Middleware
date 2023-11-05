import express from "express";

import mainRouter from "./main.router.js";
import authRouter from "./auth.router.js";

const router = express.Router();


router.use('/', mainRouter);
router.use('/auth', authRouter);


export default router;