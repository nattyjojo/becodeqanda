import TimeLimitButton from "./timeLimitButton"
import PointsButton from "./pointsButton"
import BackgroundImg from "./background"

export default function Options(props){
    return(
        <>
        <div className="w-[20vw] text-white border-2">
            <TimeLimitButton />
            <PointsButton />
            <section className="p-[1rem]">
                <BackgroundImg  src={'https://cdn.pixabay.com/photo/2020/08/09/10/53/question-mark-5475172_960_720.jpg'}/>
                <BackgroundImg src={'https://cdn.pixabay.com/photo/2020/08/09/10/53/question-mark-5475172_960_720.jpg'}/>
                <BackgroundImg src={'https://cdn.pixabay.com/photo/2020/08/09/10/53/question-mark-5475172_960_720.jpg'}/>
                <BackgroundImg src={'https://cdn.pixabay.com/photo/2020/08/09/10/53/question-mark-5475172_960_720.jpg'}/>
                <BackgroundImg src={'https://cdn.pixabay.com/photo/2020/08/09/10/53/question-mark-5475172_960_720.jpg'}/>
                <BackgroundImg src={'https://cdn.pixabay.com/photo/2020/08/09/10/53/question-mark-5475172_960_720.jpg'}/>
                <BackgroundImg src={'https://cdn.pixabay.com/photo/2020/08/09/10/53/question-mark-5475172_960_720.jpg'}/>
                <BackgroundImg src={'https://cdn.pixabay.com/photo/2020/08/09/10/53/question-mark-5475172_960_720.jpg'}/>
                <BackgroundImg src={'https://cdn.pixabay.com/photo/2020/08/09/10/53/question-mark-5475172_960_720.jpg'}/>

            </section>
   
        <button className=" w-[90%] bg-secondary-color text-white py-2 rounded-md mt-3 hover:bg-button-color transition duration-300 ease-in-out">Add Quiz</button>
        <br />
      
        <button type="reset" className="  w-[90%] bg-secondary-color text-white py-2 rounded-md mt-3 mb-3 hover:bg-button-color transition duration-300 ease-in-out">Delete Quiz</button>
        </div>
        </>
    )
}