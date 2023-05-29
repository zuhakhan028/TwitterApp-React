import React, { Suspense } from "react";
import { ButtonData } from "../../../Model";
import Home from "../home/Home";
import Menu from "../menu/menu";
import BookMark from "../bookmark/bookmark";
import Explore from "../explore/explore";
import Notification from "../notification/notification";
import Message from "../message/message";
import Profile from "../profile/profile";
import TweetButton from "../button/tweetButton";
import "./innerLeftPane.css"
interface Props{
    buttonIcon:ButtonData[]|undefined
    tweetbuttonData:ButtonData|undefined

}

function InnerLeftPane(props:Props){
    let isPrimary=true;
    let buttonData:ButtonData[]|undefined=props.buttonIcon

    return (
        <div className="InnerLeftPane">
            <Menu/>
            <Home homeIcon={buttonData}/>
            <Explore homeIcon={buttonData}/>
            <Notification homeIcon={buttonData}/>
            <Message homeIcon={buttonData}/>
            <BookMark homeIcon={buttonData}/>
            <Profile homeIcon={buttonData}/> 
            <TweetButton tweetButtonData={props.tweetbuttonData} isPrimary={isPrimary} />
        </div>
    )
}

export default InnerLeftPane