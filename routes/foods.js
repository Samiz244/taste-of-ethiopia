import express from "express";
import pool from "../config/database.js";
function render404() {
  return `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>404 - Page Not Found</title>

        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/@picocss/pico@2/css/pico.min.css"
        />

        <link rel="stylesheet" href="/style.css" />
      </head>
      <body>
        <main class="container detail-container">
          <article>
            <h1>404</h1>
            <h2>Page Not Found</h2>

            <p>
              Sorry, the page you are looking for does not exist.
            </p>

            <a href="/" role="button">
              Return Home
            </a>
          </article>
        </main>
      </body>
    </html>
  `;
}

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM foods ORDER BY id ASC;");
    const dishes = result.rows;

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
          <main class="container ">
            <h1>Taste of Ethiopia</h1>
            <p>Famous Ethiopian dishes and their cultural stories.</p>
            <section class="dish-grid">
              ${dishCards}
            </section>
          </main>
        </body>
      </html>
    `);
  } catch (error) {
    console.error(error);
    res.status(500).send("Database error");
  }
});
router.get("/foods/:id", async (req, res) => {
  try {
    const requestedId = req.params.id;

    const result = await pool.query(
      "SELECT * FROM foods WHERE id = $1;",
      [requestedId]
    );

    const dish = result.rows[0];

    if (!dish) {
      return res.status(404).send(render404());
    }

    res.send(`
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>${dish.name}</title>
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@picocss/pico@2/css/pico.min.css" />
          <link rel="stylesheet" href="/style.css" />
        </head>
        <body>
          <main class="container detail-container">
            <a class="back-link" href="/foods">← Back to Foods</a>

            <h1>${dish.name}</h1>

            <img src="${dish.image}" alt="${dish.name}" style="max-width: 500px; width: 100%;" />

            <p>${dish.description}</p>

            <p><strong>Main Ingredient:</strong> ${dish.main_ingredient}</p>

            <p><strong>Region/Culture:</strong> ${dish.region_or_culture}</p>

            <p><strong>Occasion:</strong> ${dish.occasion}</p>
          </main>
        </body>
      </html>
    `);
  } catch (error) {
    console.error(error);
    res.status(500).send("Database error");
  }
});

router.use((req, res) => {
  res.status(404).send(render404());
});
export default router;