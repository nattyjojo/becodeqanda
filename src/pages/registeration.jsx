import Header from "../components/hearder/Header";
import Registeration from "../components/registeration/registeration";
import Footer from "../components/footer/footer";

export default function RegisterationPage() {
  return (
    <>
      <Header
        link2={"/about"}
        content2={"ABOUT"}
        link1={"/joinquiz"}
        content1={"JOIN"}
      />
      <main>
        <Registeration title={"Register"} />
      </main>
      <Footer />
    </>
  );
}
