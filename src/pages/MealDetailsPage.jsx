import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import CustomCard from "../components/Card";

const API_URL = "http://localhost:5005";

function MealDetailsPage() {
  const [foundMeal, setFoundMeal] = useState(null);

  const { mealId } = useParams();
  console.log("meal id: ", mealId);

  useEffect(() => {
    const response = async () => {
      try {
        await axios.get(`${API_URL}/${mealId}`);
        console.log("response.data ", response.data);
        setFoundMeal(response.data);
      } catch (error) {
        console.log(error);
      }
    };
  }, [mealId]);

  return (
    <>
      <p>Hi</p>
    </>
  );
}

export default MealDetailsPage;
