// ShowQuiz.js

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function ShowQuiz() {
  const [username, setUsername] = useState("");
  const [quizzes, setQuizzes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch quiz data from the API endpoint
    fetch("https://kahoutserver-production.up.railway.app/api/quizz/quizzlist")
      .then((response) => response.json())
      .then((data) => {
        console.log(data); 
        setUsername(data.username); 
        
        // API Quizes List
        setQuizzes(data.quizzes || []); 
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching quiz data:", error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen py-8">
      <div className="container mx-auto p-4 bg-white shadow-lg rounded-lg">
        <h1 className="text-3xl font-semibold mb-6">{username} Saved Quizzes</h1>
        {loading ? (
          <p>Loading...</p>
        ) : quizzes.length === 0 ? (
          <div className="text-xl">
            <p>No quizzes saved.</p>
            <Link to="/createquiz" className="text-blue-500 hover:underline inline-block mt-4">
              Create Quiz
            </Link>
          </div>
        ) : (
          <div>
            {quizzes.map((quiz) => (
              <div
                key={quiz.id}
                className="border border-gray-300 rounded p-4 mb-4 hover:shadow-md transition duration-300"
              >
                <p className="text-xl font-semibold">Quiz Name: {quiz.name}</p>
                <p className="text-blue-500 hover:underline">Link: {quiz.link}</p>
                <p>Code: {quiz.code}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default ShowQuiz;
