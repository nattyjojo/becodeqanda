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
      className="relative m-[1rem] rounded inline-flex px-2 py-3"
      style={{ backgroundColor: inputWrapperColor }}
    >
      <div
        className={`inline-block rounded-lg`}
        style={{ backgroundColor: BtnBG }}
      >
        <i className={`${props.fa} text-white px-[10px] mt-[2rem]`} />
      </div>

      <div>
        <input
          type="text"
          ref={checkInputRef}
          required
          className="
                py-[2rem] text-b outline-none  
                text-center mr-1"
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
          className={`text-white fa-regular fa-circle mt-7 ml-10 fa-3x mr-2 relative`}
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
            className={`fa-solid fa-check fa-1x absolute left-2 text-white bottom-2 text-[2rem]`}
          ></i>
        </i>
      </div>
    </div>
  );
}
