import { set } from "mongoose";
import { useState } from "react";
import RemoveResult from "./RemoveResult";

export default function RemoveBar(props) {
  const [query, setQuery] = useState("");
  const { setRecipe, recipe } = props;
  const searchQueryChange = (e) => {
    return setQuery(e.target.value);
  };

  return (
    <div className="w-full mb-5">
      <input
        onChange={searchQueryChange}
        type="search"
        placeholder="Remove Ingredient here..."
        className="w-full text-center rounded-md"
      />
      {recipe
        .filter((ingredient) => {
          if (query === "") {
            return;
          } else if (
            ingredient.item.name.toLowerCase().includes(query.toLowerCase())
          ) {
            return ingredient;
          } else return;
        })
        .map((ingredient) => {
          return (
            <RemoveResult
              item={ingredient.item}
              key={ingredient.item.id + "73"}
              setQuery={setQuery}
              setRecipe={setRecipe}
              recipe={recipe}
            />
          );
        })}
    </div>
  );
}
