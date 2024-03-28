import { AuthContext } from "../context/auth.context";
import { useContext } from "react";

export default function ProfileHeader(props) {
  const { user } = useContext(AuthContext);
  return (
    <div className="flex flex-col items-center justify-center gap-4 py-5">
      <img
        src={user.profilePic}
        alt="profile-picture"
        className="rounded-full h-24 w-24 object-cover"
      />
      <div>
        <h1 className="text-xl font-medium">{`Welcome, ${user.firstName}!`}</h1>
      </div>
    </div>
  );
}
