import React from "react";
import styles from "./AboutUs.module.css";

const AboutUs = () => {
  return (
    <section className={styles.container} >
      <h1 className={styles.title} > About Us </h1>
      <p className={styles.text}>  We are a group developers who love cooking and enjoy life. </p>
    </section>
  );
};

export default AboutUs;
