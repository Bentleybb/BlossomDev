import express from "express";
import userCtrl from "../controllers/user.controller.js";
import authCtrl from "../controllers/auth.controller.js";

const router = express.Router();

// TEMP: prove router is mounted correctly
//router.post("/__ping", (req, res) => res.json({ ok: true }));

// POST /api/users  |  GET /api/users (admin only)
router
  .route("/")
  .post(userCtrl.create)
  .get(authCtrl.requireSignin, authCtrl.isAdmin, userCtrl.list);

// /api/users/:userId
router.param("userId", userCtrl.userByID);

router
  .route("/:userId")
  .get(authCtrl.requireSignin, authCtrl.hasAuthorization, userCtrl.read)
  .put(authCtrl.requireSignin, userCtrl.hasAuthorization, userCtrl.update)
  .delete(authCtrl.requireSignin, authCtrl.isAdmin, userCtrl.remove);

export default router;
