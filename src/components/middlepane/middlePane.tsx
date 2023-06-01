import React, { Suspense, useEffect } from "react";
import { ButtonData, PageResponse, TweetData, UserData } from "../../Model";
import "./middlepane.css"
import MiddlePaneHead from "./middlepaneheader/middlePaneHead";
import { HeaderData } from "../../Model";
import Feed from "./feed/feed";
import InputTweet from "./inputtweet/inputTweet";
import Tweets from "./tweets/tweets";
import Tweets2 from "./tweets2/tweets2";
import NewTweet from "./newUser";
import { useState } from "react";

interface Props {
    data: PageResponse | undefined,
    loggedInUser: UserData | undefined,
    tweetButton: ButtonData | undefined
}


function MiddlePane(props: Props) {

    const headerData: HeaderData | undefined = props.data?.headerData;
    const loggedInUser: UserData | undefined = props?.loggedInUser
    const tweetThreads: TweetData[][] | undefined = props?.data?.tweetThreads
   
    const [updatedTweetThreads,setUpdatedTweetThreads]:any=useState(tweetThreads)
   
function onClickTweet(tweet:string){
    updatedTweetThreads.unshift(NewTweet(tweet))
  
        setUpdatedTweetThreads([...updatedTweetThreads])   
}
    

  

    return (
    
        <div className="middlePane">
            
            <MiddlePaneHead headerData={headerData} />
            <Feed headerData={headerData} />
            <InputTweet loggedInUser={loggedInUser} tweetButton={props?.tweetButton}  onClickTweet={onClickTweet}/>
            <Tweets2 tweetThreads={updatedTweetThreads} />
           
        </div>
      
    )
}

export default MiddlePane