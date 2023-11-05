import express from "express";
import { activateRoamingPack, deactivateRoamingPack, getRoamingData } from "../controllers/roaming.controller.js";

const router = express.Router();


router.get('/:customer_id', getRoamingData);
router.post('/activate/:customer_id', activateRoamingPack);
router.post('/deactivate/:customer_id', deactivateRoamingPack);



export default router;