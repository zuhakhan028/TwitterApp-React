import retweet_ic from "../../../Images/retweet.svg"
import "./retweet.css"
interface retweet{
    retweet:number
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







function ReTweet(props:retweet){
    return(
        <div className="retweetDiv">
           
          <  img src={retweet_ic} alt="" className="retweetIcon"/>
         <div className="retweetCount">{intToStr(props.retweet)}</div> 
        </div>
    )
}

export default ReTweet