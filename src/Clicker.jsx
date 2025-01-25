import "./Clicker.css"

function handleClick() {
    console.log("CLICKED THE BUTTON!!  ")
}

export default function Clicker() {
    return (
        <div className="click">
            <p >Clicks</p>
            <button onClick={handleClick} >Click</button>
        </div>
    )
}