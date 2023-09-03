import Button from "./Button"
import FriendList from "./FriendList"
import BillForm from "./BillForm"
import AddFriendList from "./AddFriendForm"
import { useState } from "react"
export default function App(){
    const [isOpen , setIsOpen] = useState(false);
    function handlIsOpen(){
        setIsOpen(isOpen=>!isOpen);
    }
  return(<div className="app">
    <div className="sidebar">
        <FriendList/>
        {isOpen &&<AddFriendList/>}
        <Button onOpen = {handlIsOpen}>{isOpen ? "Close" : "Add SomeOne"}</Button>
    </div>
    <BillForm/>

  </div>)
}