import express from "express";
import mainRouter from "./main.router.js";
const router = express.Router();


router.use('/', mainRouter);

export default router;