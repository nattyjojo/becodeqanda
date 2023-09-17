import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

const Registration = ({ title }) => {
  const [userName, setUserName] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();
  const handleNavigation = async (condition) => {
    if (condition === "success") {
      const success = () => toast.success("Registration Successful");
      success();
      setTimeout(() => {
        // Navigate to a different route
        navigate("/login");
      }, 1000);
    } else {
      condition === "error";
      const error = toast.error("User  Name Already Exist");
      error();
      setTimeout(() => {
        // Navigate to a different route
        navigate("/login");
      }, 1000);
    }
  };

  const SING_UP_APIURL =
    "https://kahoutserver-production.up.railway.app/api/sign_up";
  return (
    <section className="flex justify-center items-center h-[100vh] font-medium">
      <main className="bg-white p-6 md:p-8 rounded-lg shadow-md  w-full lg:w-1/2 xl:w-1/3">
        <h1 className="text-2xl font-bold mb-6">{title}</h1>
        <form
          onSubmit={(event) => {
            event.preventDefault();
            axios
              .post(SING_UP_APIURL, {
                username: userName,
                password: password,
              })
              .then((response) => {
                [
                  response.data.message === "User registered"
                    ? handleNavigation("success")
                    : handleNavigation("error"),
                ];
              })
              .catch((error) => {
                console.error(error);
              });
          }}
          className="space-y-4"
        >
          <div>
            <label className="block font-medium" htmlFor="username">
              Username
            </label>
            <input
              className="w-full py-2 px-3 border rounded-md  focus:ring-primary-color"
              type="text"
              id="username"
              name="username"
              placeholder="Enter Username"
              required
              onChange={(event) => setUserName(event.target.value)}
            />
          </div>
          <div>
            <label className="block font-medium" htmlFor="password">
              Password
            </label>
            <input
              className="w-full py-2 px-3 border rounded-md  focus:ring-primary-color"
              name="password"
              id="password"
              type="password"
              placeholder="Enter Password"
              required
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>
          {/* <Link to="/login" className="hover:text-button-color">
            <button
              type="submit"
              className="w-full bg-secondary-color text-white py-2 rounded-md  hover:bg-button-color transition duration-300 ease-in-out"
            >
              Submit
            </button>
          </Link> */}
          <Toaster />
          <button
            type="submit"
            className="w-full bg-secondary-color text-white py-2 rounded-md  hover:bg-button-color transition duration-300 ease-in-out"
          >
            Submit
          </button>
        </form>
      </main>
    </section>
  );
};

export default Registration;
