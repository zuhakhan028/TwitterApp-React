import { Console } from "console";
import { ButtonData } from "../../../Model"
import "./tweetbutton.css"
import { useEffect, useState } from "react"
import Tweets from "../../middlepane/tweets/tweets";

interface Props{
    tweetButtonData:ButtonData|undefined
    isPrimary:boolean;
    userTweet?:any;
 

}
function TweetButton(props:Props){
  
  let newTweet:any=props.userTweet
  let [tweet,setTweet]=useState()
  function readInput(event:any){
    setTweet(newTweet)
    event.preventDefault()
  }



    return (
        <div>
            <div className={props?.isPrimary?`tweetButton`:`secondarybutton`} onClick={readInput}>
                <a className={props?.isPrimary?`tweetAnchorTag`:`secondarytweetAnchorTag`}href={`${props?.tweetButtonData?.actionUrl}`} >
                      {props?.tweetButtonData?.buttonText}
                </a>
            </div>
        </div>
    )
}
export default TweetButton