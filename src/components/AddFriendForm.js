import Button from "./Button"
export default function AddFriendList(){
    return(<div>
        <form className="form-add-friend">
            <label htmlFor="">👩🏻‍🤝‍👩🏻 Friend Name</label>
            <input type="text" />
            <label htmlFor="">🖼 Image url</label>
            <input type="text" />
            <Button>Add Friend</Button>

        </form>
    </div>)
}