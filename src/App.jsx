import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

import Navbar from "./components/Navbar";
import IsPrivate from "./components/IsPrivate";
import IsAnon from "./components/IsAnon";
import HomePage from "./pages/HomePage";

import ErrorPage from "./pages/ErrorPage";

import SignupPage from "./pages/Auth/SignupPage";
import LoginPage from "./pages/Auth/LoginPage";
import ProfilePage from "./pages/Auth/ProfilePage";

import AllMealsPage from "./pages/Meal/AllMealsPage";
import MealDetailsPage from "./pages/Meal/MealDetailsPage";

import CreateIngredientPage from "./pages/Ingredient/CreateIngredientPage";
import EditIngredientPage from "./pages/Ingredient/EditIngredientPage";

console.log("vite env: ", import.meta.env);

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/all-meals" element={<AllMealsPage />} />
        <Route path="/meal/:mealId" element={<MealDetailsPage />} />
        <Route
          path="/profile"
          element={
            <IsPrivate>
              <ProfilePage />
            </IsPrivate>
          }
        />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/create-ingredient" element={<CreateIngredientPage />} />
        <Route
          path="/edit-ingredient/:ingredientId"
          element={<EditIngredientPage />}
        />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
