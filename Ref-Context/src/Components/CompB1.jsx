import React, { useContext } from "react";
import { DataContext } from "../App";

import styles from "./CompB1.module.css";

function CompB1() {
  let data = useContext(DataContext);
  return (
    <div className={styles.divB1}>
      <h4> Within B1</h4>
      <button onClick={() => data.setter("Mishti")}>Click me to change</button>
    </div>
  );
}

export default CompB1;
