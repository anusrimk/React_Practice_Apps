import styles from './UpdateProducts.module.css'
import React, { useEffect } from 'react'
import {useState} from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList } from "@fortawesome/free-solid-svg-icons";
import { useNavigate, Link, useParams } from "react-router-dom";

function UpdateProducts() {

    let [product, setProduct] = useState({})
    // let [name, setName] = useState(null)
    // let [category, setCategory] = useState(null)
    // let [price, setPrice] = useState(null)
    // let [quantity, setQuantity] = useState(null)
    // let [imageURL, setImageURL] = useState(null)


    let params = useParams()
    useEffect(()=>{
        fetch("http://localhost:3000/products/"+ params.id,{
            method: "GET",
        })
        .then((response)=>{
            return response.json()
          })
        .then((data)=>{
            console.log(data)
            setProduct(data)
            // setName(data.name)
            // setCategory(data.category)
            // setPrice(data.price)
            // setQuantity(data.quantity)
            // setImageURL(data.imageURL)
            
          })
          .catch((err)=>{
            console.log(err)
          })
    }, []);


    function handleInput(event){
        setProduct({ ...product, [event.target.name]: event.target.value });
        
    }

        function handleSubmit(event) {
            event.preventDefault();
            handleUpdate();
        }

    
    function handleUpdate(){
        event.preventDefault()
        fetch("http://localhost:3000/products/"+ params.id,{
            method: "PUT",
            body:JSON.stringify(product),
            headers:{
                "Content-Type": "application/json"
            }
        })
        .then((response)=>{
            return response.json()
        })
        .then((data)=>{
            console.log(data)
        })
        .catch((err)=>{
            console.log(err)
        })
        }


  return (


    <section className={styles.container}>
            <div className={styles.header}>
                <h1 className={styles.containerTitle}>Add Product</h1>
                <Link to="/products">
                <i className={"fa-regular fa-rectangle-list "+styles.icon_list} size="3x"></i>
                {/* <FontAwesomeIcon icon={fa} size="2x" /> */}
                </Link>
            </div>


            <form className={styles.form} onSubmit={handleSubmit}>

                <input type="text" className={styles.inp} required placeholder='Enter Name' name='name'
                onChange={handleInput}
                //value={name}
                value={product.name}
                />
                <input type="text" className={styles.inp} required placeholder='Enter Price' name='price'
                onChange={handleInput}
                //value={price}
                value={product.price}
                />
                <input type="text" className={styles.inp} required placeholder='Enter Quantity' name='quantity'
                onChange={handleInput}
                //value={quantity}
                value={product.quantity}
                />
                <input type="text" className={styles.inp} required placeholder='Enter Image URL' name='imageURL'
                onChange={handleInput}
                //value={imageURL}
                value={product.imageURL}
                />
                <input type="text" className={styles.inp} required placeholder='Enter Category' name='category'
                onChange={handleInput}
                //value={category}
                value={product.category}
                />

                <button type='button' className={styles.btn} onClick={handleSubmit}> Add Product</button>
            </form>

        </section>
  )
}
export default UpdateProducts;