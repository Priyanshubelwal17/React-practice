import "./Greeter.css"

export default function Greeter({ person = "Everyone", from = "anonymous" }) {
    return (
        <div className="Greet">
            <h1 >HI THERE {person}</h1>
            <h2>--{from}</h2>

        </div>
    )
}