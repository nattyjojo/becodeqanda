const Registeration = ({title}) => {
    return (
      
     <section className="flex justify-around mt-[15vh]">
       <main className="bg-primary-color text-light-color leading-10 text-center rounded-[20%] inline-block">
      <h1 className="font-bold">{title}</h1>
        <form className="px-[3rem] py-[3rem]">
          <label className="font-meduim" htmlFor="username">Username</label>
          <br></br>
          <input className="text-center text-[#444343] font-semibold" type="text" id="username" name="username" placeholder="Enter Username"></input>
          <br></br>
          <label htmlFor="password">Password </label>
          <br></br> 
          <input className="text-center text-[#444343] font-semibold" name="password" id="password" type="password" placeholder="Enter Password"></input>
          <br></br>
          <input className="bg-secondary-color px-5 py-2 mt-2 font-extrabold border rounded-lg hover:text-primary-color" type="submit" value="Submit"></input>
        </form>
      </main>
     </section>
    );
  };
  export default Registeration;
  

 