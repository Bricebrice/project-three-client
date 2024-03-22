import React, { useState } from "react";

const MealContext = React.createContext();

function MealProviderWrapper(props) {
  const [allIngredients, setAllIngredients] = useState([]);
  const [recipeIngredients, setRecipeIngredients] = useState([]);
  const [ingredientQuantity, setIngredientQuantity] = useState([]);
  return (
    <MealContext.Provider
      value={{
        allIngredients,
        setAllIngredients,
        recipeIngredients,
        setRecipeIngredients,
        ingredientQuantity,
        setIngredientQuantity
      }}
    >
      {props.children}
    </MealContext.Provider>
  );
}

export { MealProviderWrapper, MealContext }
