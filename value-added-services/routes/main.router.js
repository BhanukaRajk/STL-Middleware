import express from 'express';
import { getGamingServices, getNewsServices, getVideoServices } from '../controllers/main.controller';

const router = express.Router();


router.get('/news', getNewsServices);
router.get('/gaming', getGamingServices);
router.get('/video', getVideoServices);
router.get('/sports', getNewsServices);

export default router;