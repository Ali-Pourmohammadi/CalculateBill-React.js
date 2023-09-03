import Button from "./Button"
export default function Friend({friend}){
   const  {name , image , balance} = friend
    return(<li>
        <img src={image} alt="" />
        <h3> {name}</h3>
       {balance > 0&& <p className="green">{name} owe you {balance}$</p>}
       {balance < 0&& <p className="red">you owe {name} {balance}$</p>}
       {balance === 0&& <p className="">you and {name} are even</p>}
       <Button>Select</Button>
    </li>)
}