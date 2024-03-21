import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import { AuthProviderWrapper } from "./context/auth.context";
import { MealProviderWrapper } from "./context/meal.context";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <AuthProviderWrapper>
        <MealProviderWrapper>
          <App />
        </MealProviderWrapper>
      </AuthProviderWrapper>
    </Router>
  </React.StrictMode>
);
