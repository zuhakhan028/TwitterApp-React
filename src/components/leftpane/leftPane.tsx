import React, { Suspense } from "react";
import { ButtonData } from "../../Model";
import "./leftPane.css";
import InnerleftProfile from "./innerleftprofile/innerLeftProfile";
import InnerLeftPane from "./innerleftpane/innerLeftPane";
import { UserData } from "../../Model";

interface Props{
buttonIconList:ButtonData[]|undefined
loggedInUser:UserData|undefined
tweetButton:ButtonData|undefined
}


function LeftPane(props:Props){
    let buttonIconList:ButtonData[]|undefined=props.buttonIconList

    return (
        <div className="LeftPane">
          
            <InnerLeftPane buttonIcon={buttonIconList} tweetbuttonData={props.tweetButton}/>
            <InnerleftProfile loggedInUser={props.loggedInUser}/>
            
           
        </div>
    )
}

export default LeftPane