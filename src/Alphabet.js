import { useContext,useState } from "react"
import InputContext from "./InputContext";


const Alphabet = props =>{
 
const [gameArr,setGameArr]=useContext(InputContext)
console.log(gameArr)

const letterClickHndler=(event)=>{
    console.log(event.currentTarget.textContent)
    gameArr.inputLetter = event.currentTarget.textContent
    setGameArr({...gameArr, inputLetter: event.currentTarget.textContent})
}


    
 return (
    <div className="alph_cont">
        <div className="letter" onClick={letterClickHndler}>A</div>
        <div className="letter" onClick={letterClickHndler}>B</div>
        <div className="letter" onClick={letterClickHndler}>C</div>
        <div className="letter" onClick={letterClickHndler}>D</div>
        <div className="letter" onClick={letterClickHndler}>E</div>
        <div className="letter" onClick={letterClickHndler}>F</div>
        <div className="letter" onClick={letterClickHndler}>G</div>
        <div className="letter" onClick={letterClickHndler}>H</div>
        <div className="letter" onClick={letterClickHndler}>I</div>
        <div className="letter" onClick={letterClickHndler}>J</div>
        <div className="letter" onClick={letterClickHndler}>K</div>
        <div className="letter" onClick={letterClickHndler}>L</div>
        <div className="letter" onClick={letterClickHndler}>M</div>
        <div className="letter" onClick={letterClickHndler}>N</div>
        <div className="letter" onClick={letterClickHndler}>O</div>
        <div className="letter" onClick={letterClickHndler}>P</div>
        <div className="letter" onClick={letterClickHndler}>Q</div>
        <div className="letter" onClick={letterClickHndler}>R</div>
        <div className="letter" onClick={letterClickHndler}>S</div>
        <div className="letter" onClick={letterClickHndler}>T</div>
        <div className="letter" onClick={letterClickHndler}>U</div>
        <div className="letter" onClick={letterClickHndler}>V</div>
        <div className="letter" onClick={letterClickHndler}>W</div>
        <div className="letter" onClick={letterClickHndler}>X</div>
        <div className="letter" onClick={letterClickHndler}>Y</div>
        <div className="letter" onClick={letterClickHndler}>Z</div>

    </div>
 )
}

export default Alphabet