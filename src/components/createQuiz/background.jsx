const BackgroundImg = (props) => {
  const index = props.imageIndex;
  const setClickedImageBorder = props.setClickedImageBorder;
  const setBackgroundImg = props.setBackgroundImg;

  return (
    <img
      onClick={(event) => {
        setClickedImageBorder(index);
        setBackgroundImg(event.target.src);
      }}
      className={`rounded-full inline-block m-2 w-[4rem] h-[4rem]  border-2 `}
      style={{ borderColor: `${props.color}` }}
      src={props.src}
      alt="background"
    />
  );
};
export default BackgroundImg;
