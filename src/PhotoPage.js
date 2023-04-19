import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "./css_modules/PhotoPageStyles.module.css";
import classnames from "classnames";

export default function PhotoPage() {
  const [alertVisible, setAlertVisible] = useState(false);

  function showAlert() {
    setAlertVisible(true);
  }
  function hideAlert() {
    setAlertVisible(false);
  }
  return (
    <>
      <img
        data-aos="zoom-in-down"
        data-aos-duration="2000"
        src="../images/AbhishekCollage.jpeg"
        alt="AbhishekCollagePhoto"
      />
      <p className={styles.LookingProfessional_p}>
        Isn't it that I am looking professional?
      </p>
      <NavLink
        to="/PhotoPage/MainPage"
        className={classnames(styles.b1, styles.btn)}
      >
        Absolutely
      </NavLink>
      <a className={classnames(styles.b2, styles.btn)} onClick={showAlert}>
        Somewhat
      </a>
      {alertVisible && (
        <div id={styles.custom_alert} className={styles.alert}>
          <div className={styles.alert_content}>
            <h2>It's really wrong !!!!</h2>
            <p className={styles.alert_p}>
              Please don't lie. Click on Absolutely
            </p>
            <button onClick={hideAlert}>OK I will </button>
          </div>
        </div>
      )}
    </>
  );
}
