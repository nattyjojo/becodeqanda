export default function QuestionInput(props) {
  return (
    <input
      className="
        w-[45%] py-[1rem] 
        rounded text-center"
      onChange={(event) => props.setQuestion(event.target.value)}
      type="text"
      name="question"
      id="question"
      placeholder="Type Your Question Here!"
      required
    />
  );
}
