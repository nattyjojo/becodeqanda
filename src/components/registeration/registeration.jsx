const Registration = ({ title }) => {
  return (
    <section className="flex justify-center items-center h-[80vh] font-medium">
      <main className="bg-white p-6 md:p-8 rounded-lg shadow-md  w-full lg:w-1/2 xl:w-1/3">
        <h1 className="text-2xl font-bold mb-6">{title}</h1>
        <form className="space-y-4">
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
            />
          </div>
          <button className="w-full bg-secondary-color text-white py-2 rounded-md  hover:bg-button-color transition duration-300 ease-in-out">
            Submit
          </button>
        </form>
      </main>
    </section>
  );
};

export default Registration;
