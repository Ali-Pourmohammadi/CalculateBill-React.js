import Button from "./Button"
export default function BillForm(){
    return (<form className="form-split-bill">
        <h2>Split  a bill with X</h2>
        <label htmlFor="">💰 bill value</label>
        <input type="text" />
        <label htmlFor="">🧍‍♀️ Your Expense</label>
        <input type="text" />
        <label htmlFor="">👩🏻‍🤝‍👩🏻 X's Expense</label>
        <input type="text" disabled />
        <label htmlFor="">🤑who is paying the Bill</label>
        <select name="" id="">
            <option value="you">you</option>
            <option value="X">X</option>
        </select>
        <Button>split bill</Button>
    </form>)
}