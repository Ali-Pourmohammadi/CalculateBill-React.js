export default function Button({children , onOpen}){
    return(<button onClick={onOpen} className="button">{children}</button>)
};