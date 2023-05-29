import { ButtonData } from "../../../Model"
import notification_ic from "../../../Images/notification.svg"
import "./notification.css"


interface Props{
    homeIcon:ButtonData[]|undefined
}

function Notification(props:Props):React.JSX.Element{
   
    return(
       
             <div  className="icon-div">
            <a className="Home-icon">
                <img src={notification_ic} alt ="Home-Img"className="home-pane-icon"></img>
                <span className="Home-span">{props?.homeIcon?.[3].buttonText}</span>
                </a>
        </div>
       
        
        
    )
}
export default Notification