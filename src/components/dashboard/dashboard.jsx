import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faSignIn, faEye } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import validateToken from "../login/middleWares/handleRegisteredUsers";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const validate = validateToken();
  if (validate) {
    return (
      <section className="text-light-color flex flex-col items-center justify-center min-h-[80vh] px-4">
        <h1 className="md:text-5xl text-2xl font-main font-bold text-light-color mb-4">
          Welcome To Quiz Dashboard
        </h1>
        <p className="mb-7 text-center text-[16px] text-light-color md:text-2xl">
          Manage your quizzes easily. You can create new quizzes, join existing
          ones,
          <br /> and view the quizzes you have participated in.
        </p>
        <div className="space-y-4 w-full max-w-lg">
          <Link
            to="/createquiz"
            className="px-6 font-bold md:px-8 py-4 bg-primary-color text-white rounded-lg hover:bg-button-color transition duration-300 block text-center"
            style={{ textDecoration: "none" }}
          >
            <FontAwesomeIcon icon={faPlus} className="mr-3" />
            Create Quiz
          </Link>
          <Link
            to="/joinquiz"
            className="px-6 font-bold md:px-8 py-4 bg-primary-color text-white rounded-lg hover:bg-button-color transition duration-300 block text-center"
            style={{ textDecoration: "none" }}
          >
            <FontAwesomeIcon icon={faSignIn} className="mr-3" />
            Join Quiz
          </Link>
          <a
            href="#"
            className="px-6 font-bold md:px-8 py-4 bg-primary-color text-white rounded-lg hover:bg-button-color transition duration-300 block text-center"
            style={{ textDecoration: "none" }}
          >
            <FontAwesomeIcon icon={faEye} className="mr-3" />
            Show Quiz
          </a>
        </div>
      </section>
    );
  } else {
    const navigate = useNavigate();
    return navigate("/register");
  }
}
