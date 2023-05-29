import menu_ic from "../../../Images/menu.svg"
import "./menu.css"
function Menu(){
    return(
        <div>
            <div className="menu_div">
                <img className="menu_div" src={menu_ic}></img>
            </div>
        </div>
    )
}
export default Menu