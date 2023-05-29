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
    console.log(tweetThreads);
   

    const [userTweet, setTweet]:any = useState()
    const [updateTweet,setUpdateTweet]:any=useState()
  
    function onkeyupTweet(event: any) {
        setTweet(event.target.value)
    }
   
    function onSubmitClick() {
        if(tweetThreads !=undefined && userTweet){
            setUpdateTweet(tweetThreads.unshift(NewTweet(userTweet)))
            setTweet("")
            console.log(updateTweet);
        }
       
    }
    
    
  

    return (
        <Suspense fallback={<div className="middleSuspense">Loading...</div>}>
        <div className="middlePane">
            
            <MiddlePaneHead headerData={headerData} />
            <Feed headerData={headerData} />
            <InputTweet loggedInUser={loggedInUser} tweetButton={props?.tweetButton} tweetThreads={tweetThreads} onkeyupTweet={onkeyupTweet} onClickTweet={onSubmitClick} userTweet={userTweet} setTweet={setTweet} />
            <Tweets2 tweetThreads={tweetThreads} />
           
        </div>
        </Suspense>
    )
}

export default MiddlePane