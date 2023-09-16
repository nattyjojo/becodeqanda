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
import toast, { Toaster } from "react-hot-toast";

import validateToken from "../components/login/middleWares/handleRegisteredUsers";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

export default function CreateQuizPage() {
  let [question, setQuestion] = useState();
  let [option1, setOption1] = useState();
  let [option2, setOption2] = useState();
  let [option3, setOption3] = useState();
  let [option4, setOption4] = useState();
  let [timeLimit, setTimeLimit] = useState();
  let [points, setPoints] = useState();
  let [backgroundImg, setBackgroundImg] = useState();
  const [clickedImageBorder, setClickedImageBorder] = useState();
  const clearForm = useRef(null);
  let [quizAnswer, setQuizAnswer] = useState([]);
  const [InputState, setInputState] = useState([]);
  const [addedQuiz, setAddQuiz] = useState([]);
  const [selectedAnswer, setSelectedAnswer] = useState(false);
  const [getAnswer, setGetAnswer] = useState(false);
  const [saveOrDelete, setSaveOrDelete] = useState();
  const errorMsg = () => toast.error("Select Correct Answer");
  const [quizName, setQuizName] = useState();

  const defaultBackgroundImage =
    "https://www.codefear.com/wp-content/content/2013/07/qa.jpg";
  const defaultTimeLimit = 5;
  const defaultPoints = 5;

  const answerContainer = [1, 2, 3, 4];
  let ans = [];
  const setSaveOrDeletState = (todo) => {
    if (todo === "save") {
      setSaveOrDelete("save");
    } else {
      todo === "delete";
      setSaveOrDelete("delete");
    }
  };

  const finalAnswer = (value) => {
    ans.push(value);
  };

  const [userIsValid, setUserIsValid] = useState();
  const token = Cookies.get("authToken");
  const navigate = useNavigate();

  useEffect(() => {
    if (token === undefined) {
      navigate("/login");
    } else {
      const hasToken = async (token, setUserIsValid) => {
        try {
          await validateToken(token, setUserIsValid);
        } catch (err) {
          navigate("/login");
        }
      };
      hasToken(token, setUserIsValid, navigate);
    }
  });

  if (userIsValid === 200) {
    return (
      <>
        <Header
          link2={"/about"}
          content2={"ABOUT"}
          link1={"/joinquiz"}
          content1={"JOIN"}
        />
        <main>
          <main className="flex  h-[50vh] py-[15vh]   justify-around  text-center px-[1rem]">
            <section className="w-[23.75vw] h-[75vh]  relative border-solid   text-white border-2">
              <input
                onChange={(event) => setQuizName(event.target.value)}
                type="text"
                placeholder="Enter Quiz Name"
                className="w-[90%] mt-3 text-center text-black rounded-full py-[1.2rem]"
              />
              <Toaster />
              <AddedQuizList
                saveOrDelete={saveOrDelete}
                quizName={quizName}
                addedQuiz={addedQuiz}
              />
              <br />

              <div className="absolute text-center bottom-0 w-[100%]">
                <hr />
                <button
                  onClick={(event) => {
                    event.preventDefault();
                    setSaveOrDeletState("save");
                  }}
                  className=" w-[90%] bg-secondary-color text-white py-2 rounded-md mt-3 hover:bg-button-color transition duration-300 ease-in-out"
                >
                  Save Quiz
                </button>

                <button
                  onClick={() => setSaveOrDeletState("delete")}
                  className=" w-[90%] bg-secondary-color text-white py-2 rounded-md  mt-3 mb-2 hover:bg-button-color transition duration-300 ease-in-out"
                >
                  Delete All
                </button>
              </div>
              <br />
            </section>
            <form
              ref={clearForm}
              onSubmit={(event) => {
                event.preventDefault();
                if (ans.length !== 0) {
                  setSelectedAnswer(!selectedAnswer);

                  if (clearForm.current) {
                    clearForm.current.reset();
                  }

                  let addQuiz = [
                    {
                      question: question,
                      option1: option1,
                      option2: option2,
                      option3: option3,
                      option4: option4,
                      timeLimit: [
                        timeLimit === undefined ? defaultTimeLimit : timeLimit,
                      ],
                      points: [points === undefined ? defaultPoints : points],
                      backgroundImg: [
                        backgroundImg === undefined
                          ? defaultBackgroundImage
                          : backgroundImg,
                      ],
                      answer: ans,
                    },
                  ];
                  setClickedImageBorder();
                  setBackgroundImg();
                  setAddQuiz(addQuiz);
                } else {
                  errorMsg();
                }
              }}
              className="flex text-center w-[71.25vw] "
            >
              <section
                className="p-1 rounded-md pt-2"
                style={{
                  backgroundImage: `url(${backgroundImg})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  height: "75vh",
                  marginTop: "2%",
                  maxWidth: "47.5vw",
                }}
              >
                <QuestionInput question={question} setQuestion={setQuestion} />
                <br />

                <section className="  flex">
                  <section>
                    {answerContainer.map((e, index) => {
                      switch (index) {
                        case 0:
                          return (
                            <AnswerBtn
                              finalAnswer={finalAnswer}
                              setGetAnswer={setGetAnswer}
                              getAnswer={getAnswer}
                              selectedAnswer={selectedAnswer}
                              setSelectedAnswer={setSelectedAnswer}
                              key={index}
                              InputState={InputState}
                              setInputState={setInputState}
                              index={index}
                              quizAnswer={quizAnswer}
                              setQuizAnswer={setQuizAnswer}
                              optionValue={option1}
                              setOptionValue={setOption1}
                              option="1"
                              color="#c60929"
                              fa="fa-regular fa-circle  fa-2x"
                            />
                          );

                        case 1:
                          return (
                            <AnswerBtn
                              finalAnswer={finalAnswer}
                              setGetAnswer={setGetAnswer}
                              getAnswer={getAnswer}
                              selectedAnswer={selectedAnswer}
                              setSelectedAnswer={setSelectedAnswer}
                              key={index}
                              InputState={InputState}
                              setInputState={setInputState}
                              index={index}
                              quizAnswer={quizAnswer}
                              setQuizAnswer={setQuizAnswer}
                              optionValue={option2}
                              setOptionValue={setOption2}
                              option="2"
                              color="#0542b9"
                              fa="fa-regular fa-square  fa-2x"
                            />
                          );
                        default:
                          return;
                      }
                    })}
                  </section>
                  <section>
                    {answerContainer.map((e, index) => {
                      switch (index) {
                        case 2:
                          return (
                            <AnswerBtn
                              finalAnswer={finalAnswer}
                              setGetAnswer={setGetAnswer}
                              getAnswer={getAnswer}
                              selectedAnswer={selectedAnswer}
                              setSelectedAnswer={setSelectedAnswer}
                              key={index}
                              InputState={InputState}
                              setInputState={setInputState}
                              index={index}
                              quizAnswer={quizAnswer}
                              setQuizAnswer={setQuizAnswer}
                              optionValue={option3}
                              setOptionValue={setOption3}
                              option="3"
                              color="#f5a23d"
                              fa="fa-regular  fa-star  fa-2x"
                            />
                          );
                        case 3:
                          return (
                            <AnswerBtn
                              finalAnswer={finalAnswer}
                              setGetAnswer={setGetAnswer}
                              getAnswer={getAnswer}
                              selectedAnswer={selectedAnswer}
                              setSelectedAnswer={setSelectedAnswer}
                              key={index}
                              InputState={InputState}
                              setInputState={setInputState}
                              index={index}
                              quizAnswer={quizAnswer}
                              setQuizAnswer={setQuizAnswer}
                              optionValue={option4}
                              setOptionValue={setOption4}
                              option="4"
                              color="#106b03"
                              fa="fa-regular fa-solid fa-moon  fa-2x"
                            />
                          );

                        default:
                          return null;
                      }
                    })}
                  </section>
                </section>
              </section>
              <section className="w-[23.75vw] h-[75vh] relative  text-white border-2">
                <TimeLimitButton set={setTimeLimit} />
                <PointsButton set={setPoints} />
                <section className="p-[1rem] overflow-scroll h-[60%]">
                  {createQuizBackgroundLinks.map(
                    (createQuizBackgroundLink, index) => (
                      <BackgroundImg
                        src={createQuizBackgroundLink}
                        key={index}
                        setClickedImageBorder={setClickedImageBorder}
                        imageIndex={index}
                        color={`${clickedImageBorder === index ? "green" : ""}`}
                        setBackgroundImg={setBackgroundImg}
                      />
                    )
                  )}
                </section>

                <div className="absolute w-[100%] bottom-0">
                  <button
                    type="submit"
                    onClick={() => {
                      setGetAnswer(!getAnswer);
                    }}
                    className=" w-[90%] bg-secondary-color text-white py-2 rounded-md mt-3 hover:bg-button-color transition duration-300 ease-in-out"
                  >
                    Add Quiz
                  </button>
                  <br />

                  <button
                    onClick={() => {
                      setClickedImageBorder();
                      setBackgroundImg();
                      setInputState([]);
                    }}
                    type="reset"
                    className=" w-[90%] bg-secondary-color text-white py-2 rounded-md mt-3 mb-3 hover:bg-button-color transition duration-300 ease-in-out"
                  >
                    Delete Quiz
                  </button>
                </div>
              </section>
            </form>
          </main>
        </main>
        <Footer />
      </>
    );
  }
}
