
import { useContext } from "react";
import InputContext from "./InputContext";


const Word =props=>{


const ctx=useContext(InputContext)

let randomWord=props.randomChoosedWord;
console.log(randomWord)


const ul = randomWord.map( randomWordLetter =>{
    console.log(randomWordLetter)
    return (<li  className="word_li" key={Math.random()}>   </li>)
})

    return (
        <div className="word_wrapp">
            <ul className="word_ul">
                {ul}

                {/* <li className="word_li">A</li>
                <li className="word_li">B</li>
                <li className="word_li">C</li>
                <li className="word_li">D</li> */}
            </ul>
        </div>
            
        
    )
}

export default Word