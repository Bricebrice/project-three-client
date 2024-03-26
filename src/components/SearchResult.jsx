import { useState } from "react";

export default function SearchResult(props) {
  const {
    item,
    setQuery,
    setRecipeIngredients,
    recipeIngredients,
    setAllIngredients,
    allIngredients,
  } = props;
  const [quantity, setQuantity] = useState(100);

  const editAvailableIngredients = async (verifier) => {
    const filteredIngredients = await allIngredients.filter((ingredient) => {
      if (verifier === ingredient.item.name) {
        return;
      } else return ingredient;
    });
    setAllIngredients(filteredIngredients);
  };

  // const { recipeIngredients, setRecipeIngredients } = useContext(MealContext);
  return (
    <div className="h-12 w-full mx-auto flex bg-white items-center justify-center gap-3">
      <img
        src={item.imageUrl}
        alt="food food food"
        className="h-8 w-8 rounded-full"
      />
      <p>{item.name}</p>
      <div className="flex">
        <input
          type="number"
          value={quantity}
          onChange={(e) => {
            setQuantity(e.target.value);
          }}
          className="p-0 w-12"
        />
        <p>g</p>
      </div>
      <p
        className="bg-mantis-600 text-white px-2 py-1 rounded-md"
        onClick={() => {
          setRecipeIngredients([
            ...recipeIngredients,
            { item: item, quantity: Number(quantity) },
          ]);
          editAvailableIngredients(item.name);
          //console.log("recipe Ingredients: ", recipeIngredients);
          setQuery("");
        }}
      >
        Add me
      </p>
    </div>
  );
}
