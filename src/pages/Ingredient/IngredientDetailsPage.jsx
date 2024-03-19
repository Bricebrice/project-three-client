import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ingredientService from "../../services/ingredient.service";

export default function IngredientDetailsPage() {
  const { ingredientId } = useParams();
  const [ingredient, setIngredient] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    try {
      const response = await ingredientService.findById(ingredientId);
      console.log("response data: ", response.data);
      setIngredient(response.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  } else {
    return (
      <div>
        <h1>Details for {ingredient.name}</h1>
      </div>
    );
  }
}
