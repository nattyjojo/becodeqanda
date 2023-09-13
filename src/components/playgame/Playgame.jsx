import React, { useState, useEffect, useMemo } from "react";

export default function Playgame(props) {
  const optStyle =
    "m-2 px-5 py-3 md:px-40 md:py-5 inline-block solid rounded text-2xl md:text-5xl";
  const questionStyle = "bg-[green] text-white p-3 rounded  mb-20";
  const answerStyle = "bg-green-300 text-green-900 p-3 rounded cursor-pointer ";

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
        options: [
          "Atlantic Ocean",
          "Indian Ocean",
          "Arctic Ocean",
          "Pacific Ocean",
        ],
        correctAnswer: "Pacific Ocean",
      },
      {
        question: "Who painted the Mona Lisa?",
        options: [
          "Leonardo da Vinci",
          "Pablo Picasso",
          "Vincent van Gogh",
          "Michelangelo",
        ],
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
        options: [
          "William Shakespeare",
          "Charles Dickens",
          "Jane Austen",
          "Mark Twain",
        ],
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

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [countdown, setCountdown] = useState(12);
  const [points, setPoints] = useState(0);
  const [quizRunning, setQuizRunning] = useState(true);
  const [quizFinished, setQuizFinished] = useState(false);

  const stopQuiz = () => {
    setQuizRunning(false);
    // You can add any other logic you need when stopping the quiz here.
  };

  const resetQuiz = () => {
    setQuizRunning(true);
    setQuizFinished(false);
    setCurrentQuestionIndex(0);
    setPoints(0);
    setCountdown(12);
  };

  useEffect(() => {
    const countdownInterval = setInterval(() => {
      if (countdown > 0 && quizRunning) {
        setCountdown(countdown - 1);
      } else {
        clearInterval(countdownInterval);
        if (currentQuestionIndex < quizData.length - 1) {
          setCurrentQuestionIndex(currentQuestionIndex + 1);
          setCountdown(12);
        } else {
          setQuizRunning(false);
          setQuizFinished(true);
        }
      }
    }, 1000);

    return () => clearInterval(countdownInterval);
  }, [countdown, currentQuestionIndex, quizData, quizRunning]);

  const handleAnswerClick = (selectedOption) => {
    if (!quizRunning || quizFinished) {
      return; // Don't handle clicks if the quiz is not running or has finished.
    }

    const currentQuestion = quizData[currentQuestionIndex];
    if (selectedOption === currentQuestion.correctAnswer) {
      setPoints(points + 10);
    }

    if (currentQuestionIndex < quizData.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setCountdown(12);
    } else {
      setQuizRunning(false);
      setQuizFinished(true);
    }
  };

  const currentQuestion = quizData[currentQuestionIndex];

  return (
    <main className="flex flex-col md:flex-row flex-shrink-0">
      <section className="quizContent text-white text-center p-1 rounded-md pt-2 md:w-5/5 bg-cover bg-center md:h-screen">
        <div className="counter flex justify-between">
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
            <div className="flex flex-wrap justify-center">
              {currentQuestion.options.map((option, index) => (
                <span
                  key={index}
                  className={`${optStyle} ${answerStyle} mt-4 mx-2`}
                  onClick={() => handleAnswerClick(option)}
                >
                  {option}
                </span>
              ))}
            </div>
          </div>
        )}
        {!quizRunning && quizFinished && (
          <div className="mt-8 md:mt-20">
            <h1 className={`${optStyle} ${questionStyle}`}>Quiz Finished!</h1>
            {/* You can display the user's final score or any other post-quiz information here. */}
          </div>
        )}
      </section>

      <section className="userProfile p-6 bg-white md:w-2/5 mb-8">
        <h1 className="userNickName text-xl md:text-2xl">Player Name</h1>
        <p className="userPoints text-xl md:text-2xl">Points: {points}</p>
        <p className="userRank text-lg md:text-xl">Rank: 3rd</p>
        <p className="mt-4 text-sm md:text-base">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
          tincidunt, arcu a ultrices rhoncus, tortor tellus iaculis arcu, nec
          eleifend dolor orci vel ante. Quisque quis orci vel urna euismod
          tristique. Integer convallis elementum quam, et laoreet erat facilisis
          ut.
        </p>
        <div className="mt-4 ">
          {quizRunning && !quizFinished && (
            <button
              className="bg-red-500 text-white px-4 py-2 rounded mr-2"
              onClick={stopQuiz}
            >
              Stop Quiz
            </button>
          )}
          {!quizRunning && (
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
              onClick={resetQuiz}
            >
              Reset Quiz
            </button>
          )}
        </div>
      </section>
    </main>
  );
}
