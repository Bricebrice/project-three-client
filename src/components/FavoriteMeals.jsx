import SquareCard from "./SquareCard";

export default function FavoriteMeals(props) {
  const {favMeals} = props; 
  return (
    <section className="w-11/12 mx-auto mb-5">
      <h3>Favorite Meals here</h3>

      <div>
        {favMeals.map((meal) => {
          return <SquareCard item={meal} key={meal._id} url="/meal"/>;
        })}
      </div>
    </section>
  );
}
