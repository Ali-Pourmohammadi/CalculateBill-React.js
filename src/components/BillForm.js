import Button from "./Button"
export default function BillForm(){
    return (<div>
        <form action="" className="form-split-bill">
            <h2>Split Bill with X</h2>
            <label htmlFor=""> 💰bill</label>
            <input type="text" />
            <label htmlFor=""> 😊your expence</label>
            <input type="text" />
            <label htmlFor=""> 👭 X's expence</label>
            <input type="text" disabled />
            <label htmlFor="">🤑 who is paying</label>
            <select name="" id="">
                <option value="user">you</option>
                <option value="friend">X</option>
            </select>
            <Button>Split Bill</Button>
        </form>
    </div>)
}