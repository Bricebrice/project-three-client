import { Link } from "react-router-dom";
import logo from "../../src/assets/logo.png";

export default function NavLogo() {
  return (
    <div className="flex items-center text-white">
      <Link to="/" className="flex items-center">
        <img src={logo} className="h-8 me-2" alt="VeganEase Planner Logo" />
        <span className="sm:text-lg md:text-2xl self-center whitespace-nowrap text-white">
          VeganEase Planner
        </span>
      </Link>
    </div>
  );
}
