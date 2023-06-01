import { useState } from "react";
import { ButtonData } from "../../../Model"
import "./feed.css"
interface Props{
    navigationtabs:ButtonData|undefined
}
function ForYou(props:Props){
    let buttonText=props?.navigationtabs?.buttonText;


    
   return(
    <div className={props?.navigationtabs?.buttonText=="For You"?"underline":"buttonText"}>
       {buttonText} 
    </div>
   )
}

export default ForYou