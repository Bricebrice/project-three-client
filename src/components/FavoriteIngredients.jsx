import SquareCard from "./SquareCard"

export default function FavoriteIngredients (props) {
    const {favIngredients} = props;
    return (
        <section className="w-11/12 mx-auto mb-5">
        <h3>Favorite Ingredients here</h3>

        <div className="flex gap-2 overflow-hidden">
            {favIngredients.map((ingredient) => {
                return <SquareCard item={ingredient} key={ingredient._id} url="/ingredient" />
            })}
        </div>
        </section>
        


    )
}