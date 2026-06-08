# Project Plan: Taste of Ethiopia

## Project Theme
A cultural listicle web app showcasing famous Ethiopian dishes, their ingredients, cultural background, and occasions where they are commonly served.

## Required Pages
- [ ] Home page: `/`
- [ ] Dish detail page: `/foods/:id`
- [ ] 404 page: any unmatched route

## Step 1: Create the Project
- [ ] Create project folder
- [ ] Initialize Node project
- [ ] Install Express
- [ ] Set up folders: `public`, `data`, `routes`, `views`

## Step 2: Define the Data
- [ ] Create `data/dishes.js`
- [ ] Add at least 5 Ethiopian dishes
- [ ] Each dish must have:
  - `id`
  - `name`
  - `description`
  - `mainIngredient`
  - `regionOrCulture`
  - `occasion`
  - `image`
- [ ] Use unique `id` values like `doro-wat`, `kitfo`, `injera`

## Step 3: Set Up Express Server
- [ ] Create `server.js`
- [ ] Import Express
- [ ] Serve static files from `public`
- [ ] Connect routes
- [ ] Start server on port `3000`

## Step 4: Create Routes
- [ ] Create route for `/`
- [ ] Create route for `/foods/:id`
- [ ] Use `req.params.id` to find the matching dish
- [ ] Redirect unmatched dish IDs to 404
- [ ] Create 404 route for unmatched URLs

## Step 5: Build the Home Page
- [ ] Add PicoCSS CDN in the HTML `<head>`
- [ ] Create semantic HTML structure
- [ ] Display title: `Taste of Ethiopia`
- [ ] Display at least 5 dishes
- [ ] Show at least 3 attributes per dish
- [ ] Make each dish clickable
- [ ] Use PicoCSS-friendly card layout

## Step 6: Build Detail Pages
- [ ] Display selected dish name
- [ ] Display dish image
- [ ] Display all fields from the data object
- [ ] Add cultural context
- [ ] Add link back to homepage

## Step 7: Add Custom Styling
- [ ] Create `public/style.css`
- [ ] Adjust image sizes
- [ ] Improve spacing and layout
- [ ] Make cards clean and readable
- [ ] Add small visual enhancements beyond PicoCSS

## Step 8: Add 404 Page
- [ ] Show clear 404 message
- [ ] Explain that the page was not found
- [ ] Add link back home

## Step 9: Test Required Features
- [ ] App uses only HTML, CSS, and JavaScript
- [ ] No React or frontend framework
- [ ] Homepage works
- [ ] Title displays
- [ ] At least 5 dishes display
- [ ] Each dish shows at least 3 attributes
- [ ] Each dish links to a detail page
- [ ] Detail page shows all fields
- [ ] Wrong URLs show 404 page
- [ ] PicoCSS styling works

## Step 10: Prepare Submission
- [ ] Record GIF walkthrough
- [ ] Update README using CodePath template
- [ ] Check off completed features with `[x]`
- [ ] Commit changes with git
- [ ] Push to GitHub
- [ ] Submit project through CodePath portal

