// src/components/Card.tsx
"use client";

import React from "react";
import styles from "./Card.module.css";
import SvgIcon from "../svgs/Sgv.icone";
import FacebookIcon from "../svgs/Facebook.icon";
import InstagramIcon from "../svgs/Instagram.icon";
import CustomIcon from "../svgs/Custom.icon";
import ArrowIcon from "../svgs/Arrow.icon";

const Card: React.FC = () => {
  return (
    <div className={styles.parent}>
      <div className={styles.card}>
        <div className={styles.logo}>
          <span className={`${styles.circle} ${styles.circle1}`}></span>
          <span className={`${styles.circle} ${styles.circle2}`}></span>
          <span className={`${styles.circle} ${styles.circle3}`}></span>
          <span className={`${styles.circle} ${styles.circle4}`}></span>
          <span className={`${styles.circle} ${styles.circle5}`}>
            <CustomIcon />
          </span>
        </div>
        <div className={styles.glass}></div>
        <div className={styles.content}>
          <span className={styles.title}>UIVERSE (3D UI)</span>
          <span className={styles.text}>
            Create, share, and use beautiful custom elements made with CSS
          </span>
        </div>
        <div className={styles.bottom}>
          <div className={styles.socialButtonsContainer}>
            <button className={styles.socialButton}>
              <InstagramIcon />
            </button>
            <button className={styles.socialButton}>
              <FacebookIcon />
            </button>
            <button className={styles.socialButton}>
              <SvgIcon />
            </button>
          </div>
          <div className={styles.viewmore}>
            <button className={styles.viewMoreButton}>View more</button>
            <ArrowIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
