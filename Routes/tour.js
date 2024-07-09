import express from "express";
import { CreateTour } from "../Controller/toursController.js";

const router= express.Router();

router.post("/createtour",CreateTour)
export default router;