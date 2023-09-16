import Header from "../components/hearder/Header";
import Dashboard from "../components/dashboard/dashboard";
import Footer from "../components/footer/footer";
import { useState } from "react";

import validateToken from "../components/login/middleWares/handleRegisteredUsers";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function DashboardPage() {
  const [userIsValid, setUserIsValid] = useState();
  const token = Cookies.get("authToken");
  const navigate = useNavigate();

  useEffect(() => {
    if (token === undefined) {
      navigate("/");
    } else {
      const hasToken = async (ttoken, ssetUserIsValid) => {
        try {
          await validateToken(ttoken, ssetUserIsValid);
        } catch (err) {
          navigate("/");
        }
      };
      hasToken(token, setUserIsValid);
    }
  });

  if (userIsValid === 200) {
    return (
      <main className="100vh">
        <Header
          link2={"/about"}
          content2={"ABOUT"}
          link1={"/joinquiz"}
          content1={"JOIN"}
        />
        <Dashboard />
        <Footer />
      </main>
    );
  }
}
