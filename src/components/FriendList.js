
import Friend from "./Friend"
export default function FriendList({friend , onSelection , selectFriend}){
   
    return(<ul>
        {
        friend.map(friend=><Friend friend ={friend} key={friend.id} handleSelection = {onSelection} selectFriend = {selectFriend}/>)
        }
    </ul>)
}