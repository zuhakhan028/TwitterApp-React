import React from "react";
import "./rightPane.css"
import InnerRightPane from "./innerrighhtpane/innerRightPane";

import { FollowData, TrendingListData } from "../../Model";

interface trendingData{
    trendingData:TrendingListData|undefined
    followData:FollowData|undefined
}
function RightPane(props:trendingData){
    return (
        <div className="rightPane" key="rightPane">
       <InnerRightPane  trendingData={props.trendingData} followData={props.followData}/>
        </div>
    )
}

export default RightPane