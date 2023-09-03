import Button from "./Button"
export default function Friend({friend , handleSelection , selectFriend}){
    const isSelected = selectFriend?.id === friend.id
   const  {name , image , balance} = friend
    return(<li className={isSelected ? "selected":""}>
        <img src={image} alt="" />
        <h3> {name}</h3>
       {balance > 0&& <p className="green">{name} owe you {balance}$</p>}
       {balance < 0&& <p className="red">you owe {name} {balance}$</p>}
       {balance === 0&& <p className="">you and {name} are even</p>}
       <Button onClick = {()=> handleSelection(friend)}>{isSelected ? "Close":"Select"}</Button>
    </li>);
}