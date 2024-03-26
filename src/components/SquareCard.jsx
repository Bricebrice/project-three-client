import { Link } from "react-router-dom";

export default function SquareCard(props) {
  const { item, url } = props;
  return (

    <Link className="text-middle relative flex w-32 h-32" to={`${url}/${item._id}`}>
        <img src={item.imageUrl} alt="" className="w-32 h-32 rounded-md"/>
      <span className="bg-black text-white w-32 text-center text-xs absolute top-14">{item.name}</span>
    </Link>
  );
}
