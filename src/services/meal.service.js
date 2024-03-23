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

  findById = (mealId) => {
    return this.api.get(`/meal/${mealId}`);
  };

  delete = (mealId) => {
    return this.api.post(`/meal/${mealId}/delete`);
  };

  edit = (mealId, requestBody) => {
    return this.api.put(`/meal/${mealId}/edit`, requestBody);
  };
}

// Create one instance (object) of the service
const mealService = new MealService();

export default mealService;
