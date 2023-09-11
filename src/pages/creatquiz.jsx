import { useEffect, useRef, useState } from "react";
import Header from "../components/hearder/Header";
import QuestionInput from "../components/createQuiz/question";
import AnswerBtn from "../components/createQuiz/answer";
import Footer from "../components/footer/footer";
import AddedQuizList from "../components/createQuiz/addedQuizList";
import TimeLimitButton from "../components/createQuiz/timeLimitButton";
import PointsButton from "../components/createQuiz/pointsButton";
import BackgroundImg from "../components/createQuiz/background";
import createQuizBackgroundLinks from "../assets/createQuizBackgroundLinks";



export default function CreateQuizPage(){
    let [question, setQuestion] = useState()
    let [option1, setOption1] = useState()
    let [option2, setOption2] = useState()
    let [option3, setOption3] = useState()
    let [option4, setOption4] = useState()
    let [timeLimit, setTimeLimit] = useState()
    let [points, setPoints] = useState()
    let [backgroundImg, setBackgroundImg] = useState()
    const [clickedImageBorder, setClickedImageBorder] = useState()
    const clearForm = useRef(null)
    const displayAddedQuiz = useRef(null)
    const [quizAnswer, setQuizAnswer] = useState([])
    const answerContainer = [1,2,3,4]
    let  addedQuiz = []
    useEffect(()=>console.log(quizAnswer), [quizAnswer])
    return(
        <>
         <Header />
        <main className="flex justify-center pt-[2rem] text-center px-[1rem] ">
           

            <AddedQuizList />
         <form
         ref={clearForm}
         onSubmit={(event)=>{
            event.preventDefault()
            if(clearForm.current){
                clearForm.current.reset()
            }
            setClickedImageBorder()
            setBackgroundImg()

            addedQuiz.push({
                question: question,
                option1: option1,
                option2: option2,
                option3: option3,
                option4: option3,
                timeLimit: timeLimit,
                points: points,
                backgroundImg: backgroundImg
            })
        }    
        }
          className="flex text-center  ">
         
         
         <section className="p-1 rounded-md pt-2" style={{backgroundImage: `url(${backgroundImg})`, backgroundRepeat: "no-repeat", backgroundSize:"cover"}}>
                <QuestionInput question={question} setQuestion={setQuestion}/>
                <br />
                <section className="mt-[5rem]"> 
                    <section>
                        {answerContainer.map((e, index)=>{
                            switch(index){
                                case 0:
                                    return(
                                        <AnswerBtn key={index} index={index} quizAnswer={quizAnswer} setQuizAnswer={setQuizAnswer} optionValue={option1} setOptionValue={setOption1} option="1" color='#c60929' fa='fa-regular fa-circle fa-2x' />

                                    )
                                case 1:
                                    return(
                                        <AnswerBtn key={index} index={index} quizAnswer={quizAnswer} setQuizAnswer={setQuizAnswer} optionValue={option2} setOptionValue={setOption2} option="2" color='#0542b9' fa='fa-regular fa-square fa-2x' />

                                    )
                                default:
                                    return
                            }

                        }  )}
                    </section>
                    <section>
                    {answerContainer.map((e, index)=>{
                            switch(index){
                                case 2:
                                    return(
                                        <AnswerBtn key={index} index={index} quizAnswer={quizAnswer} setQuizAnswer={setQuizAnswer} optionValue={option3}  setOptionValue={setOption3} option="3" color='#f5a23d' fa='fa-regular  fa-star fa-2x'/>

                                    )
                                case 3:
                                    return(
                                        <AnswerBtn key={index} index={index} quizAnswer={quizAnswer} setQuizAnswer={setQuizAnswer} optionValue={option4}  setOptionValue={setOption4} option="4" color='#106b03' fa='fa-regular fa-solid fa-moon fa-2x' />

                                    )
                                    
                                default:
                                    return null
                            }

                            }       )}
                    </section>
                </section>
               
            </section>
            <section className="w-[20vw] text-white border-2">
            <TimeLimitButton set={setTimeLimit}/>
            <PointsButton set={setPoints}/>
            <section className="p-[1rem]">
                {createQuizBackgroundLinks.map((createQuizBackgroundLink, index)=>(
                     <BackgroundImg 
                     src={createQuizBackgroundLink} 
                     key={index}
                     setClickedImageBorder={setClickedImageBorder} 
                     imageIndex={index} 
                     color={`${clickedImageBorder === index ? 'green' : '' }`}
                     setBackgroundImg={setBackgroundImg}
                     />
                ))}
            </section>
   
        
        <button type="submit"

          className=" w-[90%] bg-secondary-color text-white py-2 rounded-md mt-3 hover:bg-button-color transition duration-300 ease-in-out"
          
        >Add Quiz</button>
        <br />
      
        <button 
         onClick={()=>{
            setClickedImageBorder()
            setBackgroundImg()
           
        }}
        type="reset" className=" w-[90%] bg-secondary-color text-white py-2 rounded-md mt-3 mb-3 hover:bg-button-color transition duration-300 ease-in-out">Delete Quiz</button>
      
            </section>

         </form>
         </main>
            <Footer />
        </>
    
    )
}
