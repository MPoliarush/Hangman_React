import InputContext from "./InputContext";
import { useContext } from "react"

import body1 from './workingAssets/body1.png'

const Body= props=>{

    const images = [
        
    ]

    const {gameArr,setGameArr}=useContext(InputContext)   
    return (
        <div className="body-wrap">
            <div className='body'>
                {/* <div className="gallows_bottom"></div>
                <div className="gallows_main"></div>
                <div className="gallows_last"></div>
                <div className="body_head"></div>
                <div className="body_main"></div>
                <div className="body_leftArm"></div>
                <div className="body_rightArm"></div>
                <div className="body_leftLeg"></div>
                <div className="body_rightLeg"></div> */}
                <img src={body1}></img>
            </div>
        </div>
    )
}

export default Body