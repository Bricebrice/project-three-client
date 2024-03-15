import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/Auth/ProfilePage";
import AllMealsPage from "./pages/AllMealsPage";

import IsPrivate from "./components/IsPrivate";
import IsAnon from "./components/IsAnon";

import SignupPage from "./pages/Auth/SignupPage";
import LoginPage from "./pages/Auth/LoginPage";
import ErrorPage from "./pages/ErrorPage";

import "./App.css";
import CreateIngredientPage from "./pages/CreateIngredientPage";
import MealDetailsPage from "./pages/MealDetailsPage";

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
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
