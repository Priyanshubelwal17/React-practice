import PropertyList from "./Property";
import "./PropertyList.css"

export default function Property({ properties }) {
    return (
        <div className="PropertyList" >
            {properties.map((p) => (
                <PropertyList {...p} key={p.id} />
            ))}
        </div>
    )
}