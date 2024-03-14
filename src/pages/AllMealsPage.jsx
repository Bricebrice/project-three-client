import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const API_URL = "http://localhost:5005";

function AllMealsPage() {
  const [allMeals, setAllMeals] = useState([]);

  const getAllMeals = async () => {
    try {
      const response = await axios.get(`${API_URL}/meal/all-meals`);
      console.log("all meals: ", response);
      setAllMeals(response.data.meals);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllMeals();
  }, []);

  return (
    <>
      <div>
        {allMeals.map((meal) => (
          <div key={meal._id} to={`/meal/${meal._id}`}>
            <img src={meal.imageUrl} alt={meal.name} />
            <div>
              <h3>{meal.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default AllMealsPage;
