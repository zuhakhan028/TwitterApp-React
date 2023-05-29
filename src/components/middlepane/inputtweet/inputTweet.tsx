import { SyntheticEvent } from "react"
import { ButtonData, TrendingListData, UserData } from "../../../Model"
import TweetButton from "../../leftpane/button/tweetButton"
import { useState } from "react"
import "./inputtweet.css"
import { TweetData } from "../../../Model"
import TweetThreads from "../tweetThreads"
import NewTweet from "../newUser"
interface Props {
    loggedInUser: UserData | undefined
    tweetButton: ButtonData | undefined
    readInput?:string
    tweetThreads: TweetData[][] | undefined
    onkeyupTweet:any
    onClickTweet:any
    userTweet:string
    setTweet:any
   
 
}

function InputTweet(props: Props) {
 

    let isPrimary = false;
    return (
        <div className="inputTweetDiv">
            <div className="InputTweetInnerDiv">
                <img className="inputUserImg" src={`${props.loggedInUser?.imageData?.url}`}></img>
                <input className="inputTweet" type="text" placeholder="What's Happening?!" onKeyUp={props.onkeyupTweet}  onChange={()=>{props.setTweet(props.userTweet )}}/>
                
            </div>
            <div className="middleTweetButton" onClick={props.onkeyupTweet}>
                <TweetButton tweetButtonData={props?.tweetButton} isPrimary={isPrimary} userTweet={props.onClickTweet} />
            </div>

        </div>
    )
}
export default InputTweet