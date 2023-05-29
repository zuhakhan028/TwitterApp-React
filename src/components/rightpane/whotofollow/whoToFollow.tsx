import * as React from "react"
import { TrendingListData } from "../../../Model"
import "./whoToFollow.css"
interface trendingData{
    trendingData:TrendingListData|undefined
}

function intToStr(num:any) {
    num = num.toString().replace(/[^0-9.]/g, '');
    if (num < 1000) {
        return num;
    }
    let si = [
      {v: 1E3, s: "K"},
      {v: 1E6, s: "M"},
      {v: 1E9, s: "B"},
      {v: 1E12, s: "T"},
      {v: 1E15, s: "P"},
      {v: 1E18, s: "E"}
      ];
    let index;
    for (index = si.length - 1; index > 0; index--) {
        if (num >= si[index].v) {
            break;
        }
    }
    return (num / si[index].v).toFixed(2).replace(/\.0+$|(\.[0-9]*[1-9])0+$/, "$1") + si[index].s;
};

function trends(trends:any){ 

    if(trends!=undefined){
        return(
            <div>
                {trends.map((eachTrend:any)=>{
                   if("country" in eachTrend){
                   return(
                    <div className="eachTrend">
                    <div className="trending">{`Trending in ${eachTrend.country}`}</div>
                    <div className="text">{`${eachTrend.text}`}</div>
                    <div className="trending">{`${intToStr(eachTrend.tweets)} Tweets`}</div>
                    </div>
                   )
                   }
                   else if("category" && "tweets" in eachTrend){
                    return(
                        <div className="eachTrend">
                       <div className="trending">{`${eachTrend.category}. Trending`}</div>
                        <div className="text">{`${eachTrend.text}`}</div>
                        <div className="trending">{`${intToStr(eachTrend.tweets)} Tweets`}</div>
                        </div>
                       )
                   }
                   else if("category" && "hashTags" in eachTrend){
                    return(
                        <div className="eachTrend">
                       <div className="trending">{`${eachTrend.category}. Trending`}</div>
                        <div className="text">{`${eachTrend.text}`}</div>
                        <div className="trending">Trending with <span className="Tags"> {eachTrend.hashTags?.map((eachTag:any)=>{
                            return(
                                eachTag
                            )
                        })}</span></div>
                        </div>
                       )
                   }

                })}
            </div>
        )
    }else{
        return(
            <div>
                loading
            </div>
        )
    }

}
function WhoToFollow(props:trendingData){
    return (
        <div className="WhoToFollow" key="whotofollow">
            <div className="title">{props.trendingData?.title}</div>
             <div>{trends(props?.trendingData?.trends)}</div>
             <div className="showmore">show more</div>
            
        </div>
    )
}
export default WhoToFollow