// src/components/VoltageButton.tsx
import React from "react";
import styles from "./Button.module.css";
import SvgGlow from "../svgs/Svg.glow.icon"; // Assumindo que você já tem este componente

const VoltageButton: React.FC = () => (
  <div className={styles.voltageButton}>
    <button>Click Me</button>
    <SvgGlow />
    <div className={styles.dots}>
      <div className={`${styles.dot} ${styles.dot1}`}></div>
      <div className={`${styles.dot} ${styles.dot2}`}></div>
      <div className={`${styles.dot} ${styles.dot3}`}></div>
      <div className={`${styles.dot} ${styles.dot4}`}></div>
      <div className={`${styles.dot} ${styles.dot5}`}></div>
    </div>
  </div>
);

export default VoltageButton;
