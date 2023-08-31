
export default function Question(props){
    console.log(props.color)
    return(
        
        <div className="relative mt-44 ml-44 bg-white rounded inline-flex px-3 py-3" >
           <div className={`inline-block bg-${props.color} border rounded-lg`}>

            <i className="fa-solid fa-caret-up fa-3x text-white px-[10px] mt-[2rem]" />

            </div>
            
            <div>
            <input type="text" name="" id="" className="py-[2rem] text-b outline-none  text-center mr-1" placeholder={`Enter option ${props.option}` }/>
            <i className={`fa-regular fa-circle text-${props.color} mt-7 ml-10 fa-3x mr-2 relative`}><i className="fa-solid fa-check fa-1x absolute left-2 text-[green] bottom-2 text-[2rem]"></i></i>
            </div>
        </div>
    )
}
