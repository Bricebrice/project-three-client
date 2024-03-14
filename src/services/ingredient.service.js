import axios from "axios";

class IngredientService {
  constructor() {
    this.api = axios.create({
      baseURL: import.meta.env.REACT_APP_API_URL || "http://localhost:5005",
    });
  }

  allIngredients = () => {
    return this.api.get("/ingredient/all-ingredients");
    // same as
    // return axios.get("http://localhost:5005/ingredient/all-ingredients");
  };

  imageUpload = (requestBody) => {
    return this.api.post("/ingredient/image-upload", requestBody);
    // same as
    // return axios.post("http://localhost:5005/ingredient/image-upload", requestBody);
  };

  create = (requestBody) => {
    return this.api.post("/ingredient/create-ingredient", requestBody);
    //same as
    //return axios.post("http://localhost:5005/ingredient/create-ingredient", requestBody);
  };

  findById = (ingredientId) => {
    return this.api.get(`/ingredient/${ingredientId}`);
    // same as
    // return axios.get("http://localhost:5005/ingredient/:ingredientId");
  };

  edit = (ingredientId, requestBody) => {
    return this.api.put(`/ingredient/${ingredientId}/edit`, requestBody);
    // same as
    // return axios.put("http://localhost:5005/ingredient/:ingredientId/edit", requestBody);
  };
}

// Create one instance (object) of the service
const ingredientService = new IngredientService();

export default ingredientService;
