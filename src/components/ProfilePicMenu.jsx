import { NavLink } from "react-router-dom";

export default function ProfilePicMenu(props) {
  const { setMenuToggle, menuToggle, user, logOutRedirect } = props;
  return (
    <div className="relative">
      <img
        onClick={() => {
          setMenuToggle(!menuToggle);
        }}
        src={user.profilePic}
        className="w-8 h-8 rounded-full block hover:ring-4 hover:ring-mantis-600 "
      />
      <div
        className={`bg-mantis-600 ${
          menuToggle === false ? "hidden" : "block"
        } -left-36 top-10 rounded-md w-44 absolute`}
      >
        <span className="text-sm text-white block m-2 p-1 text-nowrap">
          {user.firstName}
        </span>
        <span className="text-sm text-white block mx-2 mb-2 p-1">
          {user.email}
        </span>

        <hr />

        <NavLink
          to={"/profile"}
          className="text-sm text-white block mx-2 m-2 p-1 rounded hover:bg-mantis-300"
          onClick={() => {
            setMenuToggle(!menuToggle);
          }}
        >
          Profile
        </NavLink>
        <NavLink
          to={`/edit-profile/${user._id}`}
          onClick={() => {
            setMenuToggle(!menuToggle);
          }}
          className="text-sm text-white block mx-2 mb-2 hover:bg-mantis-300 rounded p-1"
        >
          Edit User
        </NavLink>
        {user.role === "admin" && (
          <NavLink
            to={"/add-ingredient"}
            onClick={() => {
              setMenuToggle(!menuToggle);
            }}
            className="text-sm text-white block mx-2 mb-2 hover:bg-mantis-300 rounded p-1"
          >
            Add Ingredients
          </NavLink>
        )}
        <button
          onClick={() => {
            logOutRedirect();
            setMenuToggle(!menuToggle);
          }}
          className="text-sm text-white bg-orange-500 mx-1 mb-2 py-1 px-14 rounded text-nowrap"
        >
          Sign Out
        </button>
      </div>
    </div>
  );
}
