import React from "react";
import Header from "../components/hearder/Header";
import Footer from "../components/footer/footer";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <Header
        link2={"/about"}
        content2={"ABOUT"}
        link1={"/joinquiz"}
        content1={"JOIN"}
      />
      <main className=" mt-[15vh] h-[20vh] absolute top-[5px] flex justify-center  w-[100vw]">
        <main className="text-center">
          <h1 className="font-semibold text-white mb-10 text-[35px]">
            Building a Collaborative Question and Answer <br />
            App for Johnsons9 and Friends
          </h1>
          <p className=" text-center font-semibold text-white ">
            In today's fast-paced digital world, <br /> collaborative learning
            and knowledge sharing have become essential for personal and
            professional growth. <br /> Becode Johnson9 and Friends, a dynamic
            group of enthusiastic learners, <br /> recognized the need for a
            platform that could facilitate their collective quest for knowledge.{" "}
            <br /> To meet this challenge, <br /> they embarked on an exciting
            journey to build a custom question and answer app designed
            specifically for their unique needs.
          </p>

          <div className="space-4  flex justify-center gap-4 ">
            <Link
              to="/register"
              className="font-bold cursor-pointer bg-transparent  border-teal-400 border-2 text-light-color mt-5  px-8 py-4 rounded-md  hover:bg-button-color  transition duration-300 ease-in-out"
            >
              Register
            </Link>
            <Link
              to="/login"
              className="cursor-pointer font-bold bg-transparent border-2 border-teal-400 text-light-color mt-5 px-8 py-4 rounded-md hover:bg-button-color transition duration-300 ease-in-out "
            >
              Login
            </Link>
          </div>
        </main>
      </main>
      <Footer />
    </>
  );
};

export default About;
