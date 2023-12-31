export default function JoinQuiz() {
  return (
    <section className="flex items-center justify-center h-[100vh]">
      <div className="bg-white rounded-lg shadow-md p-8 max-w-md w-full">
        <h1 className="text-2xl  font-bold mb-6">Join The Quiz</h1>
        <form action="">
          <div className="mb-4">
            <label
              className="block text-sm font-medium text-gray-700"
              htmlFor="code"
            >
              Enter Code
            </label>
            <input
              className="mt-1 px-3 py-2 w-full border rounded-md focus:ring-primary-color focus:border-primary-color"
              type="text"
              name="code"
              id="code"
            />
          </div>
          <button
            className="w-full bg-secondary-color text-white py-2 rounded-md font-bold hover:bg-button-color transition duration-300 ease-in-out"
            type="submit"
          >
            Join
          </button>
        </form>
      </div>
    </section>
  );
}
