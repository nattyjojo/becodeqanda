import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";

const Login = ({ title }) => {
  const [userName, setUserName] = useState();
  const [password, setPassword] = useState();
  return (
    <section className="flex justify-center items-center h-[80vh] font-medium">
      <main className="bg-white p-6 md:p-8 rounded-lg shadow-md  w-full lg:w-1/2 xl:w-1/3">
        <h1 className="text-2xl font-bold mb-6">{title}</h1>
        <form
          onSubmit={(event) => {
            event.preventDefault();
            console.log({ username: userName, password: password });
            axios
              .post(
                "https://kahoutserver-production.up.railway.app/api/sign_up",
                { username: userName, password: password }
              )
              .then((response) => {
                console.log(response.data);
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
          <Link to="/dashboard" className="hover:text-button-color">
            <button
              type="submit"
              className="w-full bg-secondary-color text-white py-2 rounded-md  hover:bg-button-color transition duration-300 ease-in-out"
            >
              Submit
            </button>
          </Link>
          {/* <button
            type="submit"
            className="w-full bg-secondary-color text-white py-2 rounded-md  hover:bg-button-color transition duration-300 ease-in-out"
          >
            Submit
          </button> */}
        </form>
      </main>
    </section>
  );
};

export default Login;
