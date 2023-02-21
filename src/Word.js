
import { useContext } from "react";
import InputContext from "./InputContext";


const Word =props=>{

const [gameArr,setGameArr]=useContext(InputContext)
console.log(gameArr)


const ulBasic = gameArr.wordStatus.map( wordStatusLetter => {
    return  wordStatusLetter? <li  className="word_li" key={Math.random()}> {wordStatusLetter} </li> 
                            : <li  className="word_li" key={Math.random()}>  </li> 
})


    return (
        <div className="word_wrapp">
            <ul className="word_ul">
            
                {ulBasic}

                {/* <li className="word_li">A</li>
                <li className="word_li">B</li>
                <li className="word_li">C</li>
                <li className="word_li">D</li> */}
            </ul>
        </div>
            
        
    )
}

export default Word