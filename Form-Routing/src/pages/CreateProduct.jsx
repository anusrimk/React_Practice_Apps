import { useState } from "react";
import "./CreateProduct.css";
function CreateProduct() {
  let [product, setProduct] = useState({});
  function handleInput(prop) {
    console.log(event);

    let copyProduct = { ...product, [event.target.name] : event.target.value};
    setProduct(copyProduct);

    //setProduct({ ...product ,[event.target.name] : event.target.value});

    // let copyProduct = { ...product};
    // copyProduct[event.target.name] = event.target.value;
    // setProduct(copyProduct);
    // console.log(product)
  }

  function handleSubmit(){
    event.preventDefault() //jo bhi func ka default behaviour hai i dont want that, so button type button pe bhi sumbit and validate karo
    console.log(product)

    fetch("https://jsonplaceholder.typicode.com/todos/1",{
        method:"POST",
        body: JSON.stringify(product),
        headers:{
            "Content-Type": "application/json"
        }
    })
    .then((response)=>{
        return response.json()
    })
    .then((data)=>{
        setProduct(product)
    })
    .catch((err)=>{
        console.log(err)
    })
  }
  return (
    <>
      <section className="form-parent">
        <form className="form" onSubmit={handleSubmit}>  {/*  doing 2 changes here */}
          <h1>Add Products</h1>
          {/* {Name} */}
          <input
            className="inp"
            required
            type="text"
            placeholder="Enter Name"
            onChange={handleInput}
          />
          <input
            className="inp"
            name="price"
            type="text"
            placeholder="Enter Price"
            onChange={handleInput}
          />
          <input
            className="inp"
            name="category"
            type="text"
            placeholder="Enter Category"
            onChange={handleInput}
          />
          <input
            className="inp"
            name="quantity"
            type="text"
            placeholder="Enter Quantity"
            onChange={handleInput}
          />
          <input
            className="inp"
            name="description"
            type="text"
            placeholder="Enter Description"
            onChange={handleInput}
          />
          <br></br>
          <button type='button' className="btn" onClick={handleSubmit} >
            Add Product
          </button>
        </form>
      </section>
    </>
    // <div>CreateProduct</div>
  );
}
export default CreateProduct;
