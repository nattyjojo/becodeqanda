import { text } from "@fortawesome/fontawesome-svg-core";

const ShowAddedTem = (props) => {
  const defaultBackgroundImage =
    "https://www.codefear.com/wp-content/content/2013/07/qa.jpg";
  const defaultTimeLimit = 5;
  const defaultPoints = 5;
  return (
    <main>
      <div className="flex justify-center">
        <div className="flex w-[20%] flex-col justify-around bg-secondary-color p-1 m-2 mr-0 text-lg text-center">
          <i className=" inline text-center text-white border rounded-full font-extrabold">
            {`${props.index + 1}`}
          </i>

          <i className=" text-center text-white border  rounded-full font-extrabold">
            {`${[
              props.timeLimit === undefined
                ? defaultTimeLimit
                : props.timeLimit,
            ]}`}
            s
          </i>
          <i className="  text-center text-white border rounded-full font-extrabold">
            {`${[props.points === undefined ? defaultPoints : props.points]}`}p
          </i>
        </div>

        <div
          style={{
            backgroundImage: `url(${[
              props.backgroundImg === undefined
                ? defaultBackgroundImage
                : props.backgroundImg,
            ]})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
          className="w-80% min-w-[70%]  bg-white border-solid border-[2px] border-secondary-color border-l-0 m-2 ml-0 text-black whitespace-nowrap"
        >
          <h6 className="m-4 overflow-hidden bg-white rounded-full ml-10 w-[150px]">{`${props.question}`}</h6>
          <div className="flex justify-center font-thin text-xs mt-4">
            <div className="">
              <span
                style={{
                  backgroundColor: `${[
                    props.answer.includes(0)
                      ? "rgb(16, 107, 3)"
                      : "rgb(198, 9, 41)",
                  ]}`,
                }}
                className="p-1 text-white font-bold rounded-full inline-block w-[100px] min-w-[100px] overflow-hidden border-[2px] border-solid"
              >
                {`${props.option1}`}
              </span>
              <br />
              <br />
              <span
                style={{
                  backgroundColor: `${[
                    props.answer.includes(2)
                      ? "rgb(16, 107, 3)"
                      : "rgb(245, 162, 61)",
                  ]}`,
                }}
                className="p-1 text-white font-bold  rounded-full inline-block w-[100px] min-w-[100px] overflow-hidden  border-[2px] border-solid"
              >
                {`${props.option3}`}
              </span>
            </div>
            <div className=" ml-4 mb-5">
              <span
                style={{
                  backgroundColor: `${[
                    props.answer.includes(1)
                      ? "rgb(16, 107, 3)"
                      : "rgb(5, 66, 185)",
                  ]}`,
                }}
                className="p-1  text-white font-bold  rounded-full inline-block w-[100px] min-w-[100px] overflow-hidden border-[2px] border-solid"
              >
                {`${props.option2}`}
              </span>
              <br />
              <br />
              <span
                style={{
                  backgroundColor: `${[
                    props.answer.includes(3) ? "rgb(16, 107, 3)" : "purple",
                  ]}`,
                }}
                className="p-1 text-white font-bold  rounded-full inline-block w-[100px] min-w-[100px] overflow-hidden border-[2px] border-solid"
              >
                {`${props.option4}`}
              </span>
            </div>
          </div>
          <button
            onClick={() => props.SaveDeleteAllQuiz("save")}
            className="w-[30%] bg-secondary-color text-white py-2 rounded-md mb-2  hover:bg-button-color transition duration-300 ease-in-out"
          >
            Delete
          </button>
        </div>
      </div>
    </main>
  );
};
export default ShowAddedTem;
