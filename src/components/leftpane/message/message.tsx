import { ButtonData } from "../../../Model"
import message_ic from "../../../Images/message.svg"
import "./message.css"


interface Props{
    homeIcon:ButtonData[]|undefined
}

function Message(props:Props):React.JSX.Element{
   
    return(
       
             <div  className="icon-div">
            <a className="Home-icon">
                <img src={message_ic} alt ="Home-Img"className="home-pane-icon"></img>
                <span className="Home-span">{props?.homeIcon?.[4].buttonText}</span>
                </a>
        </div>
       
        
        
    )
}
export default Message