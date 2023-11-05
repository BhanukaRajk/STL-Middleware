import express from "express";
import {
  updateFirstName,
  updateLastName,
  getCustomer,
  updateEmail,
  comparePassword,
  updatePassword,
} from "../controllers/profile.controller.js";
const router = express.Router();

router.get("/:customer_id", getCustomer);
router.put("/first-name/:customer_id", updateFirstName);
router.put("/last-name/:customer_id", updateLastName);
router.post("/password/:customer_id", comparePassword);
router.put("/email/:customer_id", updateEmail);
router.put("/new-password/:customer_id", updatePassword);

export default router;
