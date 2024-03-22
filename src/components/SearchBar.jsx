import { useState, useContext } from "react";
import SearchResult from "./SearchResult";
import { MealContext } from "../context/meal.context";

export default function SearchBar(props) {
  const [query, setQuery] = useState("");
  const { allIngredients, setRecipeIngredients, recipeIngredients } = props;
  const searchQueryChange = (e) => {
    return setQuery(e.target.value);
  };
  //const { allIngredients } = useContext(MealContext);
  return (
    <div className="w-full mb-5">
      <input
        onChange={searchQueryChange}
        type="search"
        placeholder="Search for ingredient here..."
        className="w-full text-center rounded-md"
      />
      {allIngredients
        .filter((ingredient) => {
          if (query === "") {
            return;
          } else if (
            ingredient.name.toLowerCase().includes(query.toLowerCase())
          ) {
            return ingredient;
          } else return;
        })
        .map((ingredient) => {
          return (
            <SearchResult
              item={ingredient}
              key={ingredient._id}
              setQuery={setQuery}
              setRecipeIngredients={setRecipeIngredients}
              recipeIngredients={recipeIngredients}
            />
          );
        })}
    </div>
  );
}
