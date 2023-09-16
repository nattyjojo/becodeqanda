export default function QuestionInput(props) {
  return (
    <textarea
      placeholder="Type Your Question Here!"
      name="question"
      id="question"
      type="text"
      required
      rows="4"
      className="
    rounded-full
    text-center
    resize-none
    text-[#80808080]
    max-w-full
    w-[60%]
    mb-5
    font-[bold]
    overflow-hidden
    text-black
    text-[20px]
    py-5
    
    
  "
      onChange={(event) => props.setQuestion(event.target.value)}
    ></textarea>
  );
}
// sm:w-96
