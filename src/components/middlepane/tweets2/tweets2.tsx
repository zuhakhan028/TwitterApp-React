import { TweetData } from "../../../Model"
import Like from "../like/like"
import Comments from "../comment/comment"
import ReTweet from "../retweet/retweet"
import Share from "../share/share"
import TweetThreads from "../tweetThreads"
import "./tweets2.css"

interface Props {
    tweetThreads: TweetData[][] | undefined

}


function Tweets2(props: Props) {


    const threads: TweetData[][] | undefined = props.tweetThreads;
    


    function TweetDiv() {
        if (threads !== undefined) {
            return (
                <div className="maintweet">{
                    threads&&threads.map((user, index) => {
                        if (user.length > 1) {
                            {console.log(user)}
                                return (
                                    
                                    <div className="subTweetDiv" >
                                        <div className="userDetailDivMiddlePane" key={`${user[0].id}`}>
                                            <img className="retweetDivImg" src={user[0].user.imageData.url}></img>
                                            <div>
                                                <div className="userDetailsMiddlePane">
                                                    <div className="userNameMiddlePane">{user[0].user.userName}</div>
                                                    <div className="userIdMiddlePane">{`@${user[0].user.userId}`}</div>
                                                    <div className="userIdMiddlePane">{`. ${new Date(user[0].tweetTime).getHours()}hr`}</div>
                                                </div>
                                                <div className="tweetTextArea">
                                                    {user[0]?.textArea}
                                                </div>

                                            </div>

                                        </div>
                                        <div className="metrics">
                                            <Comments comments={user[0]?.replies} />
                                            <Like likes={user[0]?.likes} />
                                            <ReTweet retweet={user[0]?.reTweets} />
                                            <Share share={user[0]?.views} />
                                        </div>
                                        <hr className="verical_hr"></hr>                                                                                    
                                        <div className="userDetailDivMiddlePane" key={`${user[1].id}`}>
                                            <img className="retweetDivImg2" src={user[1]?.user?.imageData?.url}></img>
                                            <div>
                                                <div className="userDetailsMiddlePane">
                                                    <div className="userNameMiddlePane">{user[1]?.user.userName}</div>
                                                    <div className="userIdMiddlePane">{`@${user[1]?.user.userId}`}</div>
                                                    <div className="userIdMiddlePane">{`. ${new Date(user[1]?.tweetTime).getHours()}hr`}</div>
                                                </div>
                                                <div className="replyingTo">Replying to <span className="replyingBlue">{`@${user[0]?.user?.userId}`}</span></div>
                                                <div className="tweetTextArea">
                                                    {user[1]?.textArea}
                                                </div>

                                            </div>

                                        </div>
                                        <div className="metrics">
                                            <Comments comments={user[1]?.replies} />
                                            <Like likes={user[1]?.likes} />
                                            <ReTweet retweet={user[1]?.reTweets} />
                                            <Share share={user[1]?.views} />
                                        </div>
                                        
                                    </div>
                                )
                                }
                        if(user.length<2) {
                            return (
                                <div className="newTweet" key={`${user[1].id}`}>
                                    <div className="userDetailDivMiddlePane">
                                            <img className="retweetDivImg" src={user[0]?.user?.imageData?.url}></img>
                                            <div>
                                                <div className="userDetailsMiddlePane">
                                                    <div className="userNameMiddlePane">{user[0]?.user.userName}</div>
                                                    <div className="userIdMiddlePane">{`@${user[0]?.user.userId}`}</div>
                                                    <div className="userIdMiddlePane">{`. ${new Date(user[0]?.tweetTime).getHours()}hr`}</div>
                                                </div>
                                                <div className="tweetTextArea">
                                                    {user[0]?.textArea}
                                                </div>

                                            </div>

                                        </div>  
                                        <div className="metrics">
                                            <Comments comments={user[0]?.replies} />
                                            <Like likes={user[0]?.likes} />
                                            <ReTweet retweet={user[0]?.reTweets} />
                                            <Share share={user[0]?.views} />
                                        </div>
                                       
                                      
                                </div>
                            )
                        }

                    })
                }

                </div>

            )
        } else {
            return (
              <div></div>
            )
        }
    }
    return (
        <div className="tweets">
            <TweetDiv />
        </div>
    )
}
export default Tweets2