
import { useContext, useEffect, useState } from "react"
import InputContext from "./InputContext";

import body from './workingAssets/body.png'
import body1 from './workingAssets/body1.png'
import body2 from './workingAssets/body2.png'
import body3 from './workingAssets/body3.png'
import body4 from './workingAssets/body4.png'
import body5 from './workingAssets/body5.png'
import body6 from './workingAssets/body6.png'
import body7 from './workingAssets/body7.png'
import body8 from './workingAssets/body8.png'
import body9 from './workingAssets/body9.png'
import bodyFin from './workingAssets/bodyFin.png'

const Body= () =>{

    const [gameArr,setGameArr]=useContext(InputContext)  
    
    const[image,setImage]=useState(body)

    const images = [body,body1, body2,body3,body4,body5,body6,body7,body8,body9,bodyFin]

    console.log(gameArr)
    console.log(gameArr.wrongLetters)

    useEffect(()=>{
        if (gameArr.wrongLetters==undefined){
            console.log('wrong')
            return
        } else if (gameArr.wrongLetters.length>0){
            setImage(images[gameArr.wrongLetters.length])
            console.log(image)
        }
    
    },[gameArr,image])

   

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
              <img src={image}></img>
            </div>
        </div>
    )
}

export default Body