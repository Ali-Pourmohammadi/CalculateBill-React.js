import Button from "./Button"
import data from "../data"
import FriendList from "./FriendList"
import BillForm from "./BillForm"
import AddFriendList from "./AddFriendForm"
import { useState } from "react"
export default function App(){
    const [isOpen , setIsOpen] = useState(false);
    const [friend , setFriend] = useState(data);
    function hanldAddFriend(friend){
        setFriend(friends=>[...friends , friend])
    }
    function handlIsOpen(){
        setIsOpen(isOpen=>!isOpen);
    }
  return(<div className="app">
    <div className="sidebar">
        <FriendList friend ={friend}/>
        {isOpen &&<AddFriendList onAddFriend = {hanldAddFriend}/>}
        <Button onOpen = {handlIsOpen}>{isOpen ? "Close" : "Add SomeOne"}</Button>
    </div>
    <BillForm/>

  </div>)
}