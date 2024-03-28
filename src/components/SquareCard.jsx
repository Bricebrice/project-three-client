import { Link } from "react-router-dom";

export default function SquareCard({ item, url }) {
  return (
    <Link
      to={`${url}/${item._id}`}
      className="relative flex flex-col items-center justify-center w-32 h-32 hover:opacity-80"
    >
      <img
        src={item.imageUrl}
        alt={item.name}
        className="w-32 h-32 rounded-md object-cover"
      />
      <span className="absolute bottom-0 bg-white text-black w-full text-center text-xs py-1 rounded-b ">
        {item.name}
      </span>
    </Link>
  );
}
