import { useState } from "react";

function Items(){
    let [items,setItems] = useState(["Item 1", "Item 2", " Item 3"])
}
return(
    <>
    <button onClick={() =>{

        let copyItems = [...items]
        copyItems.push("Item 4")
        setItems(copyItems)
    }}
    > Add Items</button>
    {
        items.map((e) =>{
            return (
                <h1>{e}</h1>
            )
        })
    }
    </>
)

// function App() {
//     const [items, setItems] = useState([
//         "Item 1",
//         "Item 2",
//         "Item 3",
//         "Item 4",
//     ]);
//     return (
//         <>
//             <h1>Items</h1>
//             <button
//                 onClick={() => {
//                     setItems((previousItems) => [
//                       ...prevItems,
//                       `Item {prevItems.length + 1}`,
//                     ]);
//                 }}
//             >
//                 Add Item
//             </button>

//             <ul>
//                 {items.map((item, index) => (
//                     <li key={index}>{item}</li>
//                 ))}
//             </ul>
//         </>
//     );
// }

export default Item;