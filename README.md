# Project Name

## Description

VeganEase Planner simplifies meal planning by allowing users to create and save vegan meals with community-contributed ingredients, all while maintaining a focus on their fitness goals with macros. Planned for the future are a calendar feature where users can add their meals to and a daily, weekly, and personal macros management system.

## User Stories

- **404:** As an anon/user I can see a 404 page if I try to reach a page that does not exist.
- **Signup:** As an anon I can sign up to the platform so that I can start my VeganEase journey.
- **Login:** As a user I can login to the platform so that I best interact with it and my profile.
- **Logout:** As a user I can logout from the platform so no one else can use it
- **Add Meals** As a user I can add my favorite recipes so that I can share it with the community.
- **Add Ingredients to Meals** As a user I want to create meals using available ingredients (or contact form should the ingredient be missing).
- **List Meals** As a user I want to see and search all the meals so that I can choose one to eat.
- **Edit Meals** As a meal author I can edit a meal to best fit my liking / fitness goals.
- **Delete Meals** As a meal author I can delete a meal so that it's no longer available.
- **Add Ingredients** As an admin I can add the ingredients suggested to me by the community.
- **List Ingredients** As a user I want to see all the ingredients available to me.
- **Edit Ingredients** As an admin I can edit an ingredient so that it can be as accurate as possible
- **Delete Ingredients** As an admin I can delete an ingredient so that it's no longer available.
- **Add meals/ingredients to favorites** As a user I want to add and easily access my favorites directly from my profile page.
- **See my favorites** As a user I want to see my favorite so that I can see the ones I liked the most
- **Contact form** As a user I can send an email to VeganEase Planner authors so that I offer feedback / ask for ingredients;
- **Profile Page** As a user I can edit my user information so that I have an unique profile
- **Roles** As a moderator I can choose who is a "user" or "admin" so that I can handle the authorizations

## Backlog

Dark mode:

- see the whole app in dark mode

Calendar:

- add meals to a calendar

Drag and drop:

- meals to calendar

Comments:

- add comments to meals

Search Meals:

- Search by name or ingredient

# Client

## Routes

- / - Homepage
- /signup - Signup form
- /login - Login form
- /contact - Contact form
- /profile - my favorite meal
- /edit-profile/:userID - edit user profile
- /all-meals - meals list
- /meal/:mealId - meal detail
- /add-meal - meal form
- /edit-meal/:id - edit meal form
- /all-ingredients - ingredients list
- /ingredient/:ingredientId - ingredient detail
- /add-ingredient - ingredient form
- /edit-ingredient/:id - edit ingredient form
- 404

## Pages

- Home Page (public)
- Sign in Page (anon only)
- Log in Page (anon only)
- Meals List Page (public)
- Meal Create (admin and user)
- Meal Edit (admin and user)
- Meal Detail Page (public)
- Ingredients List Page (public)
- Ingredient Create (admin only)
- Ingredient Edit (admin only)
- Ingredient Detail Page (public)
- My Profile Page (user only)
- Profile Edit (user only)
- 404 Page (public)

## Components

- BackButton
- CalendarIcon
- Card
- Carousel
- ContactForm
- FavoriteIngredients
- FavoriteMeals
- Feature
- Footer
- Header
- HeartIcon
- IngredientRow
- IngredientTable
- IsAnon
- IsPrivate
- ItemCarousel
- MainFeatures
- Navbar
- NavLogo
- NutritionDetails
- ProfileHeader
- ProfilePicMenu
- RemoveBar
- RemoveResult
- SearchBar
- SearchResult
- SquareCard
- Testimonial
- Testimonials
- VegSpinner

## Utils

- IsAnon
- IsPrivate
- IsUser
- IsCreatorOrIsAdmin
- IsAdmin

## Services

- Auth Service
  - auth.login(user)
  - auth.signup(user)
  - auth.verify
- Contact Service
  - sendEmail
- Ingredient Service
  - allIngredients
  - imageUpload
  - create
  - findById
  - edit
  - delete
- Meal Service
  - allMeals
  - findByIngredient
  - imageUpload
  - create
  - findById
  - edit
  - delete
- User Service
  - imageUpload
  - getFavoriteMeals
  - getFavoriteIngredients
  - addMealToFavorites
  - removeMealFromFavorites
  - addIngredientToFavorites
  - removeIngredientFromFavorites
  - edit
