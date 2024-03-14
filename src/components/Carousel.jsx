import { Carousel } from "flowbite-react";

function MyCarousel({ items }) {
  return (
    <div className="h-96 md:h-56 xl:h-80 2xl:h-96">
      <Carousel pauseOnHover className="h-full">
        {items.map((item, index) => (
          <div
            key={index}
            className="h-full items-center justify-center  dark:bg-gray-700 dark:text-white"
          >
            {item}
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default MyCarousel;
