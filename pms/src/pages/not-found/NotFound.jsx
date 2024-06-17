import styles from './NotFound.module.css'
import React, { useState, useEffect } from 'react';

function NotFound(){
    return (
        <div className={styles.not_found}>
            <img src='https://i.pinimg.com/736x/b8/fb/70/b8fb705699100d965d1ede440f63bd35.jpg'/>
            {/* <h1>404 | Not Found</h1>
            <h3>Go back to home</h3> */}
        </div>
    )
}
export default NotFound;