import React, { useState, useEffect, useMemo } from "react";
import {
  FaUser,
  FaStar,
  FaTimesCircle,
  FaSyncAlt,
  FaBars,
  FaMedal,
} from "react-icons/fa";
import "./Playgame.css";

export default function Playgame(props) {
  const optStyle = "m-2 px-5 py-3 md:px-40 md:py-5 inline-block solid rounded text-1xl md:text-3xl";
  const questionStyle = "bg-[green] text-white p-3 rounded  mb-20";
  const answerStyle = "bg-green-300 text-green-900 p-3 rounded cursor-pointer answer";

  const quizData = useMemo(
    () => [
      {
        question: "What is the capital of France?",
        options: ["London", "Berlin", "Paris", "Madrid"],
        correctAnswer: "Paris",
      },
      {
        question: "Which planet is known as the Red Planet?",
        options: ["Venus", "Mars", "Jupiter", "Saturn"],
        correctAnswer: "Mars",
      },
      {
        question: "What is the largest ocean in the world?",
        options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
        correctAnswer: "Pacific Ocean",
      },
      {
        question: "Who painted the Mona Lisa?",
        options: ["Leonardo da Vinci", "Pablo Picasso", "Vincent van Gogh", "Michelangelo"],
        correctAnswer: "Leonardo da Vinci",
      },
      {
        question: "Which gas do plants absorb from the atmosphere?",
        options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
        correctAnswer: "Carbon Dioxide",
      },
      {
        question: "What is the currency of Japan?",
        options: ["Yen", "Dollar", "Euro", "Pound"],
        correctAnswer: "Yen",
      },
      {
        question: "Which country is known as the Land of the Rising Sun?",
        options: ["China", "South Korea", "Japan", "Thailand"],
        correctAnswer: "Japan",
      },
      {
        question: "Who wrote the play 'Romeo and Juliet'?",
        options: ["William Shakespeare", "Charles Dickens", "Jane Austen", "Mark Twain"],
        correctAnswer: "William Shakespeare",
      },
      {
        question: "What is the largest mammal in the world?",
        options: ["African Elephant", "Giraffe", "Blue Whale", "Lion"],
        correctAnswer: "Blue Whale",
      },
      {
        question: "Which gas makes up the majority of Earth's atmosphere?",
        options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
        correctAnswer: "Nitrogen",
      },
      
    ],
    []
  );

  const COUNTDOWN_DURATION = 12;

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [countdown, setCountdown] = useState(COUNTDOWN_DURATION);
  const [points, setPoints] = useState(0);
  const [quizRunning, setQuizRunning] = useState(true);
  const [quizFinished, setQuizFinished] = useState(false);
  const [incorrectResponses, setIncorrectResponses] = useState([]);
  const [isWaiting, setIsWaiting] = useState(false);
  const [questionAnswered, setQuestionAnswered] = useState(false);

  const stopQuiz = () => {
    setQuizRunning(false);
    // You can add any other logic you need when stopping the quiz here.
  };

  const resetQuiz = () => {
    setQuizRunning(true);
    setQuizFinished(false);
    setCurrentQuestionIndex(0);
    setPoints(0);
    setCountdown(COUNTDOWN_DURATION);
    setIncorrectResponses([]);
    resetAnswerStyles();
  };

  useEffect(() => {
    const countdownInterval = setInterval(() => {
      if (countdown > 0 && quizRunning && !isWaiting) {
        setCountdown(countdown - 1);
      } else if (quizRunning && !isWaiting) {
        clearInterval(countdownInterval);
        if (currentQuestionIndex < quizData.length - 1) {
          setCurrentQuestionIndex(currentQuestionIndex + 1);
          setCountdown(COUNTDOWN_DURATION);
          setQuestionAnswered(false);
          setIsWaiting(false);
          resetAnswerStyles();
        } else {
          setQuizRunning(false);
          setQuizFinished(true);
        }
      }
    }, 1000);

    return () => clearInterval(countdownInterval);
  }, [countdown, currentQuestionIndex, quizData, quizRunning, isWaiting]);

  const handleAnswerClick = (selectedOption) => {
    if (!quizRunning || quizFinished || isWaiting || questionAnswered) {
      return;
    }

    const currentQuestion = quizData[currentQuestionIndex];
    if (selectedOption === currentQuestion.correctAnswer) {
      setPoints(points + 10);
      setQuestionAnswered(true);
      setIsWaiting(true);

      document.getElementById(selectedOption).classList.add("correctAnswer");
    } else {
      setIncorrectResponses([
        ...incorrectResponses,
        {
          question: currentQuestion.question,
          selectedAnswer: selectedOption,
          correctAnswer: currentQuestion.correctAnswer,
        },
      ]);

      setQuestionAnswered(true);
      setIsWaiting(true);

      document.getElementById(selectedOption).classList.add("wrongAnswer");
    }

    setTimeout(() => {
      if (currentQuestionIndex < quizData.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setCountdown(COUNTDOWN_DURATION);
        setQuestionAnswered(false);
        setIsWaiting(false);
        resetAnswerStyles();
      } else {
        setQuizRunning(false);
        setQuizFinished(true);
      }
    }, 3000);
  };

  const currentQuestion = quizData[currentQuestionIndex];

  const [isUserProfileVisible, setIsUserProfileVisible] = useState(true);

  const toggleUserProfile = () => {
    setIsUserProfileVisible(!isUserProfileVisible);
  };

  const userProfileClass = `userProfile p-6 bg-white md:w-2/5 mb-7 mt-[60px] md:ml-auto rounded-md shadow-md ${
    isUserProfileVisible ? "animate-slide-in" : "animate-slide-out"
  }`;

  const resetAnswerStyles = () => {
    const answerElements = document.getElementsByClassName("answer");
    for (let i = 0; i < answerElements.length; i++) {
      answerElements[i].classList.remove("correctAnswer", "wrongAnswer");
    }
  };

  return (
    // main content 
    <main
      className="flex flex-col md:flex-row "
      style={{
        backgroundImage: `url(${props.backgroundImg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >    
    
     {/* Quiz content  */}
      <section className="quizContent text-white text-center p-1 rounded-md pt-2 md:w-5/5 bg-cover bg-center md:h-screen">
        <div className="counter flex justify-between mt-16">
          <div className="countNumber text-white flex items-center justify-center rounded-full bg-[black] w-14 h-14 md:w-20 md:h-20 font-bold text-xl md:text-2xl mt-2 md:mt-4 ml-4">
            {countdown}
          </div>
          <div className="pointsContainer">
            <span className="pointsNumber text-white flex items-center justify-center rounded-full bg-[black] w-14 h-14 md:w-20 md:h-20 font-bold text-xl md:text-2xl mt-2 md:mt-4 mr-4">
              {points}
            </span>
            <span className="pointsName font-extrabold text-black mr-4">
              Points
            </span>
          </div>
        </div>
        {quizRunning && !quizFinished && currentQuestion && (
          <div className="mt-8 md:mt-20">
            <h1 className={`${optStyle} ${questionStyle}`}>
              {currentQuestion.question}
            </h1>
            <div className="answerContainer">
              {currentQuestion.options.map((option, index) => (
                <span
                  key={index}
                  id={option}
                  className={`${optStyle} ${answerStyle} answer`}
                  onClick={() => handleAnswerClick(option)}
                >
                  {option}
                </span>
              ))}
            </div>
          </div>
        )}
        {!quizRunning && quizFinished && (
          <div className=" mt-8 md:ml-3 md:mt-20 flex justify-center items-center">
            <h1 className={`${optStyle} ${questionStyle}`}>Quiz Finished  Check Out Your Incorrect Responses Below And See Where You Can Improve.</h1>
          </div>
        )}
      </section>
       
       {/* user profile */}
      <section className={userProfileClass}>
        <div className="userProfileHeader ">
          <button
            className="bg-transparent border-none outline-none cursor-pointer"
            onClick={toggleUserProfile}
          >
            <FaBars className="text-blue-500 text-2xl" />
          </button>
        </div>
        <h1 className="userNickName text-xl md:text-2xl font-semibold mb-2">
          Player Name
        </h1>
        <div className="userStats">
          <p className="userPoints text-xl md:text-2xl font-semibold">
            Points: {points} <FaStar className="ml-2 text-yellow-400" />
          </p>
          <p className="userRank text-lg md:text-xl">
            Rank: 3rd <FaMedal className="ml-1 text-gray-500" />
          </p>
        </div>
        <div className="userButtons mt-7">
          <button
            className="bg-red-500 text-white px-4 py-2 rounded mr-2 hover:bg-red-600"
            onClick={stopQuiz}
          >
            <FaTimesCircle className="mr-1" /> Stop Quiz
          </button>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            onClick={resetQuiz}
          >
            <FaSyncAlt className="mr-1" /> Reset Quiz
          </button>
        </div>
        <div className="userProfileContent mt-8 text-sm md:text-base bg-[#dddcdc69]">
          <p className="mb-2">
            <FaUser className="text-blue-500 mr-2 mt" /> Welcome to the quiz game!
            Test your knowledge and earn points to climb the leaderboard.
          </p>
          <p className="mb-2">
            <FaUser className="text-blue-500 mr-2" /> Keep answering questions
            correctly to boost your rank and compete with other players.
          </p>
          <p className="mb-2">
            <FaUser className="text-blue-500 mr-2" /> Explore various categories
            and challenges to become a quiz champion.
          </p>
          <p>
            <FaUser className="text-blue-500 mr-2" /> Dont forget to share your
            achievements with friends and challenge them to beat your score!
          </p>
        </div>
        <div className="trackQuestions mb-7">
          <h2 className="text-lg md:text-xl font-semibold mb-2 mt-5">
            Incorrect Responses
          </h2>
          <ul className="bg-[#dddcdc69]">
            {incorrectResponses.map((item, index) => (
              <li key={index} className="mb-1">
                <p className="text-red-500 font-semibold">{item.question}:</p>
                <p>
                  Your Answer: {item.selectedAnswer}
                  <br />
                  Correct Answer: {item.correctAnswer}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
