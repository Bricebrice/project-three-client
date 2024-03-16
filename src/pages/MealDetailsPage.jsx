import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import CustomCard from "../components/Card";

const API_URL = "http://localhost:5005";

function MealDetailsPage() {
  const [foundMeal, setFoundMeal] = useState(null);
  const { mealId } = useParams();
  const [isLoading, setIsLoading] = useState(false);

  console.log("meal id: ", mealId);

  const fetchData = async () => {
    setIsLoading(true);

    try {
      const response = await axios.get(`${API_URL}/meal/${mealId}`);
      console.log("response.data ", response.data);
      setFoundMeal(response.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData(mealId);
  }, [mealId]);

  if (isLoading) {
    return (
      <div>
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <>
      <Link to="/all-meals">Back</Link>
      {!foundMeal && <h3>This meal doesn't exist!</h3>}
      {foundMeal && <CustomCard item={foundMeal} isMealDetailsPage={true} />}
    </>
  );
}

export default MealDetailsPage;
