/* eslint-disable react/prop-types */
import { useState, useRef, useEffect } from "react";
export default function AnswerBtn(props) {
  const BtnBG = props.color;
  let [inputWrapperColor, setInputWrapperColor] = useState("white");
  const [answer, setAnswer] = useState("hidden");
  const checkAnswer = useRef(null);
  const checkInputRef = useRef(0);
  const InputState = props.InputState;
  const setInputState = props.setInputState;
  const [displaySelectAnswer, setDisplaySelectAnswer] = useState("hidden");
  const [bgColor, setbgColor] = useState("");
  const index = props.index;

  useEffect(() => {
    if (
      props.getAnswer === true &&
      checkAnswer.current.style.backgroundColor === "green"
    ) {
      props.finalAnswer(index);
      props.setGetAnswer(false);
    }
  }, [props.getAnswer]);

  useEffect(() => {
    if (
      InputState.length === 0 ||
      checkInputRef.current.value.length === 0 ||
      checkInputRef.current === "undefined"
    ) {
      checkInputRef.current.style.backgroundColor = "";
      setDisplaySelectAnswer("hiden");
      setInputWrapperColor("white");
      checkAnswer.current.style.backgroundColor = "";
      setbgColor("");
    } else {
      setbgColor("green");
      setDisplaySelectAnswer("visible");
    }
  }, [InputState, checkInputRef.current.value]);
  return (
    <div
      className="relative whitespace-nowrap m-[1rem] w-[90%] border-solid rounded inline-flex  px-2 py-3"
      style={{ backgroundColor: inputWrapperColor }}
    >
      <div
        className={`inline-block rounded-lg`}
        style={{ backgroundColor: BtnBG }}
      >
        <i className={`${props.fa} text-white px-[10px]  mt-[2rem]`} />
      </div>

      <div className="w-[100%]">
        <input
          type="text"
          ref={checkInputRef}
          required
          className="
          text-[#80808080]
          max-w-full
          w-[80%]
          h-[5rem]
          
          font-[bold]
           text-[20px]

                outline-none  
                text-center"
          placeholder={`Enter option ${props.option}`}
          onChange={(event) => {
            const inputValue = event.target.value;
            setInputState(inputValue);
            if (inputValue.length > 0) {
              Object.assign(event.target.style, {
                backgroundColor: BtnBG,
                color: "white",
              }) && answer !== "";
              setInputWrapperColor(BtnBG);
              props.setOptionValue(inputValue);
            } else {
              Object.assign(event.target.style, {
                backgroundColor: "",
                color: "",
              });
              setInputWrapperColor("white");
              props.setOptionValue();
            }
          }}
        />

        <i
          ref={checkAnswer}
          className={`text-white relative fa-regular fa-circle mt-5 fa-3x`}
          style={{ visibility: displaySelectAnswer }}
          onClick={() => {
            if (checkAnswer.current.style.backgroundColor === "green") {
              Object.assign(checkAnswer.current.style, {
                backgroundColor: "",
                borderRadius: "50%",
              });
            } else {
              InputState.length !== 0;
              Object.assign(checkAnswer.current.style, {
                backgroundColor: "green",
                borderRadius: "50%",
              });
            }
          }}
        >
          <i
            className={`fa-solid fa-check fa-1x  text-white absolute left-2 bottom-2 text-[2rem]`}
          ></i>
        </i>
      </div>
    </div>
  );
}
