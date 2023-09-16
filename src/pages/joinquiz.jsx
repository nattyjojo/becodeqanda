import Header from "../components/hearder/Header";
import Footer from "../components/footer/footer";
import JoinQuiz from "../components/joinQuize/JoinQuiz";

export default function JoinQuizPage() {
  return (
    <main className="h-[100vh]">
      <Header
        link2={"/about"}
        content2={"ABOUT"}
        link1={"/joinquiz"}
        content1={"JOIN"}
      />
      <JoinQuiz />
      <Footer />
    </main>
  );
}
