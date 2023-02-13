import { useState,useContext } from "react";

import words from './assets'

import Header from "./Header";
import Modal from "./Modal";
import FinalMessage from "./FinalMessage";
import Main from './Main'
import Word from "./Word";
import InputProvider from "./InputProvider";
import InputContext from "./InputContext";


function App() {
 

  const [IsButtonClicked, setButtonClicked] = useState(false)
 
  const [gameArr, setGameArr] = useState({
    wordStatus:[],
    inputLetter:'',
    randomWord:'',
    inputLetterHadler:()=>{}
  } 
)

  function inputLetterHadler(){

  }
  

  function startHandler(){
    setButtonClicked(true)
    let random = Math.floor(Math.random()*words.length)
    gameArr.randomWord = words[random]
    let arrNew = new Array( words[random].length)
    const wordSt = arrNew.fill('')
    console.log(wordSt)
    setGameArr({...gameArr, wordStatus: wordSt ,randomWord:words[random]})
  }

  return (
   
    <div>
      {/* <Modal> */}

       {/* <FinalMessage></FinalMessage> */}
       <Header></Header>
      <InputContext.Provider value={[gameArr,setGameArr]}>
        {IsButtonClicked ? <div>
          <Main></Main>
          <Word></Word>
        </div> : <button onClick={startHandler}>START GAME</button>
        }
      </InputContext.Provider>

      {/* </Modal> */}
    </div>
     
      
   
     
  );
}

export default App;
