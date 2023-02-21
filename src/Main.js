import Alphabet from "./Alphabet";
import Body from './Body'
import { useContext } from "react"
import InputContext from "./InputContext";

const Main =props=>{
  const [gameArr,setGameArr]=useContext(InputContext)
  console.log(gameArr)

 return(
    <div className="main-wrap">
      <Alphabet></Alphabet>
      <Body></Body>
    </div>
 )
}

export default Main