import express from "express";
import mainRouter from "./main.router.js";
import dashboardRouter from "./dashboard.router.js";
import roamingRouter from "./roaming.router.js";
import vasRouter from "./vas.router.js";

const router = express.Router();


router.use('/', mainRouter);
router.use('/dashboard', dashboardRouter)
router.use('/roaming', roamingRouter)
router.use('/vas', vasRouter)

export default router;