# WEB103 Project 2 - Taste of Ethiopia

Submitted by: **Samuel Alemu**

About this web app: **Taste of Ethiopia is a web application that showcases five popular Ethiopian dishes and their cultural significance. The application retrieves dish information from a PostgreSQL database hosted on Render and displays detailed information about each dish using an Express backend and vanilla HTML, CSS, and JavaScript.**

Time spent: **11 hours**

## Required Features

The following **required** functionality is completed:

- [x] **The web app uses only HTML, CSS, and JavaScript without a frontend framework**
- [x] **The web app is connected to a PostgreSQL database, with an appropriately structured database table for the list items**
  - [x] **NOTE: Your walkthrough added to the README must include a view of your Render dashboard demonstrating that your Postgres database is available**
  - [x] **NOTE: Your walkthrough added to the README must include a demonstration of your table contents. Use the psql command 'SELECT * FROM tablename;' to display your table contents.**

## The following **optional** features are implemented:

- [ ] The user can search for items by a specific attribute

## The following **additional** features are implemented:

- [x] Dynamic routing for individual dish detail pages
- [x] Custom 404 page for invalid routes
- [x] Responsive card-based layout using PicoCSS
- [x] PostgreSQL integration using pg.Pool()

## Video Walkthrough

Here's a walkthrough of implemented required features:

<div>
    <a href="https://www.loom.com/share/514251b4db124a41bb8b28cee6e871e1">
      <p>dishes ・ Database ・ Render Dashboard - 14 June 2026 - Watch Video</p>
    </a>
    <a href="https://www.loom.com/share/514251b4db124a41bb8b28cee6e871e1">
      <img style="max-width:300px;" src="https://cdn.loom.com/sessions/thumbnails/514251b4db124a41bb8b28cee6e871e1-82e7dcc0a22e87dd-full-play.gif#t=0.1">
    </a>
  </div>
GIF created with Loom

## Notes

One challenge was migrating the application from hardcoded JavaScript data to a PostgreSQL database while maintaining the existing functionality. Another challenge was learning how to connect to a Render-hosted PostgreSQL database using psql and integrating database queries into the Express routes.

## License

Copyright 2026 Samuel Alemu

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

> http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.