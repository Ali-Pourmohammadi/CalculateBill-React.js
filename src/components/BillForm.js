import Button from "./Button"
export default function BillForm({selectedFriend}){
    return (<div>
        <form action="" className="form-split-bill">
            <h2>Split Bill with {selectedFriend.name}</h2>
            <label htmlFor=""> 💰bill</label>
            <input type="text" />
            <label htmlFor=""> 😊your expence</label>
            <input type="text" />
            <label htmlFor=""> 👭 {selectedFriend.name}'s expence</label>
            <input type="text" disabled />
            <label htmlFor="">🤑 who is paying</label>
            <select name="" id="">
                <option value="user">you</option>
                <option value="friend">{selectedFriend.name}</option>
            </select>
            <Button>Split Bill</Button>
        </form>
    </div>)
}