import express from "express";
import { getVasServices, activateVasPack, deactivateVasPack } from "../controllers/vas.controller.js";

const router = express.Router();

router.get('/all', getVasServices);

router.get('/:type', getVasServices);
// router.get('/:customer_id', getVasServices);
router.post('/activate/:customer_id', activateVasPack);
router.post('/deactivate/:customer_id', deactivateVasPack);

export default router;