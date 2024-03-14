import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import ingredientService from "../../services/ingredient.service";

const API_URL = "http://localhost:5005";

export default function EditIngredientPage() {
  const { ingredientId } = useParams();
  const [ingredient, setIngredient] = useState({
    name: "",
    calories: 0,
    proteins: 0,
    fats: 0,
    carbs: 0,
    imageUrl: "",
  });
  const [form, setForm] = useState({
    name: ingredient.name,
    calories: ingredient.calories,
    proteins: ingredient.proteins,
    fats: ingredient.fats,
    carbs: ingredient.carbs,
    imageUrl: ingredient.imageUrl,
  });
  const [errorMessage, setErrorMessage] = useState(undefined);
  const navigate = useNavigate();

  const fetchData = async (id) => {
    const response = await ingredientService.findById(id);
    return setIngredient(response.data);
  };

  useEffect(() => {
    fetchData(ingredientId);
  }, [ingredientId]);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.id]: e.target.value,
    });
  };

  const handleFileUpload = async (e) => {
    try {
      console.log("The file to be uploaded is: ", e.target.files[0]);
      const uploadData = new FormData();
      // imageUrl => this name has to be the same as in the model since we pass
      // req.body to .create() method when creating a new movie in '/api/movies' POST route
      uploadData.append("imageUrl", e.target.files[0]);
      const response = await axios.post(
        `${API_URL}/ingredient/image-upload`,
        uploadData
      );
      console.log("response is: ", response);
      // response carries "fileUrl" which we can use to update the state
      setForm({
        ...form,
        imageUrl: response.data.fileUrl,
      });
    } catch (error) {
      setErrorMessage(error.response.data.message);
    }
  };

  const handleEditSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(
        `${API_URL}/ingredient/${ingredientId}/edit`,
        form
      );
      navigate("/ingredients");
    } catch (error) {
      setErrorMessage(error.response.data.message);
    }
  };

  return (
    <div className="bg-mustard-100 flex flex-col h-dvh items-center ">
      <h1 className="text-3xl p-4">Edit Ingredient</h1>

      <form
        className="max-w-md mx-auto flex flex-col items-center mb-5 bg-mustard-400 rounded p-7"
        onSubmit={handleEditSubmit}
      >
        <div className="mb-5">
          <label className="block mb-2 text-sm font-medium" htmlFor="email">
            Name:
          </label>
          <input
            className="bg-gray-100 border border-gray-400 text-sm rounded-lg w-full p-2.5 "
            type="text"
            name="name"
            id="name"
            value={form.name}
            onChange={handleChange}
          />
        </div>
        <div className="mb-5">
          <label className="block mb-2 text-sm font-medium">Calories:</label>
          <input
            className="bg-gray-100 border border-gray-400 text-sm rounded-lg w-full p-2.5"
            type="number"
            name="number"
            id="calories"
            value={form.calories}
            onChange={handleChange}
          />
        </div>
        <div className="mb-5">
          <label className="block mb-2 text-sm font-medium">Proteins:</label>
          <input
            className="bg-gray-100 border border-gray-400 text-sm rounded-lg w-full p-2.5"
            type="number"
            name="proteins"
            id="proteins"
            value={form.proteins}
            onChange={handleChange}
          />
        </div>
        <div className="mb-5">
          <label className="block mb-2 text-sm font-medium">Fats:</label>
          <input
            className="bg-gray-100 border border-gray-400 text-sm rounded-lg w-full p-2.5"
            type="number"
            name="fats"
            id="fats"
            value={form.fats}
            onChange={handleChange}
          />
        </div>
        <div className="mb-5">
          <label className="block mb-2 text-sm font-medium">Carbs:</label>
          <input
            className="bg-gray-100 border border-gray-400 text-sm rounded-lg w-full p-2.5"
            type="number"
            name="carbs"
            id="carbs"
            value={form.carbs}
            onChange={handleChange}
          />
        </div>
        <div className="mb-5 flex-col items-center justify-center w-full">
          <input
            className="mb-5 mx-auto hover:cursor-pointer"
            type="file"
            onChange={(e) => handleFileUpload(e)}
          />

          {form.imageUrl === "" ? (
            <div className="w-24 h-24 mx-auto rounded-full bg-mantis-400"></div>
          ) : (
            <img
              src={form.imageUrl}
              className="w-24 h-24 mx-auto rounded-full"
              alt="food-image"
            />
          )}
        </div>

        <button
          className="bg-orange-400 border-2 shadow border-orange-500 rounded w-full py-2.5 hover:bg-orange-600 hover:border-orange-700 hover:border-2"
          type="submit"
        >
          Create Ingredient
        </button>
      </form>

      {errorMessage && <p className="error-message">{errorMessage}</p>}
    </div>
  );
}
