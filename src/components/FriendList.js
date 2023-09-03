
import Friend from "./Friend"
export default function FriendList({friend}){
   
    return(<ul>
        {
        friend.map(friend=><Friend friend ={friend} key={friend.id}/>)
        }
    </ul>)
}