import { ButtonData } from "../../../Model"
import bookmark_ic from "../../../Images/bookmark.svg"
import "./bookmark.css"

interface Props{
    homeIcon:ButtonData[]|undefined
}

function BookMark(props:Props):React.JSX.Element{
   
    return(
       
             <div  className="icon-div">
            <a className="Home-icon">
                <img src={bookmark_ic} alt ="Home-Img"className="home-pane-icon"></img>
                <span className="Home-span">{props?.homeIcon?.[5].buttonText}</span>
                </a>
        </div>
       
        
        
    )
}
export default BookMark