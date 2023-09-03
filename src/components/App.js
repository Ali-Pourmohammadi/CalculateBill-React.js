import Button from "./Button"
import data from "../data"
import FriendList from "./FriendList"
import BillForm from "./BillForm"
import AddFriendList from "./AddFriendForm"
import { useState } from "react"
export default function App(){
    const [isOpen , setIsOpen] = useState(false);
    const [friend , setFriend] = useState(data);
    const [selectFriend , setSelectFriend] = useState(null);
    // const [current , ]
    function hanldAddFriend(friend){
        setFriend(friends=>[...friends , friend])
    }
    function handlIsOpen(){
        setIsOpen(isOpen=>!isOpen);
    }
    function handleSelection(friend){
        setSelectFriend(selectFriend=> selectFriend?.id === friend.id ? null : friend);
    }

  return(<div className="app">
    <div className="sidebar">
        <FriendList friend ={friend} onSelection = {handleSelection} selectFriend ={selectFriend}/>
        {isOpen &&<AddFriendList onAddFriend = {hanldAddFriend}/>}
        <Button onClick = {handlIsOpen}>{isOpen ? "Close" : "Add SomeOne"}</Button>
    </div>
    {selectFriend&&<BillForm selectedFriend ={selectFriend}/>}
  </div>)
}