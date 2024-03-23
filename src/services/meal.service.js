import axios from "axios";

class MealService {
  constructor() {
    this.api = axios.create({
      baseURL: import.meta.env.VITE_DEPLOYMENT_URL || "http://localhost:5005",
    });
  }

  allMeals = () => {
    return this.api.get("/meal/all-meals");
  };

  findByIngredient = (ingredientId) => {
    return this.api.get(`/meal/meals-by-ingredient/${ingredientId}`);
  };

  imageUpload = (requestBody) => {
    return this.api.post("/meal/image-upload", requestBody);
  };

  create = (requestBody) => {
    return this.api.post("/meal/create-new-meal", requestBody);
  };

  findById = (ingredientId) => {
    return this.api.get(`/meal/${ingredientId}`);
  };

  edit = (ingredientId, requestBody) => {
    return this.api.put(`/meal/${ingredientId}/edit`, requestBody);
  };
}

// Create one instance (object) of the service
const mealService = new MealService();

export default mealService;
