// src/components/Toggle.tsx
import React from 'react';
import styles from './Toggle.module.css';

const Toggle: React.FC = () => (
  <div className={styles.checkboxWrapper}>
    <div className={styles.check}>
      <input id="check-5" type="checkbox" defaultChecked />
      <label htmlFor="check-5"></label>
    </div>
  </div>
);

export default Toggle;
