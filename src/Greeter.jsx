import "./Greeter.css"

export default function Greeter(props) {
    return (
        <div className="Greet">
            <h1 >HI THERE {props.person}</h1>

        </div>
    )
}