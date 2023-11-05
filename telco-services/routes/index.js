import express from "express";
import mainRouter from "./main.router.js";
import dashboardRouter from "./dashboard.router.js";
import roamingRouter from "./roaming.router.js";

const router = express.Router();


router.use('/', mainRouter);
router.use('/dashboard', dashboardRouter)
router.use('/roaming', roamingRouter)

export default router;