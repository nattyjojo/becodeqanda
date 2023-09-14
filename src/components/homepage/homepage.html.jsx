import Header from "../hearder/Header";
import Footer from "../footer/footer";
import { Link } from "react-router-dom";

export default function Homepage() {
  const date = new Date();
  const hours = date.getHours();
  let timeOfDay;

  if (hours < 12) {
    timeOfDay = "Morning";
  } else if (hours >= 12 && hours < 17) {
    timeOfDay = "Afternoon";
  } else {
    timeOfDay = "Night";
  }

  return (
    <div>
      <Header />
      <div className="content min-h-[80vh] flex justify-center items-center px-4 md:px-8">
        <div className="text-center">
          <div className="type-container">
            <h1 className=" typed-out text-xl md:text-5xl  font-main font-bold text-light-color mb-4">
              Good {timeOfDay}, Welcomee Back!
            </h1>
          </div>
          <h3 className="mb-4 text-light-color md:text-3xl">
            Are you ready to put your knowledge to the test?
            <br />
            Look no further than Becodeqanda
          </h3>
          <div className="space-4  flex justify-center gap-4 ">
            <button className="bg-transparent  border-teal-400 border-2 text-light-color mt-5  px-8 py-4 rounded-md  hover:bg-button-color  transition duration-300 ease-in-out">
              <Link to="/register" className="font-bold cursor-pointer">
                Register
              </Link>
            </button>
            <button className="bg-transparent border-2 border-teal-400 text-light-color mt-5 px-8 py-4 rounded-md hover:bg-button-color transition duration-300 ease-in-out">
              <Link to="/login" className="cursor-pointer font-bold">
                Login
              </Link>
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
