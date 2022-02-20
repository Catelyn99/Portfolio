import styles from "./Cv.module.scss";
import React from "react";
import commonStyles from "./CvCommon.module.scss";
import myphoto from "../../images/myphoto.jpg";
import CvSkills from "./CVSkills/CVSkills";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faObjectUngroup } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

export default function Cv(props) {
  return (
    <main className={styles.cv}>
      <header>
        <h2 className={styles.title}>CURRICULUM VITAE</h2>
        <div>
          <span className={styles.contactMe}>Contact me</span>
          <a href="mailto:katarzynasroka99@gmail.com" className={styles.email}>
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
        </div>
      </header>
      <section className={commonStyles.container}>
        <div className={commonStyles.column}>
          <img src={myphoto} alt="My photo" />
        </div>
        <div className={commonStyles.column}>
          <ul className={`${styles.generaldata} ${commonStyles.list}`}>
            <li>
              <a href="https://github.com/Catelyn99">
                <FontAwesomeIcon icon={faGithub} />{" "}
                <span className={styles.caption}>Catelyn99</span>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/katarzyna-sroka-09/">
                <FontAwesomeIcon icon={faLinkedinIn} />{" "}
                <span className={styles.caption}>katarzyna-sroka-09</span>
              </a>
            </li>
            <li>
              <div onClick={props.scrollToProjects}>
                <FontAwesomeIcon icon={faObjectUngroup} />{" "}
                <span className={styles.caption}>Projekty</span>
              </div>
            </li>
          </ul>
        </div>
      </section>
      <CvSkills />
      <h2>WYKSZTAŁCENIE</h2>
      <ul className={`${commonStyles.list} ${styles.educationlist}`}>
        <li>
          Wyższe: Uczelnia Państwowa Wyższa Szkoła Zawodowa im. rtm. Witolda
          Pileckiego w Oświęcimiu - kierunek: pielęgniarstwo (2018r. - 2021r.)
        </li>
      </ul>
    </main>
  );
}
