import express from "express";
import { currentUser } from "@vlk-ticketing/common";

const router = express.Router();

router.get("/api/users/me", currentUser, (req, res) => {
  res.send({ currentUser: req.currentUser || null });
});

export { router as meRouter };
