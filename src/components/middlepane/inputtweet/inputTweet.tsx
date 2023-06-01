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
 
    onClickTweet:(tweet:string)=>void  
 
}

function InputTweet(props: Props) {

    
    const [userTweet, setTweet]:any = useState()
  
    function onkeyupTweet(event: any) {
        setTweet(event.target.value)
       
    }
   
    function onSubmitClick() {
        props.onClickTweet(userTweet)
        setTweet("")
       
    }
 

    let isPrimary = false;
    return (
        <div className="inputTweetDiv">
            <div className="InputTweetInnerDiv">
                <img className="inputUserImg" src={`${props.loggedInUser?.imageData?.url}`}></img>
                <input className="inputTweet" type="text" placeholder="What's Happening?!" onChange={onkeyupTweet}  value={userTweet}/>
                
            </div>
            <div className="middleTweetButton">
                <TweetButton tweetButtonData={props?.tweetButton} isPrimary={isPrimary} onClickTweet={onSubmitClick} />
            </div>

        </div>
    )
}
export default InputTweet