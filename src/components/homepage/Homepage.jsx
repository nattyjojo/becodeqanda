import Header from "../hearder/Header";
import Footer from "../footer/footer";

export default function Homepage() {
  const date = new Date(2023, 8, 26, 2);
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
      <div className="content min-h-screen flex justify-center items-center px-4 md:px-8">
        <div className="text-center">
          <h1 className="text-xl md:text-5xl  font-main font-bold text-light-color mb-4">
            Good {timeOfDay}, Welcome Back
          </h1>
          <h3 className="mb-4 text-light-color md:text-3xl">
          Are you ready to put your knowledge to the test? 
          <br /> 
          Look no further than Becodeqanda
          </h3>
          <div className="space-4  flex justify-center gap-4 ">
            <button className="bg-light-color text-black  px-8 py-4 rounded-md  hover:bg-button-color transition duration-300 ease-in-out">
              <a href="/Register" className="font-bold cursor-pointer">
                Register
              </a>
            </button>
            <button className="bg-light-color text-black px-8 py-4 rounded-md  hover:bg-button-color transition duration-300 ease-in-out">
              <a href="/Login" className="cursor-pointer font-bold">
                Login
              </a>
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
