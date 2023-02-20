
import { useContext } from "react";
import InputContext from "./InputContext";


const Word =props=>{

const [gameArr,setGameArr]=useContext(InputContext)
console.log(gameArr)

// const ul = gameArr.randomWord.map( (randomWordLetter,index) =>{
//     console.log(randomWordLetter)

//     if( gameArr.inputLetter==''){
//         console.log('logged 1')
//         return (<li  className="word_li" key={Math.random()}>   </li>)
//     } else if (gameArr.inputLetter==randomWordLetter){
//         gameArr.wordStatus[index]=gameArr.inputLetter;
//         console.log('logged 2')
//         return ( 
//             gameArr.wordStatus.map( (wordStatusItem)=>{
//                 return ( wordStatusItem ? <li  className="word_li" key={Math.random()}> {wordStatusItem} </li> : <li  className="word_li" key={Math.random()}>   </li>)
//             })  
//         )
//     }

// })



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