import { useParams } from "react-router-dom"
import { useState } from "react"
import ingredientService from "../../services/ingredient.service";

export default function IngredientDetailsPage () {
    const {ingredientId} = useParams();
    const [ingredient, setIngredient] = useState(null);
    const [isLoading, setIsLoading] = useState(true); 

    const fetchData = async () => {
        
    }

    if(isLoading) {
        return (
            <p>Loading...</p>
        )
    }

    return (
        <div>
            <h1>Details for </h1>
        </div>
    )
}