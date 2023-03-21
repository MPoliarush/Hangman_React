import { useState,useContext } from "react";

import {ENG, UA} from './assets'

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
    wrongLetters:'',
    lang:'ENG'
  } 
)

  

  function startHandler(lang){
    setButtonClicked(true)

    if(gameArr.lang!=="UA"){
      let random = Math.floor(Math.random()*ENG.length)
      gameArr.randomWord = ENG[random]
      let arrNew = new Array( ENG[random].length)
      const wordSt = arrNew.fill('')
      console.log(wordSt)
      setGameArr({...gameArr, wordStatus: wordSt ,randomWord:ENG[random]})
    } 
    
    if(gameArr.lang=="UA") {
      console.log('logged!!!!!!!!!!!!!!')
      let random = Math.floor(Math.random()*UA.length)
      gameArr.randomWord = UA[random]
      let arrNew = new Array( UA[random].length)
      const wordSt = arrNew.fill('')
      console.log(wordSt)
      setGameArr({...gameArr, wordStatus: wordSt ,randomWord:UA[random]})
      console.log(gameArr)
    }
    
  }


  function langHandler(){
    const isChecked = document.querySelector('.toggle-checkbox').checked
    console.log(isChecked)

    if(isChecked){
      setGameArr({...gameArr, lang:"UA"})
    } 
  }



  return (
   
    <div className="page_wrapper">
      {/* <Modal> */}

       <Header></Header>
      <InputContext.Provider value={[gameArr,setGameArr]}>
        {IsButtonClicked ? <div>
          <Main></Main>
          <Word></Word>

          <FinalMessage></FinalMessage>
        </div> 
        : <div><button onClick={startHandler}>START GAME</button> 
          <label className="toggle">
          <span className="toggle-label">ENG</span>
          <input className="toggle-checkbox" type="checkbox" onClick={langHandler} />
          <div className="toggle-switch"></div>
          <span className="toggle-label">UA</span>
        </label> 
        </div>
        }
      </InputContext.Provider>

      {/* </Modal> */}
    </div>
     
      
   
     
  );
}

export default App;
