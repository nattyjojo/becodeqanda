import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./WaitingGame.css"; // Import your CSS file for styling

export default function WaitingGame() {
  const navigate = useNavigate();

  const [countdown, setCountdown] = useState(5); // 5 seconds countdown
  const [gameStarted, setGameStarted] = useState(false);

  useEffect(() => {
    if (gameStarted) {
      const countdownInterval = setInterval(() => {
        if (countdown > 0) {
          setCountdown(countdown - 1);
        } else {
          clearInterval(countdownInterval);
          // Redirect to the Playgame page after countdown is over
          navigate("/playgame");
        }
      }, 1000);

      return () => clearInterval(countdownInterval);
    }
  }, [countdown, gameStarted, navigate]);

  const handleStartGame = () => {
    // Start the game and initiate the countdown
    setGameStarted(true);
  };

  return (
    <div className="waiting-game-container h-screen flex flex-col items-center text-white justify-center">
      <h1 className="game-title">Welcome to the Waiting Game</h1>
      {!gameStarted && (
        <button className="font-bold cursor-pointer bg-transparent  border-teal-400 border-2 text-light-color mt-5  px-8 py-4 rounded-md  hover:bg-button-color  transition duration-300 ease-in-out" onClick={handleStartGame}>
          Start Game
        </button>
      )}
      {gameStarted && (
        <div className="countdown">
          <p>
            {countdown > 0
              ? `Starting in ${countdown} seconds`
              : "Redirecting to the game..."}
          </p>
        </div>
      )}

      {/* Additional Content */}
      <div className="additional-content">
        <p className="instruction">
          Instructions: Get ready to test your knowledge!
        </p>
        <ul className="features">
          <li>Challenge your friends in this exciting quiz game.</li>
          <li>Answer questions to earn points and climb the leaderboard.</li>
          <li>Explore various categories and become a quiz champion.</li>
          <li>Share your achievements and challenge others to beat your score.</li>
        </ul>
      </div>
    </div>
  );
}
