import FriendList from "./FriendList"
import  data from "../data"
import AddFriendForm from "./AddFriendForm"
import BillForm from "./BillForm"
import Button from "./Button"
import { useState } from "react"
export default function App(){
  const [isoepn , setOpen] = useState(false);
  const [friends , setFriends] = useState(data);
function handleAddFriend(friend){
  setFriends([...friends , friend])
}
  function handleSetOpen(){
    setOpen(isoepn=>!isoepn);
  }
  return(<div className="app">
    <div className="sidebar">
      <FriendList friends = {friends}/>
      {isoepn&&<AddFriendForm AddFriend = {handleAddFriend}/>}

       <Button onClick = {handleSetOpen}>{isoepn ? "Close" : "Add Friend"}</Button>
    </div>
    <BillForm/>

  </div>)
}