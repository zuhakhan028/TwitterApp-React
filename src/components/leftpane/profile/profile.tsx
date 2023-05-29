import { ButtonData } from "../../../Model"
import profile_ic from "../../../Images/profile.svg"
import "./profile.css"


interface Props{
    homeIcon:ButtonData[]|undefined
}

function Profile(props:Props):React.JSX.Element{
   
    return(
       
             <div  className="icon-div">
            <a className="Home-icon">
                <img src={profile_ic} alt ="Home-Img"className="home-pane-icon"></img>
                <span className="Home-span">{props?.homeIcon?.[6].buttonText}</span>
                </a>
        </div>
       
        
        
    )
}
export default Profile