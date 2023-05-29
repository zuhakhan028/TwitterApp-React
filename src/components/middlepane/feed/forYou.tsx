import { ButtonData } from "../../../Model"
import "./feed.css"
interface Props{
    navigationtabs:ButtonData|undefined
}
function ForYou(props:Props){
    let buttonText=props?.navigationtabs?.buttonText
   return(
    <div className="buttonText">
       {buttonText} 
    </div>
   )
}

export default ForYou