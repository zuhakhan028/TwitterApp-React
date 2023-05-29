import { ButtonData } from "../../../Model"
import home_ic from "../../../Images/home.svg"
import "./home.css"
interface Props{
    homeIcon:ButtonData[]|undefined
}

function Home(props:Props):React.JSX.Element{
   
    return(
       
        <div className="icon-div">
            <a className="Home-icon">
                <img src={home_ic} alt ="Home-Img"className="home-pane-icon"></img>
                <span className="Home-span">{props?.homeIcon?.[1].buttonText}</span>
            </a>
        </div>
       
        
        
    )
}
export default Home