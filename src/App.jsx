import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "../src/components/Navbar";
import HomePage from "../src/pages/HomePage";
import ProfilePage from "../src/pages/Auth/ProfilePage";

import IsPrivate from "./components/IsPrivate";
import IsAnon from "./components/IsAnon";

import SignupPage from "../src/pages/Auth/SignupPage";
import LoginPage from "../src/pages/Auth/LoginPage";
import ErrorPage from "../src/pages/ErrorPage";


import "./App.css";
import CreateIngredientPage from "../src/pages/Ingredient/CreateIngredientPage";
import EditIngredientPage from "../src/pages/Ingredient/EditIngredientPage";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
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
        <Route path="/edit-ingredient/:ingredientId" element={<EditIngredientPage />} /> 
        <Route path="*" element={<ErrorPage />} />

      </Routes>
    </div>
  );
}

export default App;
