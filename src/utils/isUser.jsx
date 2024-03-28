import { useContext } from "react";
import { AuthContext } from "../context/auth.context";
import { Navigate, useParams } from "react-router-dom";
import VegSpinner from "../components/VegSpinner";

export default function IsUser({ children }) {
  const { isLoading, isLoggedIn, user } = useContext(AuthContext);
  const { userId } = useParams();

  if (isLoading) {
    return (
      <>
        <VegSpinner />
      </>
    );
  }

  if (isLoggedIn) {
    if (user._id !== userId) {
      return <Navigate to="/" />;
    } else {
      return children;
    }
  } else {
    return <Navigate to="/" />;
  }
}
