import express from "express";
import foodsRouter from "./routes/foods.js";
const app = express();
const PORT = 3000;

app.use(express.static("public"));
app.use("/", foodsRouter);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});