export default function RemoveResult(props) {
  const { item, setQuery, setRecipe, recipe } = props;

  return (
    <div className="h-12 w-full mx-auto flex bg-white items-center justify-center gap-3">
      <img
        src={item.imageUrl}
        alt="food food food"
        className="h-8 w-8 rounded-full"
      />
      <p>{item.name}</p>
      <p
        className="bg-red-600 text-white px-2 py-1 rounded-md"
        onClick={async () => {
          const newRecipe = await recipe.filter((ingredient) => {
            if (ingredient.item.name === item.name) {
              return;
            } else return ingredient;
          });
          setRecipe(newRecipe);
          //console.log("recipe Ingredients: ", recipeIngredients);
          setQuery("");
        }}
      >
        Remove
      </p>
    </div>
  );
}
