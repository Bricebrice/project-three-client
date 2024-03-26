# Project Name

## Description

VeganEase Planner simplifies meal planning by allowing users to create and save vegan meals with community-contributed ingredients. A future calendar feature planned.

## User Stories

- **404:** As an anon/user I can see a 404 page if I try to reach a page that does not exist so that I know it's my fault
- **Signup:** As an anon I can sign up in the platform so that I can start saving favorite restaurants
- **Login:** As a user I can login to the platform so that I can see my favorite restaurants
- **Logout:** As a user I can logout from the platform so no one else can use it
- **Add Meals** As a user I can add a restaurant so that I can share it with the community
- **Add Ingredients to Meals** As a user I want to create meals using available ingredients so so that I can share it with the community
- **List Meals** As a user I want to see the restaurants so that I can choose one to eat
- **Edit Meals** As a meal author I can edit a meal so that I can be as accurate as possible
- **Delete Meals** As a meal author I can delete a meal so that it's no longer available
- **Add Ingredients** As an admin I can add a restaurant so that I can share it with the community
- **List Ingredients** As a user I want to see the restaurants so that I can choose one to eat
- **Edit Ingredients** As an admin I can edit an ingredient so that I can be as accurate as possible
- **Delete Ingredients** As an admin I can delete an ingredient so that it's no longer available
- **Add meals/ingredients to favorites** As a user I want to add a restaurant to favorite so that I can save the restaurants that I liked the most
- **See my favorites** As a user I want to see my favorite restaurantes so that I can see the ones I liked the most
- **Contact form** As a user I want to send an email to VeganEase Planner authors so that I can contact them
- **Profile Page** As a user I can edit my user so that I have an unique profile
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
- /auth/signup - Signup form
- /auth/login - Login form
- /contact - Contact form
- /users/profile - my favorite meal
- /users/edit-profile - edit user profile
- /meal/all-meals - meals list
- /meal/:id - meal detail
- /meal/add-meal - meal form
- /meal/edit-meal/:id - edit meal form
- /ingredient/all-ingredients - ingredients list
- /ingredient/:id - ingredient detail
- /ingredient/add-ingredient - ingredient form
- /ingredient/edit-ingredient/:id - edit ingredient form
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
- Ingredient Edit (admin and user)
- Ingredient Detail Page (public)
- My Profile Page (user only)
- Profile Edit
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
