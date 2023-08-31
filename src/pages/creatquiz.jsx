import Header from "../components/hearder/Header";
import Question from "../components/createQuiz/qustion";
import Footer from "../components/footer/footer";

export default function CreateQuizPage(){
    return(
        <section>
        <Header />
        <Question option="1" color='[red]'/>
        <Footer />
        </section>
    
    )
}