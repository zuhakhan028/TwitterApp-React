import { HeaderData } from "../../../Model"
import "./middlepanehead.css"
interface Props{
    headerData:HeaderData|undefined
}
function MiddlePaneHeader(props:Props){

    return(
        <div className="middlePaneHeader">
           {props?.headerData?.title?.text}
        </div>
    )
}

export default MiddlePaneHeader