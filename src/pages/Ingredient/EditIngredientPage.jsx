import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ingredientService from "../../services/ingredient.service";
import Footer from "../../components/Footer";
import VegSpinner from "../../components/VegSpinner";

export default function EditIngredientPage() {
  const { ingredientId } = useParams();
  //console.log("ingredientId", ingredientId);
  const [form, setForm] = useState({
    name: "",
    calories: 0,
    proteins: 0,
    fats: 0,
    carbs: 0,
    imageUrl: "",
  });
  const [errorMessage, setErrorMessage] = useState(undefined);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  const fetchData = async (id) => {
    //const response = await axios.get(`http://localhost:5005/ingredient/${id}`);
    const response = await ingredientService.findById(id);
    //console.log(response.data);
    const { name, calories, proteins, fats, carbs, imageUrl } = response.data;
    let foundIngredient = { name, calories, proteins, fats, carbs, imageUrl };
    //console.log("foundIngredient", foundIngredient);
    setForm(foundIngredient);
    setIsLoading(false);
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
      /*const response = await axios.post(
        `${API_URL}/ingredient/image-upload`,
        uploadData
      );*/
      const response = await ingredientService.imageUpload(uploadData);
      //console.log("response is: ", response);
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
      /* const response = await axios.put(
        `${API_URL}/ingredient/${ingredientId}/edit`,
        form
      ); */
      const response = await ingredientService.edit(ingredientId, form);
      //console.log(response);
      navigate("/all-ingredients");
    } catch (error) {
      setErrorMessage(error.response.data.message);
    }
  };

  if (isLoading) {
    return <VegSpinner />;
  }
  return (
    <>
      <div className="bg-mustard-100 flex flex-col h-full items-center ">
        <div className="max-w-screen-xl8">
          <h3 className="m-8 sm:m-16 text-2xl sm:text-3xl tracking-tight font-extrabold text-gray-900 dark:text-white text-center">
            Edit ingredient
          </h3>
        </div>

        <form
          className="max-w-md mx-auto flex flex-col items-center mb-16 bg-mustard-400 rounded p-7"
          onSubmit={handleEditSubmit}
        >
          <div className="w-full mb-5">
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
          <div className="w-full mb-5">
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
          <div className="w-full mb-5">
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
          <div className="w-full mb-5">
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
          <div className="w-full mb-5">
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
            Update Ingredient
          </button>
        </form>

        {errorMessage && <p className="error-message">{errorMessage}</p>}
      </div>
      <Footer />
    </>
  );
}
