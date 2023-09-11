const PointsButton = (props) => {
    return(
        <>
                <br />
                <i className="fa-solid fa-trophy mr-2"></i>
                <label htmlFor="points">Points</label>
                <br />
                <select onChange={(event)=> props.set(event.target.value)}
                className="
                    text-left 
                    text-[#3a6647] 
                    px-3 py-3 w-[90%] 
                    rounded text-lg" 
                    name="timelimit" 
                    id="">
                    <option value="5" >5 Points</option>
                    <option value="10">10 Points</option>
                    <option value="15">15 Points</option>
                    <option value="20">20 Points</option>
                    <option value="25">25 Points</option>
                    <option value="30">30 Points</option>
                    <option value="35">35 Points</option>
                    <option value="40">40 Points</option>
                    <option value="45">45 Points</option>
                    <option value="50">50 Points</option>
                </select>
                <br />
        </>
    )
}
export default PointsButton