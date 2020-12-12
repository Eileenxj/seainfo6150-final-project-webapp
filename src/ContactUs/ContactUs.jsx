import React from "react";
import styles from "./ContactUs.module.css";

const ContactUs = () => {
  return (
      <div>
        <h1 className={styles.title}>Contact us</h1>
        <p className={styles.text}>If you have any questions and need more help, please email to <a href="mailto:service@popularrecipes.com">service@popularrecipes.com</a></p>
      </div>
     
  );
};

export default ContactUs;
