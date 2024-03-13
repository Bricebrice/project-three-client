// icons from flatIcon
import foodFeatureImage from "../assets/food.png";
import ingredientFeatureImage from "../assets/ingredients.png";
import calendarFeatureImage from "../assets/calendar.png";

function MainFeatures() {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6 text-center">
        <div className="max-w-screen-xl mb-16">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            Main features
          </h2>
        </div>
        <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
          <div>
            <div className="flex justify-center items-center mx-auto mb-4 w-24 h-24 rounded-full bg-primary-100 dark:bg-primary-900">
              <img
                className="w-16 h-16 text-primary-600 dark:text-primary-300"
                src={foodFeatureImage}
                alt="Meal Creation Icon"
              />
            </div>
            <h3 className="mb-2 text-xl font-bold dark:text-white">
              Meal creation and customization
            </h3>
            <p className="text-gray-500 dark:text-gray-400">
              Craft your perfect plate: personalize meals to suit your taste
            </p>
          </div>
          <div>
            <div className="flex justify-center items-center mx-auto mb-4 w-24 h-24 rounded-full bg-primary-100 dark:bg-primary-900">
              <img
                className="w-16 h-16 text-primary-600 dark:text-primary-300"
                src={ingredientFeatureImage}
                alt="Ingredient Management Icon"
              />
            </div>
            <h3 className="mb-2 text-xl font-bold dark:text-white">
              Ingredient management
            </h3>
            <p className="text-gray-500 dark:text-gray-400">
              Stay organized: manage ingredients effortlessly
            </p>
          </div>
          <div>
            <div className="flex justify-center items-center mx-auto mb-4 w-24 h-24 rounded-full bg-primary-100 dark:bg-primary-900">
              <img
                className="w-16 h-16 text-primary-600 dark:text-primary-300"
                src={calendarFeatureImage}
                alt="Calendar Icon"
              />
            </div>
            <h3 className="mb-2 text-xl font-bold dark:text-white">
              Calendar for meal planning
            </h3>
            <p className="text-gray-500 dark:text-gray-400">
              Plan with precision: seamlessly schedule meals
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MainFeatures;
