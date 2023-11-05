import express from "express";
import { activateRoamingPack, deactivateRoamingPack, getRoamingData, getRoamingPacks } from "../controllers/roaming.controller.js";

const router = express.Router();


router.get('/packs', getRoamingPacks);
router.get('/:customer_id', getRoamingData);
router.post('/activate/:customer_id', activateRoamingPack);
router.post('/deactivate/:customer_id', deactivateRoamingPack);


export default router;