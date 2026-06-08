import express from "express";
import dishes from "../data/dishes.js";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Home route works");
});

router.get("/foods/:id", (req, res) => {
  const requestedId = req.params.id;
  const dish = dishes.find((dish) => dish.id === requestedId);

  if (!dish) {
    return res.status(404).send("Dish not found");
  }

  res.send(`Detail page for ${dish.name}`);
});

export default router;