import axios from "axios";

class MealService {
  constructor() {
    this.api = axios.create({
      baseURL: import.meta.env.VITE_DEPLOYMENT_URL,
    });
  }

  allMeals = () => {
    return this.api.get("/meal/all-meals");
  };

  imageUpload = (requestBody) => {
    return this.api.post("/meal/image-upload", requestBody);
  };

  create = (requestBody) => {
    return this.api.post("/meal/create-new-meal", requestBody);
  };


}

// Create one instance (object) of the service
const mealService = new MealService();

export default mealService;

