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
    function handleValue(value){
        // console.log(value);
        setFriend(friend=>friend.map(friend=>friend.id === selectFriend.id ? {...friend , balance : friend.balance + value}:friend));
        setSelectFriend(null);

    }

  return(<div className="app">
    <div className="sidebar">
        <FriendList friend ={friend} onSelection = {handleSelection} selectFriend ={selectFriend}/>
        {isOpen &&<AddFriendList onAddFriend = {hanldAddFriend}/>}
        <Button onClick = {handlIsOpen}>{isOpen ? "Close" : "Add SomeOne"}</Button>
    </div>
    {selectFriend&&<BillForm handleValue = {handleValue} selectedFriend ={selectFriend}/>}
  </div>)
}