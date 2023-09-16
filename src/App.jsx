import "./App.css";
import { Route, Routes } from "react-router-dom";
import RegisterationPage from "./pages/registeration";
import LoginPage from "./pages/login";
import DashboardPage from "./pages/dashBoard";
import Homepage from "./components/homepage/homepage.html";
import JoinQuizPage from "./pages/joinquiz";
import CreateQuizPage from "./pages/creatquiz";
import Livegame from "./pages/playgame";
import ShowQuizPage from "./pages/ShowQuizPage";
import About from "./pages/about";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/home" element={<Homepage />} />
        <Route path="/register" element={<RegisterationPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/joinquiz" element={<JoinQuizPage />} />
        <Route path="/createquiz" element={<CreateQuizPage />} />
        <Route path="/playgame" element={<Livegame />} />
        <Route path="/profile" element={<ShowQuizPage />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Homepage />} />
      </Routes>
    </>
  );
}

export default App;
