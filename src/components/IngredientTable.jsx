import IngredientRow from "./IngredientRow";

export default function IngredientTable(props) {
  //const { recipeIngredients } = useContext(MealContext);
  const { recipeIngredients, setRecipeIngredient } = props;

  const removeElement = async (verifier) => {
    const filteredIngredients = await recipeIngredients.filter((ingredient) => {
      if (verifier === ingredient.item.name) {
        return; 
      } else return ingredient; 
    });
    setRecipeIngredient(filteredIngredients)
  };

  return (
    <table className="w-full text-base text-center mb-5">
      <thead className="text-xs text-white bg-mantis-600">
        <tr>
          <th className="pl-2 py-3" scope="col">
            Name
          </th>
          <th className="px-2 py-3" scope="col">
            Quantity (g)
          </th>
          <th className="py-3" scope="col">
            Calories
          </th>
          <th className="px-2 py-3" scope="col">
            Proteins
          </th>
          <th className="py-3" scope="col">
            Carbs
          </th>
          <th className="px-2 py-3" scope="col">
            Fats
          </th>
        </tr>
      </thead>
      <tbody>
        {recipeIngredients.map((ingredient) => {
          return (
            <IngredientRow
              item={ingredient.item}
              quantity={ingredient.quantity}
              key={ingredient._id + "1"}
              remove={removeElement}
            />
          );
        })}
      </tbody>
      <tfoot>
        <tr>
          <th scope="row" colSpan={2} className="bg-mantis-300">
            Totals
          </th>
          <td>
            {recipeIngredients
              .map((ingredient) => {
                return (
                  Math.round(
                    ((ingredient.item.calories * ingredient.quantity) / 100) *
                      10
                  ) / 10
                );
              })
              .reduce((acc, current) => acc + current, 0)}
            kcal
          </td>
          <td>
            {recipeIngredients
              .map((ingredient) => {
                return (
                  Math.round(
                    ((ingredient.item.proteins * ingredient.quantity) / 100) *
                      10
                  ) / 10
                );
              })
              .reduce((acc, current) => acc + current, 0)}
            g
          </td>
          <td>
            {recipeIngredients
              .map((ingredient) => {
                return (
                  Math.round(
                    ((ingredient.item.carbs * ingredient.quantity) / 100) * 10
                  ) / 10
                );
              })
              .reduce((acc, current) => acc + current, 0)}
            g
          </td>
          <td>
            {recipeIngredients
              .map((ingredient) => {
                return (
                  Math.round(
                    ((ingredient.item.fats * ingredient.quantity) / 100) * 10
                  ) / 10
                );
              })
              .reduce((acc, current) => acc + current, 0)}
            g
          </td>
        </tr>
      </tfoot>
    </table>
  );
}
