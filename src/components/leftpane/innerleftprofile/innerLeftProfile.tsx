import "./innerleftprofile.css"
import { UserData } from "../../../Model"
import bluetick_ic from "../../../Images/bluetick.svg"
interface Props{
    loggedInUser:UserData|undefined
}
function InnerleftProfile(props:Props){
    return(
        <div className="innerleftprofile_div">
            <img className="LeftPaneProfileImg"src={`${props?.loggedInUser?.imageData?.url}`}></img>
            <div className="userDetails">
            <div className="userName">
            {props?.loggedInUser?.userName}
            {/* {props?.loggedInUser?.blueTick} */}
            </div>
            <div className="userId">
           {`@${props?.loggedInUser?.userId}`}
            </div>
            </div>
            <div className="hamburger">...</div>
          
        </div>
    )
}

export default InnerleftProfile