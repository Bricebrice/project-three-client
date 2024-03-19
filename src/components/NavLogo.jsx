import { NavLink } from "react-router-dom";
import logo from "../../src/assets/logo.png";

export default function NavLogo() {
  return (
    <div className="flex items-center text-white">
      <NavLink className="flex items-center gap-1" to={"/"}>
        <img src={logo} alt="logo" className="h-8 md:h-12 w-auto" />
        <span className="sm:text-lg md:text-2xl">VeganEase Planner</span>
      </NavLink>
    </div>
  );
}
