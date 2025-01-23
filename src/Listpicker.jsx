export default function ListPicker({ values }) {
    const randIdx = Math.floor(Math.random() * values.length);
    const randElement = values[randIdx]
    return (
        <div>
            <p>THe list of values: {values} </p>
            <p>Rando elemtnt is: {randElement}</p>
        </div>
    )
}