import ColorBox from "./ColorBox";
import "./ColorBoxGrid.css"

function ColorBoxGrid({ colors }) {
    const boxes = [];
    for (let i = 0; i < 25; i++) {
        boxes.push(<ColorBox colors={colors} />)
    }
    return (
        <div className="center">
            <div className="ColorBoxGrid" >
                {boxes}

            </div>
        </div>
    )
}

export default ColorBoxGrid;