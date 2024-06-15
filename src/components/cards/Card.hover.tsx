// src/components/HoverCard.tsx
import React from 'react';
import styles from './Card.hover.module.css'; // Certifique-se de criar este arquivo CSS

const HoverCard: React.FC = () => (
  <div id="card" className={styles.card}>
    <div className={styles.content}>
      <span>HOVER ME</span>
    </div>
  </div>
);

export default HoverCard;
