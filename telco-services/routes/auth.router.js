import express from "express";

import { login, signup } from "../controllers/auth.controller.js";
import { authJWT } from "../middlewares/authentication.js";

const router = express.Router();

router.post('/login', login);
router.post('/signup', signup);

//
router.get('/test', authJWT, (req, res) => {
    console.log(req.user);
    res.status(200).json({ message: 'Test' });
});

export default router;