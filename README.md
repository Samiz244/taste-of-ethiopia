# WEB103 Project 1 - *Taste of Ethiopia*

Submitted by: **Samuel Alemu**

About this web app: **Taste of Ethiopia is a cultural listicle web application that showcases five famous Ethiopian dishes. Users can browse featured dishes on the homepage and click on any dish to learn more about its ingredients, cultural significance, and traditional occasions where it is served.**

Time spent: **6** hours

## Required Features

The following **required** functionality is completed:

* [x] **The web app uses only HTML, CSS, and JavaScript without a frontend framework**
* [x] **The web app displays a title**
* [x] **The web app displays at least five unique list items, each with at least three displayed attributes (such as title, text, and image)**
* [x] **The user can click on each item in the list to see a detailed view of it, including all database fields**

  * [x] **Each detail view should be a unique endpoint, such as `localhost:3000/foods/doro-wat` and `localhost:3000/foods/kitfo`**
  * [x] *Note: When showing this feature in the video walkthrough, please show the unique URL for each detailed view.*
* [x] **The web app serves an appropriate 404 page when no matching route is defined**
* [x] **The web app is styled using Picocss**

The following **optional** features are implemented:

* [x] The web app displays items in a unique card-based layout with hover animations

The following **additional** features are implemented:

* [x] Custom responsive grid layout for dish cards
* [x] Hover effects and enhanced card styling
* [x] Centered detail pages with improved readability
* [x] Custom styled 404 page with navigation back to the homepage

## Video Walkthrough

Here's a walkthrough of implemented required features:
<div>
    <a href="https://www.loom.com/share/376a7dc8fd8d4574bd2142e373e56ed2">
      <p>Taste of Ethiopia - 8 June 2026 - Watch Video</p>
    </a>
    <a href="https://www.loom.com/share/376a7dc8fd8d4574bd2142e373e56ed2">
      <img style="max-width:300px;" src="https://cdn.loom.com/sessions/thumbnails/376a7dc8fd8d4574bd2142e373e56ed2-fb8167bd2622c7e8-full-play.gif#t=0.1">
    </a>
  </div>

GIF created with imgur

## Notes

One challenge during development was implementing a custom 404 page while using the latest Express routing behavior. The wildcard route syntax caused a routing error, which was resolved by using router middleware to handle unmatched routes. Another challenge was designing a clean card-based layout while keeping the application simple and compliant with the project requirements.

## License

Copyright 2026 Samuel Alemu

Licensed under the Apache License, Version 2.0.
