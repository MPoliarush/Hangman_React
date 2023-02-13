import React from "react";

const InputContext = React.createContext(
    {
        wordStatus:[],
        inputLetter:'',
        randomWord:'',
        inputLetterHadler:()=>{}
    } 
)

export default InputContext
