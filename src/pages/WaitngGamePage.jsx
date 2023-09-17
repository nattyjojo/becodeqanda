import WaitingGame from "../components/WaitingGame/WaitingGame"
import Footer from "../components/footer/footer"
import Header from "../components/hearder/Header"


export default function WaitingGamePage() {
  return (
    <div >
       <Header
        link2={"/about"}
        content2={"ABOUT"}
        link1={"/joinquiz"}
        content1={"JOIN"}
      />
      <WaitingGame />
      <Footer />
    </div>
  )
}
