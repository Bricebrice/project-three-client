import axios from "axios";

class UserService {
  constructor() {
    this.api = axios.create({
      baseURL: import.meta.env.VITE_DEPLOYMENT_URL || "http://localhost:5005",
    });

    // Automatically set JWT token in the headers for every request
    this.api.interceptors.request.use((config) => {
      // Retrieve the JWT token from the local storage
      const storedToken = localStorage.getItem("authToken");

      if (storedToken) {
        config.headers = { Authorization: `Bearer ${storedToken}` };
      }

      return config;
    });
  }

  addMealToFavorites = (userId, mealId) => {
    return this.api.post(`/users/${userId}/favorites/meals`, { mealId });
  };

  removeMealFromFavorites = (userId, mealId) => {
    return this.api.delete(`/users/${userId}/favorites/meals/${mealId}`);
  };

  addIngredientToFavorites = (userId, ingredientId) => {
    return this.api.post(`/users/${userId}/favorites/ingredients`, {
      ingredientId,
    });
  };

  removeIngredientFromFavorites = (userId, ingredientId) => {
    return this.api.delete(
      `/users/${userId}/favorites/ingredients/${ingredientId}`
    );
  };
}

// Create one instance (object) of the service
const userService = new UserService();

export default userService;
