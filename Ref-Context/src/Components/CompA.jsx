import React, { useContext } from "react";
import CompB from "./CompB";
import { DataContext } from "../App";

import styles from "./CompA.module.css"

function CompA() {
  let data = useContext(DataContext);
  return (
    <div className={styles.divA}>
      {data.name}
      <CompB />
    </div>
  );
}

export default CompA;
