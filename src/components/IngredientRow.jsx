import { useContext, useEffect, useState } from "react";
import { MealContext } from "../context/meal.context";

export default function IngredientRow(props) {
  const { item, quantity, remove } = props;
  //const { recipeIngredient, setRecipeIngredient } = useContext(MealContext);

  //console.log(recipeIngredient)

  return (
    <tr className="bg-mustard-100 h-8">
      <td>{item.name}</td>
      <td>{quantity} g</td>
      <td>{Math.round(((item.calories * quantity) / 100) * 10) / 10}</td>
      <td>{Math.round(((item.proteins * quantity) / 100) * 10) / 10}</td>
      <td>{Math.round(((item.carbs * quantity) / 100) * 10) / 10}</td>
      <td>{Math.round(((item.fats * quantity) / 100) * 10) / 10}</td>
    </tr>
  );
}
