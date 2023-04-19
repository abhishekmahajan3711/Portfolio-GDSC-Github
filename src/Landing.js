import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "./css_modules/Landingstyles.module.css";
import classnames from "classnames";

export default function Landing() {
  const [alertVisible, setAlertVisible] = useState(false);

  function showAlert() {
    setAlertVisible(true);
  }

  function hideAlert() {
    setAlertVisible(false);
  }

  return (
    <>
      <div>
        <p className={classnames(styles.text_1, styles.text)}>
          Welcome to Professional World of
        </p>
        <p
          data-aos="fade-up"
          data-aos-duration="2000"
          className={classnames(styles.text_2, styles.text)}
        >
          Abhishek Mahajan
        </p>
      </div>
      <NavLink
        to="/PhotoPage"
        className={classnames(styles.Proceed, styles.btn)}
      >
        Proceed
      </NavLink>
      <button
        className={classnames(styles.NProceed, styles.btn)}
        onClick={showAlert}
      >
        Not Proceed
      </button>
      {alertVisible && (
        <div id={styles.custom_alert} className={styles.alert}>
          <div className={styles.alert_content}>
            <h2 data-aos="fade">So Sorry !!!!!</h2>
            <p className={styles.alert_p} data-aos="fade">
              You will miss to see Abhishek's World
            </p>
            <button onClick={hideAlert}>OK</button>
          </div>
        </div>
      )}
    </>
  );
}
