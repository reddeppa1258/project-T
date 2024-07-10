import express from "express";
import {  login, Register } from "../Controller/userController.js";

const router = express.Router();

router.post("/register", Register)
router.post("/login",login)


export default router