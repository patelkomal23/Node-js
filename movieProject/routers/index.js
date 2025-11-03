import { Router } from "express";
import { homePage } from "../controllers/index.js";

const router = Router();
router.get("/", homePage)

export default router;