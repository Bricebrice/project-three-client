import { AuthContext } from "../context/auth.context";
import { useContext } from "react";

export default function ProfileHeader(props) {
  const { user } = useContext(AuthContext);
  return (
    <div className="flex items-center justify-center gap-10 py-5">
      <img
        src={user.profilePic}
        alt="profile-picture"
        className="rounded-full h-16 w-16 object-cover"
      />
      <h1 className="text-xl">Welcome {user.firstName}</h1>
    </div>
  );
}
