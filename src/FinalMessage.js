import { useContext,useEffect,useState } from "react"
import InputContext from "./InputContext";


const FinalMessage = props=>{
    const [gameArr,setGameArr]=useContext(InputContext)
    console.log(gameArr)

    const [modalActive,setModalActive] = useState(false)
    const [isCorrect,setCorect] = useState(false)


    useEffect(()=>{
        if (gameArr.wrongLetters==undefined){
            console.log('wrong')
            return
        } else if (gameArr.wrongLetters.length>9){
            setModalActive(true)
        } else if (gameArr.randomWord.join('')==gameArr.wordStatus.join('')){
            setModalActive(true)
            setCorect(true)
        }
    
    },[gameArr])

    const restartHandler =()=>{
        window.location.reload()
    }

    return (
    <div>
            {modalActive && isCorrect==false ? <div className="final_message">
            <div className='final_message_content'>{}
            <p className='fin_text'>The word was <span className="finWord">{gameArr.randomWord.join('')}</span></p>
            <button className="modal_button" onClick={restartHandler}>Try again</button>
            </div> 
            </div>: 
            modalActive && isCorrect==true ? <div className="final_message">
            <div className='final_message_content'>{}
            <p className='fin_text'>You win!</p>
            <button className="modal_button" onClick={restartHandler}>Restart</button>
            </div> 
            </div> : ''
            }
    </div>
       
        
        
    )
}

export default FinalMessage