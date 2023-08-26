
export default function JoinQuiz(){
    return(
        <section className="bg-primary-color text-light-color leading-10 text-center rounded-[20%] inline-block mt-[10vh] ml-[40vw] ">
            <h1 className="font-extrabold">BecodeQandA</h1>
            <form className="px-[2rem] py-[5rem] " action="">
                <label className="font-extrabold" htmlFor="code">Enter Code</label>
                <br />
                <input className="text-center text-[#444343] font-semibold"  type="text" name="code" id="code" />
                <br />
                <br />
                <button className="bg-secondary-color px-5 py-2 mt-2 font-extrabold border rounded-lg hover:text-primary-color" type="submit">Submit</button>
            </form>
        </section>
    )
}