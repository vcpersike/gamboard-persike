// src/app/page.tsx
import React from "react";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import styles from "./page.module.css";
import Card from "@/components/cards/Card";
import HoverCard from "@/components/cards/Card.hover";
import Toggle from "@/components/toggle/Toggle";
import VoltageButton from "@/components/button/Button.voltage";

const Home: React.FC = () => {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        <h2>Welcome to my site</h2>
        <p>This is a simple Next.js site using DDD.</p>
      </main>
      <Toggle />
      <HoverCard />
      <Card />
      <VoltageButton />
      <Footer />
    </div>
  );
};

export default Home;
