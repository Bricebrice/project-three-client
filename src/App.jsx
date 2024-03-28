import { Routes, Route } from "react-router-dom";
import "./App.css";

import Navbar from "./components/Navbar";
import IsPrivate from "./utils/IsPrivate";
import IsAnon from "./utils/IsAnon";
import IsAdmin from "./utils/IsAdmin";
import IsUser from "./utils/isUser";
import HomePage from "./pages/HomePage";

import ErrorPage from "./pages/ErrorPage";

import SignupPage from "./pages/Auth/SignupPage";
import LoginPage from "./pages/Auth/LoginPage";
import ProfilePage from "./pages/Auth/ProfilePage";
import EditProfilePage from "./pages/Auth/EditProfilePage";

import AllMealsPage from "./pages/Meal/AllMealsPage";
import CreateMealPage from "./pages/Meal/CreateMealPage";
import MealDetailsPage from "./pages/Meal/MealDetailsPage";
import EditMealPage from "./pages/Meal/EditMealPage";

import CreateIngredientPage from "./pages/Ingredient/CreateIngredientPage";
import EditIngredientPage from "./pages/Ingredient/EditIngredientPage";
import AllIngredientsPage from "./pages/Ingredient/AllIngredientsPage";
import IngredientDetailsPage from "./pages/Ingredient/IngredientDetailsPage";

console.log("vite env: ", import.meta.env);

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />

        {/*user Routes*/}

        <Route
          path="/signup"
          element={
            <IsAnon>
              <SignupPage />
            </IsAnon>
          }
        />
        <Route
          path="/login"
          element={
            <IsAnon>
              <LoginPage />
            </IsAnon>
          }
        />
        <Route
          path="/edit-profile/:userId"
          element={
            <IsUser>
              <EditProfilePage />
            </IsUser>
          }
        />
        <Route
          path="/profile"
          element={
            <IsPrivate>
              <ProfilePage />
            </IsPrivate>
          }
        />

        {/*Ingredient Routes*/}
        <Route path="/all-ingredients" element={<AllIngredientsPage />} />
        <Route
          path="/add-ingredient"
          element={
            <IsAdmin>
              <CreateIngredientPage />
            </IsAdmin>
          }
        />
        <Route
          path="/ingredient/:ingredientId"
          element={<IngredientDetailsPage />}
        />
        <Route
          path="/edit-ingredient/:ingredientId"
          element={
            <IsAdmin>
              <EditIngredientPage />
            </IsAdmin>
          }
        />

        {/*Meal Routes*/}
        <Route path="/all-meals" element={<AllMealsPage />} />
        <Route
          path="/add-meal"
          element={
            <IsPrivate>
              <CreateMealPage />
            </IsPrivate>
          }
        />
        <Route path="/meal/:mealId" element={<MealDetailsPage />} />
        <Route path="/edit-meal/:mealId" element={<EditMealPage />} />

        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
