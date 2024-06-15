// src/components/ArrowIcon.tsx
import React from 'react';
import styles from './Svgs.module.css'; // Certifique-se de criar este arquivo CSS

const ArrowIcon: React.FC = () => (
  <svg
    className={styles.svg}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="m6 9 6 6 6-6"></path>
  </svg>
);

export default ArrowIcon;
