import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { Link, useParams } from "react-router-dom";
import styles from "./ViewProduct.module.css";


function Navbar() {
  return (
    <div className={styles.navbar}>
      <Link to={"/products"}>
        <FontAwesomeIcon icon={faChevronLeft} />
      </Link>
    </div>
  );
}

function ViewProduct() {
  let [product, setProduct] = useState({});

  let params = useParams();

  useEffect(() => {
    fetch("http://localhost:3000/products/" + params.id, {
      method: "GET",
      headers:{
        "Content-Type": "application/json"
      }
    })
      .then((response) => response.json())
      .then((data) => {
        setProduct(data);
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [params.id]);

  return (
    <>
      <Navbar />
        <section className={styles.mainSection}>
            <div className={styles.container}>
                <div className={styles.imageContainer}>
                    <img src={product.imageURL} alt={product.name} className={styles.productImage}/>
                </div>
                <div className={styles.productInfo}>
                    <h1>{product.name}</h1>
                    <h1>Rs. {product.price}</h1>
                    <h3><strong>Category : {product.category}</strong></h3>
                    <h2>Quantity : {product.quantity}</h2>
                </div>
            </div>
      </section>
    </>
  );
}

export default ViewProduct;