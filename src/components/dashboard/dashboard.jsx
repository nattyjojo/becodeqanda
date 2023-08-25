export default function Dashboard() {
  return (
    <section className="text-light-color flex justify-center mt-[30vh] font-extrabold text-[3rem]">
      <a href="/join" className="bg-primary-color px-5 py-5 border rounded-lg hover:text-button-color">
        <button>Create Quiz</button>
      </a>
      <a href="#" className="bg-primary-color px-5 py-5 border rounded-lg hover:text-button-color mx-3">
        <button>Join Quiz</button>
      </a>
      <a href="#" className="bg-primary-color px-5 py-5 border rounded-lg hover:text-button-color">
        <button>Show Quiz</button>
      </a>
    </section>
  );
}
