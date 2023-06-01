import { Console } from "console";
import { ButtonData } from "../../../Model"
import "./tweetbutton.css"
import { useEffect, useState } from "react"
import Tweets from "../../middlepane/tweets/tweets";

interface Props{
    tweetButtonData:ButtonData|undefined
    isPrimary:boolean;
    onClickTweet?:()=>void
 

}
function TweetButton(props:Props){
  

    return (
        <div>
            <div className={props?.isPrimary?`tweetButton`:`secondarybutton`} onClick={props.onClickTweet}>
                <div className={props?.isPrimary?`tweetAnchorTag`:`secondarytweetAnchorTag`} >
                      {props?.tweetButtonData?.buttonText}
                </div>
            </div>
        </div>
    )
}
export default TweetButton