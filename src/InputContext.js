import React from "react";

const InputContext = React.createContext(
    {
        wordStatus:[],
        inputLetter:'',
        randomWord:'',
        setinputLetter:()=>{}
    } 
)

export default InputContext
