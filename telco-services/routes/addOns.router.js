import express from 'express';
const router = express.Router();
import { addDataPack ,addAddDataPack} from '../controllers/addOne.controller.js'; // Correct the path

router.post('/data-packs', addDataPack);
router.post('/add/data-packs', addAddDataPack);

export default router;
