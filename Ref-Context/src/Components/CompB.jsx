import React, { useContext } from "react";
import CompB1 from "./CompB1";
import { DataContext } from "../App";

import styles from "./CompB.module.css"

function CompB() {
  let data = useContext(DataContext);
  return (
    <div className={styles.div}>
        <h1>Within B : {data.name}</h1>
      <CompB1 />
    </div>
  );
}

export default CompB;
