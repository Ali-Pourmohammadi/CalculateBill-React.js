import { useState } from "react"
import Button from "./Button"
export default function AddFriendForm({onAddFriend}){
    const [ name , setName]  = useState("");
    const [image , setImage]= useState("https://i.pravatar.cc/48?u=499476");
    function handlSubmit(e){
        e.preventDefault();
        if(!name||!image) return ;
        const id = crypto.randomUUID();
        const newFriend = {name , balance:0 , image  , id};
        onAddFriend(newFriend);

    }
    return(<div>
        <form className="form-add-friend" onSubmit={handlSubmit}>
            <label htmlFor="">👩🏻‍🤝‍👩🏻 Friend Name</label>
            <input type="text" value={name} onChange={(e)=>setName(e.target.value)} />
            <label htmlFor="">🖼 Image url</label>
            <input type="text" value={image} onChange={(e)=> setImage(e.target.value)} />
            <Button>Add Friend</Button>

        </form>
    </div>)
}