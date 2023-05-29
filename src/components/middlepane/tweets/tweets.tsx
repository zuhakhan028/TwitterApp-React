import "./tweets.css"
import { TweetData } from "../../../Model"
import Like from "../like/like"
import Comments from "../comment/comment"
import ReTweet from "../retweet/retweet"
import Share from "../share/share"
import TweetThreads from "../tweetThreads"
interface Props {
    tweetThreads: TweetData[][] | undefined
 
}


function Tweets(props: Props) {


    const threads: TweetData[][] | undefined = props.tweetThreads;
     
  

    function TweetDiv() {
        if (threads !== undefined) {
            return (
                <div>{
                    threads.map((user,index) => {
                        if (user.length > 1) {
                            return (
                                <div className="retweet" key={index}>
                                    {user?.map((eachUser,index) => {
                                      
                                        return (
                                            <div key={index}>
                                                <div className="userDetailDivMiddlePane">
                                                    <img className="retweetDivImg" alt={eachUser?.user?.imageData.alt} src={eachUser?.user?.imageData.url}></img>
                                                    <div>
                                                        <div className="userDetailsMiddlePane">
                                                            <div className="userNameMiddlePane">{eachUser.user.userName}</div>
                                                            <div className="userIdMiddlePane">{`@${eachUser.user.userId}`}</div>
                                                            <div className="userIdMiddlePane">{`. ${new Date(eachUser.tweetTime).getHours()}hr`}</div>
                                                        </div>
                                                        <div className="tweetTextArea">
                                                            {eachUser.textArea}
                                                        </div>

                                                    </div>

                                                </div>
                                                <div className="metrics">
                                                    <Comments comments={eachUser.replies} />
                                                    <Like likes={eachUser.likes} />
                                                    <ReTweet retweet={eachUser.reTweets} />
                                                    <Share share={eachUser.views} />
                                                </div>
                                            </div>

                                        )
                                    })}
                                </div>

                            )
                        }
                        else {
                            return (
                                <div>
                                    
                                </div>
                            )
                        }

                    })
                }

                </div>

            )
        } else {
            return (
                <div>undefined</div>
            )
        }
    }
    return (
        <div className="tweets">
            <TweetDiv />
        </div>
    )
}
export default Tweets