import express from "express";

import mainRouter from "./main.router.js";
import authRouter from "./auth.router.js";
import dashboardRouter from "./dashboard.router.js";
import roamingRouter from "./roaming.router.js";
import addOne from "./addOns.router.js";

const router = express.Router();

router.use('/', mainRouter);
router.use('/auth', authRouter);
router.use('/dashboard', dashboardRouter)
router.use('/roaming', roamingRouter)

router.use('/addOns', addOne)


export default router;