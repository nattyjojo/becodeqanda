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
      <main className="text-center h-[30vh]">
        <h1 className=" mt-[20vh] font-semibold text-white text-[2rem]">
          Building a Collaborative Question and Answer App for
          <a
            href="https://becode.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Johnsons9 and Friends
          </a>
        </h1>
        <p className="  w-[50%] ml-[25%] mt-[10vh] font-semibold text-white text-3xl">
          In today's fast-paced digital world, collaborative learning and
          knowledge sharing have become essential for personal and professional
          growth. <br /> Becode Johnson9 and Friends, a dynamic group of
          enthusiastic learners, recognized the need for a platform that could
          facilitate their collective quest for knowledge. <br /> To meet this
          challenge, they embarked on an exciting journey to build a custom
          question and answer app designed specifically for their unique needs.
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
      <section></section>
      {/* Add more iframe sections if needed */}
      <Footer />
    </>
  );
};

export default About;
