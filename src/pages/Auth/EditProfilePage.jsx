import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import authService from "../../services/auth.service";
import userService from "../../services/user.service";

export default function EditProfilePage() {
  const { userId } = useParams();
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    profilePic: "",
  });
  const [errorMessage, setErrorMessage] = useState(undefined);

  const fetchData = async () => {
    try {
      const response = await authService.verify();
      const foundUser = response.data;
      console.log(foundUser);
      setForm({
        firstName: foundUser.firstName,
        lastName: foundUser.lastName,
        profilePic: foundUser.profilePic,
      });
    } catch (error) {
      console.log(error.response.data.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.id]: e.target.value,
    });
  };

  const handleFileUpload = async (e) => {
    try {
      const uploadData = new FormData();
      uploadData.append("profilePic", e.target.files[0]);
      const response = await userService.imageUpload(uploadData);
      setForm({
        ...form,
        profilePic: response.data.fileUrl,
      });
    } catch (error) {
      setErrorMessage(error.response);
    }
  };

  const handleEditSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = userService.edit(userId, form);
      navigate("/profile");
    } catch (error) {
      setErrorMessage(error.response);
    }
  };

  return (
    <div className="LoginPage bg-mustard-100 flex flex-col h-dvh items-center ">
      <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
        <div className="max-w-screen-xl mb-8">
          <h2 className="mb-8 sm:mb-16 text-3xl sm:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white text-center">
            Edit Profile
          </h2>
        </div>

        <form
          className="max-w-md mx-auto flex flex-col items-center mb-5 bg-mustard-400 rounded p-7"
          onSubmit={handleEditSubmit}
        >
          <div>
            <img
              src={form.profilePic}
              className="w-24 h-24 mx-auto rounded-full"
              alt="food-image"
            />
            <input
              className="m-5 mx-auto hover:cursor-pointer"
              type="file"
              onChange={handleFileUpload}
            />
          </div>
          <div className="flex flex-wrap justify-between mb-5">
            <div className="w-full md:w-1/2 mb-5 md:mb-0 md:pr-2">
              <label className="block mb-2 text-sm font-medium" htmlFor="email">
                First Name:
              </label>
              <input
                className="bg-gray-100 border border-gray-400 text-sm rounded-lg w-full p-2.5"
                type="text"
                name="firstName"
                id="firstName"
                value={form.firstName}
                onChange={handleChange}
              />
            </div>
            <div className="w-full md:w-1/2">
              <label className="block mb-2 text-sm font-medium">
                Last Name:
              </label>
              <input
                className="bg-gray-100 border border-gray-400 text-sm rounded-lg w-full p-2.5"
                type="text"
                name="lastName"
                id="lastName"
                value={form.lastName}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="mb-5"></div>

          <button
            className="bg-orange-400 border-2 shadow border-orange-500 rounded w-full py-2.5 hover:bg-orange-600 hover:border-orange-700 hover:border-2"
            type="submit"
          >
            Edit User
          </button>
        </form>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
      </div>
    </div>
  );
}
