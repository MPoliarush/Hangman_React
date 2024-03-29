import { useContext,useEffect,useState } from "react"
import InputContext from "./InputContext";


const Alphabet = props =>{

const alphabetENG = [
    {
        letter:"A",
        id:0
    },
    {
        letter:"B",
        id:1
    },
    {
        letter:"C",
        id:2
    },
    {
        letter:"D",
        id:3
    },
    {
        letter:"E",
        id:4
    },
    {
        letter:"F",
        id:5
    },
    {
        letter:"G",
        id:6
    },
    {
        letter: "H",
        id:7
    },
    {
        letter:"I",
        id:8
    },
    {
        letter:"J",
        id:9
    },
    {
        letter:"K",
        id:10
    },
    {
        letter:"L",
        id:11
    },
    {
        letter:"M",
        id:12
    },
    {
        letter:"N",
        id:13
    },
    {
        letter:"O",
        id:14
    },
    {
        letter:"P",
        id:15
    },
    {
        letter:"Q",
        id:16
    },
    {
        letter:"R",
        id:17
    },
    {
        letter:"S",
        id:18
    },
    {
        letter:"T",
        id:19
    },
    {
        letter:"U",
        id:20
    },
    {
        letter:"V",
        id:21
    },
    {
        letter:"W",
        id:22
    },
    {
        letter:"X",
        id:23
    },
    {
        letter:"Y",
        id:24
    },
    {
        letter:"Z",
        id:25
    }
 
];

const alphabetUA = [
    {
        letter:"А",
        id:0
    },
    {
        letter:"Б",
        id:1
    },
    {
        letter:"В",
        id:2
    },
    {
        letter:"Г",
        id:3
    },
    {
        letter:"Д",
        id:4
    },
    {
        letter:"Е",
        id:5
    },
    {
        letter:"Є",
        id:6
    },
    {
        letter: "Ж",
        id:7
    },
    {
        letter:"З",
        id:8
    },
    {
        letter:"И",
        id:9
    },
    {
        letter:"І",
        id:10
    },
    {
        letter:"Ї",
        id:11
    },
    {
        letter:"Й",
        id:12
    },
    {
        letter:"К",
        id:13
    },
    {
        letter:"Л",
        id:14
    },
    {
        letter:"М",
        id:15
    },
    {
        letter:"Н",
        id:16
    },
    {
        letter:"О",
        id:17
    },
    {
        letter:"П",
        id:18
    },
    {
        letter:"Р",
        id:19
    },
    {
        letter:"С",
        id:20
    },
    {
        letter:"Т",
        id:21
    },
    {
        letter:"У",
        id:22
    },
    {
        letter:"Ф",
        id:23
    },
    {
        letter:"Х",
        id:24
    },
    {
        letter:"Ц",
        id:25
    },
    {
        letter:"Ч",
        id:26
    },
    {
        letter:"Ш",
        id:27
    },
    {
        letter:"Щ",
        id:28
    },
    {
        letter:"Ь",
        id:29
    },
    {
        letter:"Ю",
        id:30
    },
    {
        letter:"Я",
        id:31
    }
]

 
const [gameArr,setGameArr]=useContext(InputContext)
console.log(gameArr)

const [isValid,setIsValid]=useState('')

const letterClickHndler=(event)=>{
    console.log(event.currentTarget.textContent)

    gameArr.randomWord.map ( (lett,index) =>{
       

        if(lett==event.currentTarget.textContent.trim()){
            
            gameArr.wordStatus[index] = event.currentTarget.textContent.trim();
            console.log(gameArr.wordStatus) 
        }
         if (lett!==event.currentTarget.textContent.trim() && gameArr.randomWord.join('').includes(event.currentTarget.textContent.trim())==false ) {  
            
            gameArr.wrongLetters += event.currentTarget.textContent.trim() 
            console.log(gameArr.wrongLetters)  
        };
        gameArr.wrongLetters = [...new Set(gameArr.wrongLetters)].join("")

        
    })
  
    setGameArr({...gameArr, inputLetter: event.currentTarget.textContent, wrongLetters:[...new Set(gameArr.wrongLetters)].join("")})
    setIsValid(gameArr.wrongLetters)
}




    
 return (
    <ul className="alph_cont">
        {/* <div className="letter" onClick={letterClickHndler}>A</div>
        <div className="letter" onClick={letterClickHndler}>B</div>
        <div className="letter" onClick={letterClickHndler}>C</div>
        <div className="letter" onClick={letterClickHndler}>D</div>
        <div className="letter" onClick={letterClickHndler}>E</div>
        <div className="letter" onClick={letterClickHndler}>F</div>
        <div className="letter" onClick={letterClickHndler}>G</div>
        <div className="letter" onClick={letterClickHndler}>H</div>
        <div className="letter" onClick={letterClickHndler}>I</div>
        <div className="letter" onClick={letterClickHndler}>J</div>
        <div className="letter" onClick={letterClickHndler}>K</div>
        <div className="letter" onClick={letterClickHndler}>L</div>
        <div className="letter" onClick={letterClickHndler}>M</div>
        <div className="letter" onClick={letterClickHndler}>N</div>
        <div className="letter" onClick={letterClickHndler}>O</div>
        <div className="letter" onClick={letterClickHndler}>P</div>
        <div className="letter" onClick={letterClickHndler}>Q</div>
        <div className="letter" onClick={letterClickHndler}>R</div>
        <div className="letter" onClick={letterClickHndler}>S</div>
        <div className="letter" onClick={letterClickHndler}>T</div>
        <div className="letter" onClick={letterClickHndler}>U</div>
        <div className="letter" onClick={letterClickHndler}>V</div>
        <div className="letter" onClick={letterClickHndler}>W</div>
        <div className="letter" onClick={letterClickHndler}>X</div>
        <div className="letter" onClick={letterClickHndler}>Y</div>
        <div className="letter" onClick={letterClickHndler}>Z</div> */}
        {gameArr.lang=="ENG"? alphabetENG.map((item,index)=>{
            return <li key={index} className={isValid.includes(item.letter) ? 'letter invalid' : 'letter'} onClick={letterClickHndler}> {item.letter}</li>
        }) : alphabetUA.map((item,index)=>{
            return <li key={index} className={isValid.includes(item.letter) ? 'letter invalid' : 'letter'} onClick={letterClickHndler}> {item.letter}</li>
        })}

    </ul>
 )
}

export default Alphabet