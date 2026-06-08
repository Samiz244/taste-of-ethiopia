import express from "express";
import dishes from "../data/dishes.js";

const router = express.Router();

router.get("/", (req, res) => {
  const dishCards = dishes
    .map(
      (dish) => `
        <article>
          <img src="${dish.image}" alt="${dish.name}" />
          <h2>${dish.name}</h2>
          <p>${dish.description}</p>
          <p><strong>Occasion:</strong> ${dish.occasion}</p>
          <a href="/foods/${dish.id}" role="button">View Details</a>
        </article>
      `
    )
    .join("");

  res.send(`
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Taste of Ethiopia</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@picocss/pico@2/css/pico.min.css" />
        <link rel="stylesheet" href="/style.css" />
      </head>
      <body>
        <main class="container">
          <h1>Taste of Ethiopia</h1>
          <p>Famous Ethiopian dishes and their cultural stories.</p>
          <section class="dish-grid">
            ${dishCards}
          </section>
        </main>
      </body>
    </html>
  `);
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