import { useState } from "react";
import SearchResult from "./SearchResult";

export default function SearchBar(props) {
  const [query, setQuery] = useState("");
  const { allIngredients, setRecipeIngredients, recipeIngredients, setAllIngredients } = props;
  const searchQueryChange = (e) => {
    return setQuery(e.target.value);
  };

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
              setAllIngredients={setAllIngredients}
              allIngredients={allIngredients}
            />
          );
        })}
    </div>
  );
}
