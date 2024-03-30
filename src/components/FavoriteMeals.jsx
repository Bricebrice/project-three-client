import SquareCard from "./SquareCard";
import { Link } from "react-router-dom";

export default function FavoriteMeals(props) {
  const { favMeals } = props;

  return (
    <section className="mx-auto mb-5">
      <h3 className="text-2xl font-bold text-gray-900 mb-6">Favorite Meals</h3>

      <div className="flex flex-wrap justify-around sm:justify-center gap-4">
        {favMeals.length === 0 ? (
          <p>No favorite meals yet! Add some <Link to={"/all-meals"} className="underline text-blue-600 underline-offset-2">here</Link></p>
        ) : (
          favMeals.map((meal) => (
            <SquareCard key={meal._id} item={meal} url="/meal" />
          ))
        )}
      </div>
    </section>
  );
}
