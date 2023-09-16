import Header from "../components/hearder/Header";
import Footer from "../components/footer/footer";
import ShowQuiz from "../components/showQuiz/ShowQuiz";

export default function ShowQuizPage() {
  return (
    <div>
      <Header
        link2={"/about"}
        content2={"ABOUT"}
        link1={"/joinquiz"}
        content1={"JOIN"}
      />
      <ShowQuiz />
      <Footer />
    </div>
  );
}
