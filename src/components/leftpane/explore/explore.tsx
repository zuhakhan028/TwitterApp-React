import { ButtonData } from "../../../Model"
import explore_ic from "../../../Images/explore.svg"
import "./explore.css"


interface Props{
    homeIcon:ButtonData[]|undefined
}

function Explore(props:Props):React.JSX.Element{
   
    return(
       
             <div className="icon-div">
            <a className="Home-icon">
                <img src={explore_ic} alt ="Home-Img"className="home-pane-icon"></img>
                <span className="Home-span">{props?.homeIcon?.[2].buttonText}</span>
                </a>
        </div>
       
        
        
    )
}
export default Explore