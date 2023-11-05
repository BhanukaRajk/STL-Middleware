import express from "express";

const router = express.Router();

router.get('/data-packs/:customer_id', (req, res) => {
    res.render('dashboard');
});

export default router;