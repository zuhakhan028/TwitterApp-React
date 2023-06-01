import { ButtonData, HeaderData } from "../../../Model"
import ForYou from "./forYou"
import "./feed.css"
interface Props{
    headerData:HeaderData|undefined
}
function Feed(props:Props){
    let navigationtabs:any=props?.headerData?.navigationTabs
   
    return(
        <div className="feed">
            <div className="border-blue">
              
                <ForYou navigationtabs={navigationtabs?.[0]} />
             
          
            </div>
          
           <ForYou navigationtabs={navigationtabs?.[1]}/>
        </div>
    )
}
export default Feed