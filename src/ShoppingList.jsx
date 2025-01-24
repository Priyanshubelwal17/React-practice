import ShoppingListitems from "./ShoppingListitems";

export default function ShoppingList({ items }) {
    return (
        <ul>
            {items.map((i) => (
                <ShoppingListitems
                    key={i.id}
                    item={i.item}
                    quantity={i.quantity}
                    completed={i.completed}
                />
            ))}
        </ul>
    )

}