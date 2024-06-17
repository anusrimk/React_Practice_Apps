import {useState} from 'react'
import styles from './CreateProduct.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList } from "@fortawesome/free-solid-svg-icons";
import { useNavigate, Link } from "react-router-dom";


function CreateProduct(){

    let [product, setProduct] = useState()

    function handleInput(){
        setProduct({...product, [event.target.name]:event.target.value})
    }

    function handleSubmit(){
        
        event.preventDefault()
        //console.log(product)
        fetch('http://localhost:3000/products',{
            method: "POST",
            body:JSON.stringify(product),
            headers:{
                "Content-Type":"application/json"
            }
        })
        .then((response)=>{
            return response.json()
        })
        .then((data)=>{
            console.log(data)
            navigation("/products");

        })
        .catch((err)=>{
            console.log(err)
        })
    }

    return(
        <section className={styles.container}>
            <div className={styles.header}>
                <h1 className={styles.containerTitle}>Add Product</h1>
                <Link to="/products">
                <FontAwesomeIcon icon={faList} size="2x" />
                </Link>
            </div>


            <form className={styles.form} onSubmit={handleSubmit}>

                <input type="text" className={styles.inp} required placeholder='Enter Name' name='name'
                onChange={handleInput}
                />
                <input type="text" className={styles.inp} required placeholder='Enter Price' name='price'
                onChange={handleInput}
                />
                <input type="text" className={styles.inp} required placeholder='Enter Quantity' name='quantity'
                onChange={handleInput}
                />
                <input type="text" className={styles.inp} required placeholder='Enter Image URL' name='imageURL'
                onChange={handleInput}
                />
                <input type="text" className={styles.inp} required placeholder='Enter Category' name='category'
                onChange={handleInput}
                />

                <button type='button' className={styles.btn} onClick={handleSubmit}> Add Product</button>
            </form>

        </section>
    )
}
export default CreateProduct;