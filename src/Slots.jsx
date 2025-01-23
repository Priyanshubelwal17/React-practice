export default function Slots({ val1, val2, val3 }) {
    const isWinner = val1 === val2 && val1 === val3
    // const val1 = Math.random([🍒,🍌])
    // const val2 = Math.random([🍒,🍌])
    // const val3 = Math.random([🍒,🍌])

    return (
        <div>
            <h1 style={{ color: isWinner ? "green" : "red" }}>{isWinner ? "You Won!" : "You lose"}</h1>
            <h2>{val1},{val2},{val3}</h2>
            {isWinner && <h3>Congrats</h3>}
        </div>
    )
}