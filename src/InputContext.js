import React from "react";

const InputContext = React.createContext(
    {
        wordStatus:[],
        inputLetter:'',
        randomWord:'',
        inputLetterHadler:()=>{},
        wrongLetters:''
    } 
)

export default InputContext
