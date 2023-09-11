import { useState, useRef, useEffect } from "react"
export default function AnswerBtn(props){
    const BtnBG = props.color
    let [inputWrapperColor, setInputWrapperColor] = useState("white")
    const [answer, setAnswer] = useState("hidden")
    const checkAnswer = useRef(null)
    return(
        
        <div className="relative m-[1rem] rounded inline-flex px-2 py-3" style={{backgroundColor:inputWrapperColor}}>

                    <div className={`inline-block rounded-lg`} style={{backgroundColor: BtnBG}}>

                        <i className={`${props.fa} text-white px-[10px] mt-[2rem]`} />

                        </div>

            <div>

            <input type="text"
                required
                className="
                py-[2rem] text-b outline-none  
                text-center mr-1"
                placeholder={`Enter option ${props.option}` }
                onChange={(event)=> {
                    const inputValue = event.target.value
                    if(inputValue.length > 0){  
                        Object.assign(event.target.style, {
                            backgroundColor: BtnBG,
                            color: 'white',
                            
                        })&& answer !== ''
                        setInputWrapperColor(BtnBG)
                        props.setOptionValue(inputValue)
                        
                    }else{
                        Object.assign(event.target.style, {
                            backgroundColor: '',
                            color: '',
                            
                        })
                        setInputWrapperColor('white')
                        props.setOptionValue()
                    }
                    }
                }
                    
            />

            <i ref={checkAnswer} className={`text-white fa-regular fa-circle mt-7 ml-10 fa-3x mr-2 relative`} 
            onClick={()=>{
                if(inputWrapperColor !== 'white' && answer === 'hidden'){
                    setAnswer('')
                    if(checkAnswer.current){
                        Object.assign(checkAnswer.current.style,{
                            backgroundColor: 'green',
                            borderRadius: '50%',
                        })
                    }
                    

                }else{
                    setAnswer("hidden")
                    checkAnswer.current.style.backgroundColor=''

                }  
                
            }
        }
                
                
            
                
            >
                <i className={`fa-solid fa-check fa-1x absolute left-2 text-white bottom-2 text-[2rem] ${answer}`}></i>

            </i>
            </div>
        </div> 
    )
}
