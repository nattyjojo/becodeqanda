import { useEffect, useState } from "react";
import ShowAddedTem from "./showAddedTem";

export default function AddedQuizList(props) {
  const [quizList, setQuizList] = useState([]);
  const addedQuiz = props.addedQuiz;
  const quizName = props.quizName;
  const SaveDeleteAllQuiz = (todo) => {
    if (todo === "save") {
      setQuizList([]);
    } else {
      todo === "delete";
      setQuizList([]);
    }
  };
  useEffect(() => {
    if (props.saveOrDelete === "save") {
      const submitUserQuiz = {
        quizList,
        quizName,
      };
      console.log(submitUserQuiz);
      setQuizList([]);
    } else {
      props.saveOrDelete === "delete";
      setQuizList([]);
    }
  }, [props.saveOrDelete]);
  useEffect(() => {
    if (addedQuiz.length === 1) {
      setQuizList([...quizList, addedQuiz]);
    }
  }, [addedQuiz]);

  return (
    <section style={{ overflow: "scroll", height: "75%" }}>
      {quizList.map((e, index) => (
        <ShowAddedTem
          key={index}
          SaveDeleteAllQuiz={SaveDeleteAllQuiz}
          answer={e[0].answer}
          question={e[0].question}
          option1={e[0].option1}
          option2={e[0].option2}
          option3={e[0].option3}
          option4={e[0].option4}
          index={index}
          timeLimit={e[0].timeLimit}
          points={e[0].points}
          backgroundImg={e[0].backgroundImg}
        />
      ))}
    </section>
  );
}
