import SquareCard from "./SquareCard";
import { Link } from "react-router-dom";

export default function FavoriteIngredients(props) {
  const { favIngredients } = props;

  return (
    <section className="mx-auto mb-5">
      <h3 className="text-2xl font-bold text-gray-900 mb-6">
        Favorite ingredients
      </h3>

      <div className="flex flex-wrap justify-around sm:justify-center gap-4">
        {favIngredients.length === 0 ? (
          <p>
            No favorite meals yet! Add some{" "}
            <Link
              to={"/all-meals"}
              className="underline text-blue-600 underline-offset-2"
            >
              here
            </Link>
          </p>
        ) : (
          favIngredients.map((ingredient) => (
            <SquareCard key={ingredient._id} item={ingredient} url="/ingredient" />
          ))
        )}
      </div>
    </section>
  );
}
