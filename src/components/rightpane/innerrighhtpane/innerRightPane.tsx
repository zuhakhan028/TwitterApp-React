import SearchBar from "../searchbar/searchBar"
import "./innerRightPane.css"
import WhoToFollow from "../whotofollow/whoToFollow"
import Catogery from "../whotofollow/whoToFollow"
import { FollowData, TrendingListData } from "../../../Model"
import TrendingData from "../trendingData/trendingData"


interface innerrighhtpane{
    trendingData:TrendingListData|undefined
    followData:FollowData|undefined
}
function InnerRightPane(props:innerrighhtpane) {
    return (
        <div className="innerRightPane" key="innerrightPane">
        <SearchBar/>
        <WhoToFollow trendingData={props.trendingData}/>
        <TrendingData followData={props.followData}/>
        </div>
    )
}

export default InnerRightPane