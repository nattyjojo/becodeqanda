import Playgame from "./Playgame";

const quizData = useMemo(
    (porps) => [
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

  export default quizData