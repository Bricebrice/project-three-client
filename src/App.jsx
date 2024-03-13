import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";

import IsPrivate from "./components/IsPrivate";
import IsAnon from "./components/IsAnon";

import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import ErrorPage from "./pages/ErrorPage";

import "./App.css";
import CreateIngredientPage from "./pages/CreateIngredientPage";

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
        <Route path="*" element={<ErrorPage />} />

      </Routes>
    </div>
  );
}

export default App;
