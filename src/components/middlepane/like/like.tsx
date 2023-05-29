import like_ic from "../../../Images/heart.svg"
import { useState } from "react"
import "./like.css"


interface likes{
    likes:number;
}
function Like(props:likes){

const[liked,setLiked]=useState(false)
const [likes,setlikes]=useState(props.likes)


function likedfunction(){
    setLiked((oldvalue)=>!oldvalue)
}


function likeIncrement(){
    if(!liked){
        setlikes((likeone)=>likeone+1)
    }else{
        setlikes((likeone)=>likeone-1)
    }
   
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


    return(
        <div className="likeDiv"> 
        <img  className="likeIcon" alt="like_ic" onClick={()=> {likedfunction();likeIncrement()}}  src={like_ic}></img>
        <div className="likeCount"> {intToStr(likes)}</div>
        </div>
       
    )
}
export default Like