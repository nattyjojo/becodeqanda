export default function AddedQuizList(){
    return(
        <>
        <section className="w-[20vw] border-2">
            <div className="flex">
                <div className=" flex flex-col justify-around bg-secondary-color p-1 m-2 mr-0 text-lg text-center">
                <i className=" inline text-center text-white border rounded-full font-extrabold">1</i>

                <i className="  text-center text-white border  rounded-full font-extrabold">5s</i>
                <i className="  text-center text-white border rounded-full font-extrabold">10p</i>

                </div>
                
            <div className="w-100% bg-white border-solid border-[2px] border-secondary-color border-l-0 m-2 ml-0 text-black whitespace-nowrap">
                <h6 className="m-4">memmemmem</h6>
                <div className="flex justify-center font-thin text-xs mt-4">
                   <div className="">
                            <span className="p-1  border-[2px] border-solid">Lorem, ipsum dolor.</span>
                            <br />
                            <br />
                            <span className="p-1  border-[2px] border-solid">Lorem, ipsum dolor.</span>
                   </div>
                   <div className=" ml-4 mb-5">
                            <span className="p-1  border-[2px] border-solid">Lorem, ipsum dolor.</span>
                            <br />
                            <br />
                            <span className="p-1  border-[2px] border-solid">Lorem, ipsum dolor.</span>
                   </div>
                </div>
                <button type="reset" className="w-[30%] bg-secondary-color text-white py-2 rounded-md mt-3 mb-3  hover:bg-button-color transition duration-300 ease-in-out">Edit</button>
                <button type="reset" className="w-[30%] bg-button-color text-white py-2 rounded-md mt-3 mb-3 ml-2 hover:bg-secondary-color transition duration-300 ease-in-out">Delete</button>


            </div>
            </div>
            


        <button className=" w-[90%] bg-secondary-color text-white py-2 rounded-md mt-3 hover:bg-button-color transition duration-300 ease-in-out">Save Quiz</button>
        <br />
        <button type="reset" className="w-[90%] bg-secondary-color text-white py-2 rounded-md mt-3 mb-3 hover:bg-button-color transition duration-300 ease-in-out">Delete All</button>
        </section>
        </>
    )
}