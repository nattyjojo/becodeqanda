import React, { useState, useEffect, useMemo } from "react";
import { FaUser, FaStar, FaTimesCircle, FaSyncAlt ,FaBars, FaMedal } from "react-icons/fa";
import "./Playgame.css";


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
      // ... (other quiz questions)
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

  const [isUserProfileVisible, setIsUserProfileVisible] = useState(true);

  // Function to toggle the visibility of the user profile
  const toggleUserProfile = () => {
    setIsUserProfileVisible(!isUserProfileVisible);
  };

  // CSS class for the user profile section with animations
  const userProfileClass = `userProfile p-6 bg-white md:w-2/5 mb-8 md:ml-auto rounded-md shadow-md ${
    isUserProfileVisible ? "animate-slide-in" : "animate-slide-out"
  }`;

  return (
    <main className="flex flex-col md:flex-row flex-shrink-0"
    style={{
      backgroundImage: `url(${props.backgroundImg})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover'
    }}
  >
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

      <section className={userProfileClass}>
  <div className="userProfileHeader mb-4">
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
  <div className="userButtons mt-4">
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
  <div className="userProfileContent mt-4 text-sm md:text-base">
    <p className="mb-2">
      <FaUser className="text-blue-500 mr-2" /> Welcome to the quiz game! Test your knowledge and earn points to climb the leaderboard.
    </p>
    <p className="mb-2">
      <FaUser className="text-blue-500 mr-2" /> Keep answering questions correctly to boost your rank and compete with other players.
    </p>
    <p className="mb-2">
      <FaUser className="text-blue-500 mr-2" /> Explore various categories and challenges to become a quiz champion.
    </p>
    <p>
      <FaUser className="text-blue-500 mr-2" /> Don't forget to share your achievements with friends and challenge them to beat your score!
    </p>
  </div>
</section>
    </main>
  );
}
