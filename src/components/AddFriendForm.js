import { useState } from "react"
import Button from "./Button"
export default function AddFriendForm({AddFriend}){
const [name , setFriend] = useState("");
const [image , setImage] = useState("https://i.pravatar.cc/48?u=499476");
function handleSubmit(e){
    e.preventDefault();  
    if(!name||!image) return ;
    const id =crypto.randomUUID();
    const newFriend = {id,name, image :`${image}?=${id}` , balance :0};
    AddFriend(newFriend);
    setFriend("");
    setImage("https://i.pravatar.cc/48?u=499476");
    
}
return(<form className="form-add-friend" onSubmit={handleSubmit}>
    <label htmlFor="">👭Friend name</label>
    <input value={name} onChange={(e)=> setFriend(e.target.value)} type="text" />
    <label htmlFor="">🖼Image Url</label>
    <input value={image} onChange={(e)=> setImage(e.target.value)} type="text" />
    <Button> Add Friend</Button>
    </form>)
}