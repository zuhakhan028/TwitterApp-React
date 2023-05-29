import { FollowData } from "../../../Model"
import UserDetailsDiv from "../../middlepane/userDetailDiv/userDetailDiv"
import InnerTrendingDiv from "../innertrendingdiv/innerTrendingDiv"
import "./trendingData.css"
import FollowButton from "../followbutton/followButton"
interface followData {
    followData: FollowData | undefined
}
function TrendingData(props: followData) {
    return (
        <div className="trendingData">
            <div className="whoToFollow">{props.followData?.title}</div>
            {
                props?.followData?.usersToFollow?.map((eachfollow,idx) => {
                    return (
                        <div key={idx}className="followSuggestion">
                            <UserDetailsDiv eachfollower={eachfollow} />
                            <FollowButton />
                        </div>
                    )
                })
            }
            <div className="showmore">show more</div>
        </div>
    )
}
export default TrendingData