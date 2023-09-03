import data from "../data"
import Friend from "./Friend"
export default function FriendList(){
    return(<ul>
        {
        data.map(friend=><Friend friend ={friend} key={friend.id}/>)
        }
    </ul>)
}