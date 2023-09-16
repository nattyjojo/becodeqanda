import React from "react";
import Header from "../components/hearder/Header";
import Footer from "../components/footer/footer";

const About = () => {
  return (
    <main className="h-[100vh]">
      <Header
        link2={"/about"}
        content2={"ABOUT"}
        link1={"/joinquiz"}
        content1={"JOIN"}
      />
      <main className="text-center ">
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
      </main>
      <section></section>
      {/* Add more iframe sections if needed */}
      <Footer />
    </main>
  );
};

export default About;
