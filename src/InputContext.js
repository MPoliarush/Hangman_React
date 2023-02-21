import React from "react";

const InputContext = React.createContext(
    {
        wordStatus:[],
        inputLetter:'',
        randomWord:'',
        wrongLetters:'',
      
    } 
)

export default InputContext
