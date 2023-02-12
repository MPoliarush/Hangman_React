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
  const ctx = useContext(InputContext)
  const [randomWord, setRandomWord] = useState(ctx)

  

  function startHandler(){
    setButtonClicked(true)
    let random = Math.floor(Math.random()*words.length)
    console.log(random)
    ctx.randomWord=words[random]
    setRandomWord({...ctx, randomWord:words[random]})
  }

  return (
   
    <div>
      {/* <Modal> */}

       {/* <FinalMessage></FinalMessage> */}
       <Header></Header>
      <InputContext.Provider value={{randomWord}}>
        {IsButtonClicked ? <div>
          <Main></Main>
          <Word randomChoosedWord={ctx.randomWord}></Word>
        </div> : <button onClick={startHandler}>START GAME</button>
        }
      </InputContext.Provider>

      {/* </Modal> */}
    </div>
     
      
   
     
  );
}

export default App;
