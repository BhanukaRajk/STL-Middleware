import express from 'express';
import { getGamingServices, getNewsServices, getVideoServices, getSportServices, getAllServices } from '../controllers/main.controller.js';

const router = express.Router();


router.get('/news', getNewsServices);
router.get('/games', getGamingServices);
router.get('/video', getVideoServices);
router.get('/sports', getSportServices);

router.get('/all', getAllServices);

export default router;