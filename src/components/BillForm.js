import { useState } from "react"
import Button from "./Button"
export default function BillForm({selectedFriend , handleValue}){
    const [bill , setBill] = useState(0);
    const [userValue , setUserValue] = useState(0)
    const [whoIsPaid , setWhoIsPaid]= useState("user");
    const friendExpence = bill ?(bill - userValue) :"";
    function handleSubmit(e){
        e.preventDefault();
        if(!userValue||!bill )return ;
        handleValue(whoIsPaid === "user" ? friendExpence : -friendExpence);
    }
    return (<div>
        <form action="" className="form-split-bill" onSubmit={handleSubmit}>
            <h2>Split Bill with {selectedFriend.name}</h2>
            <label htmlFor=""> 💰bill</label>
            <input type="text" value={bill} onChange={(e)=>setBill(Number(e.target.value))} />
            <label htmlFor=""> 😊your expence</label>
            <input type="text"  value={userValue}onChange={(e)=>setUserValue(Number(e.target.value)>bill ? userValue :Number(e.target.value))}  />
            <label htmlFor=""> 👭 {selectedFriend.name}'s expence</label>
            <input type="text" disabled value={friendExpence}/>
            <label htmlFor="">🤑 who is paying</label>
            <select name="" id="" onChange={(e)=>setWhoIsPaid(e.target.value)}>
                <option value="user"  >you</option>
                <option value="friend">{selectedFriend.name}</option>
            </select>
            <Button>Split Bill</Button>
        </form>
    </div>)
}