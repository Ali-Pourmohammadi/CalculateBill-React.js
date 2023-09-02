import Button from "./Button"
export default function Freind({friend}){
return (<li>
    <img src={friend.image}alt="" />
    <h3>{friend.name}</h3>
    {friend.balance>0 && <p className="green">{friend.name} owes you {friend.balance}</p>}
    {friend.balance<0 && <p className="red">{friend.name} owes you {friend.balance}</p>}
    {friend.balance===0 && <p className="">you and {friend.name} are even</p>}
    <Button>Select</Button>
</li>)
}