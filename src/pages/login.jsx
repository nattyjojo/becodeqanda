import Header from "../components/hearder/Header";
import Login from "../components/login/login";
import Registeration from "../components/registeration/registeration";
import Footer from "../components/footer/footer";

export default function LoginPage() {
  return (
    <>
      <Header
        link2={"/about"}
        content2={"ABOUT"}
        link1={"/joinquiz"}
        content1={"JOIN"}
      />
      <Login title={"Login"} />:
      <Footer />
    </>
  );
}
