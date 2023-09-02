import Friend from "./Friend"

export default function FriendList({friends}){
    // const friends = data;
return(<ul>
{friends.map(friend=> < Friend friend = {friend} key={friend.id}/>)}
</ul>)
}