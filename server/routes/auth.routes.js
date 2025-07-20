import express from "express";
import authCtrl from "../controllers/auth.controller.js";
const router = express.Router();
router.route("/auth/Signin").post(authCtrl.signin);
router.route("/auth/Signout").get(authCtrl.signout);
export default router;
