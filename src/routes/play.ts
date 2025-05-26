import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Play Ground!");
});

export default router;
