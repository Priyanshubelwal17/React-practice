export default function PropertyList({ Key, name, price, rating }) {
    return (
        <div className="property">
            <h2>{name}</h2>
            <h3>${price} of a night</h3>
            <h4> {'\u2B50'} {rating}</h4>
        </div>
    )
}