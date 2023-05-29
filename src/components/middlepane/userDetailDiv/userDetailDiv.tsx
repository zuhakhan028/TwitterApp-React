import { UserData } from "../../../Model"
import "./userDetailsDiv.css"
interface eachfollower {
    eachfollower: UserData | undefined

}
function UserDetailsDiv(props: eachfollower) {
    return (
        <div className="innerrightprofile_div">
            <img className="LeftPaneProfileImg"src={`${props?.eachfollower?.imageData?.url}`}></img>
            <div className="userDetails">
            <div className="userName">
            {props?.eachfollower?.userName}
            {/* {props?.loggedInUser?.blueTick} */}
            </div>
            <div className="userId">
           {`@${props?.eachfollower?.userId}`}
            </div>
            </div>  
        </div>
    )
}
export default UserDetailsDiv