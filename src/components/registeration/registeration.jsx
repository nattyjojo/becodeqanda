const Registeration = () => {
    return (
      <>
        <h1 className="formTitle">BcodeQandA</h1>
        <form className="">
          <label>Username</label>
          <br></br>
          <input type="text" id="" name=""></input>
          <br></br>
          <label>Password </label>
          <br></br>
          <input type="password"></input>
          <br></br>
  
          <input className="formBtn" type="submit" value="submit"></input>
        </form>
      </>
    );
  };
  export default Registeration;
  

  form{
    text-align: center;
    line-height: 1.5rem;
    background-color: var(--secondary-color);
    display: inline-block;
    margin-left: 40%;
    padding: 2rem;
    border-radius: 2rem;
}
.formTitle{
    text-align: center;
}
.formBtn{
    background-color: var(--primary-color);
    color: var(--light-color);
    padding: .5rem 1rem;
    border-radius: 1rem;
    margin-top: 1rem;
