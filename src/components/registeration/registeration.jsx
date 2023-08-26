
const Registration = ({ title }) => {
  return (
    <section className="flex justify-center items-center h-screen font-medium">
      <main className="bg-white p-6 md:p-8 rounded-lg shadow-md w-full lg:w-1/2 xl:w-1/3">
        <h1 className="text-2xl font-bold mb-4">{title}</h1>
        <form className="space-y-4">
          <div>
            <label className="block font-medium" htmlFor="username">
              Username
            </label>
            <input
              className="w-full py-2 px-3 border rounded-md focus:ring focus:ring-primary-color"
              type="text"
              id="username"
              name="username"
              placeholder="Enter Username"
            />
          </div>
          <div>
            <label className="block font-medium" htmlFor="password">
              Password
            </label>
            <input
              className="w-full py-2 px-3 border rounded-md focus:ring focus:ring-primary-color"
              name="password"
              id="password"
              type="password"
              placeholder="Enter Password"
            />
          </div>
          <button className="w-full bg-secondary-color text-white py-2 rounded-md hover:bg-button-color transition duration-300 ease-in-out">
            Submit
          </button>
const Registeration = ({title}) => {
    return (
      
     <section className="flex justify-around mt-[15vh]">
       <main className="bg-primary-color text-light-color leading-10 text-center rounded-[20%] inline-block">
      <h1 className="font-bold">{title}</h1>
        <form className="px-[3rem] py-[3rem]">
          <label className="font-meduim" htmlFor="username">Username</label>
          <br></br>
          <input className="text-center text-[#444343] font-semibold" type="text" id="username" name="username" placeholder="Enter Username"></input>
          <br></br>
          <label htmlFor="password">Password </label>
          <br></br>
          <input className="text-center text-[#444343] font-semibold" name="password" id="password" type="password" placeholder="Enter Password"></input>
          <br></br>
          <input className="bg-secondary-color px-5 py-2 mt-2 font-extrabold border rounded-lg hover:text-primary-color" type="submit" value="Submit"></input>
        </form>
      </main>
    </section>
  );
};

export default Registration;
