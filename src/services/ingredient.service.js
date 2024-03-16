import axios from "axios";

class IngredientService {
  constructor() {
    this.api = axios.create({
      baseURL: import.meta.env.VITE_DEPLOYMENT_URL || "http://localhost:5005",
    });
  }

  allIngredients = () => {
    return this.api.get("/ingredient/all-ingredients");
    // same as
    // return axios.get("https://veganease-api.onrender.com/ingredient/all-ingredients");
  };

  imageUpload = (requestBody) => {
    return this.api.post("/ingredient/image-upload", requestBody);
    // same as
    // return axios.post("https://veganease-api.onrender.com/ingredient/image-upload", requestBody);
  };

  create = (requestBody) => {
    return this.api.post("/ingredient/create-ingredient", requestBody);
    //same as
    //return axios.post("https://veganease-api.onrender.com/ingredient/create-ingredient", requestBody);
  };

  findById = (ingredientId) => {
    return this.api.get(`/ingredient/${ingredientId}`);
    // same as
    // return axios.get("https://veganease-api.onrender.com/ingredient/:ingredientId");
  };

  edit = (ingredientId, requestBody) => {
    return this.api.put(`/ingredient/${ingredientId}/edit`, requestBody);
    // same as
    // return axios.put("https://veganease-api.onrender.com/ingredient/:ingredientId/edit", requestBody);
  };
}

// Create one instance (object) of the service
const ingredientService = new IngredientService();

export default ingredientService;
