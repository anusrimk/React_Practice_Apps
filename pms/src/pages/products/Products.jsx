import React, { useState, useEffect } from 'react';
import styles from './Products.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEye,
  faPen,
  faTrash,
  faPlusCircle,
  faLaptop,
  faTshirt,
  faBagShopping,
  faBowlFood,
  faCancel
} from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';


function Products() {
    let [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/products", {
            method: "GET"
        })
        .then((response)=>{
            return response.json()
          })
          .then((data)=>{
            setProducts(data)
            console.log(data)
          })
          .catch((err)=>{
            console.log(err)
          })
    }, []);

    //to delete a product

    function deleteProduct(id){
            console. log (id)
            // fetch("http://localhost:3000/products/{id}",{
            fetch("http://localhost:3000/products/"+id,{
                method: "DELETE"
            })
            .then ((response)=>{
                return response.json ()
            })
            .then ((data)=>{
               console.log(data)
                let copyProducts= [...products]

                let index = copyProducts.findIndex ((product)=>{
                      return product._id === id

                })
                copyProducts. splice (index, 1)
                setProducts(copyProducts)
    })}

    const RenderIcon = (category) => (
        <FontAwesomeIcon
          icon={
              category === "Clothing"
              ? faTshirt
              : category === "Stationary"
              ? faPen
              : category === "Electronics"
              ? faLaptop
              : category === "Accessory"
              ? faBagShopping
              : category === "Food"
              ? faBowlFood
              : faCancel
          }
        />
      );

    return (
        <>
            <section className={styles.container}>
                <div className={styles.header}>
                <h1>Add Products</h1>
                <a href="/form">
                    <FontAwesomeIcon icon={faPlusCircle} size="2x" />
                </a>
                </div>

                <table>
                    <thead>
                        <tr>
                            <th>Product No</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Category</th>
                            <th>Quantity</th>
                            <th>Image</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map((product,index) => {
                                return (
                                    <tr>
                                        <td>{index+1}</td>
                                        <td>{product.name}</td>
                                        <td>{product.price}</td>
                                        <td>{product.category}&nbsp;&nbsp;{RenderIcon(product.category)}</td>
                                        <td>{product.quantity}</td>
                                        <td><img className={styles.prod_img} src={product.imageURL} />
                                        </td>
                                        <td>
                                            <div className={styles.actions}>

                                            <Link to={"/view/"+product._id} >
                                            <i className={"fa-solid fa-eye " + styles.icon_view}></i>
                                            </Link>

                                            <Link to={"/update/" + product._id}>
                                            <i className={"fa-solid fa-pen "+styles.icon_update}></i>
                                            </Link>

                                            <i className={"fa-solid fa-trash " + styles.icon_delete} onClick={()=>{
                                                deleteProduct(product._id)
                                            }}></i>

                                            </div>
                                       
                                        </td>
                                    </tr>
                                );
                            })}
                    </tbody>
                </table>
            </section>
        </>
);
}
export default Products;