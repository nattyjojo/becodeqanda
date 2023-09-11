const TimeLimitButton = (props)=>{
    return(
        <>
            <i className="fa-regular fa-clock mr-2"></i>
            <label htmlFor="timelimit">Time limit</label>
            <br />
            <select onChange={(event)=>props.set(event.target.value)} className="text-left text-[#3a6647] w-[90%] px-3 py-3 rounded text-lg" name="timelimit" id="">
                <option value="5">5 Seconds</option>
                <option value="10">10 Seconds</option>
                <option value="20">20 Seconds</option>
                <option value="30">30 Seconds</option>
                <option value="50">50 Seconds</option>
                <option value="1">1 Minutes</option>
                <option value="2">2 Minutes</option>
                <option value="3">3 Minutes</option>
                <option value="4">4 Minutes</option>
                <option value="5">5 Minutes</option>
            </select>
            <br />
        </>
    )
}
export default TimeLimitButton