import styles from './Cv.module.scss';
import React from 'react';
import commonStyles from './CvCommon.module.scss';
import myphoto from './myphoto.jpg';
import CvSkills from './CVSkills/CVSkills';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faFileDownload, faObjectUngroup } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

export default function Cv(props) {
    return (
        <main className={styles.main}>
            <div className={styles.header}>
                <h2 id={styles.title}>CURRICULUM VITAE</h2>
                <a href="mailto:katarzynasroka99@gmail.com" className={styles.email}><FontAwesomeIcon icon={faEnvelope} /></a>
            </div>
            <section className={commonStyles.container}>
                <div className={commonStyles.column}>
                    <img id={styles.myphoto} src={myphoto} alt="me" />
                </div>
                <div className={commonStyles.column}>
                    <ul className={`${styles.generaldata} ${commonStyles.list}`}>
                        <li>
                            <a href="https://github.com/Catelyn99">
                                <FontAwesomeIcon icon={faGithub} /> <span className={styles.caption}>Catelyn99</span>
                                <span className={styles.mobilecaption}>GitHub</span>
                        </a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/katarzyna-sroka-09/">
                                <FontAwesomeIcon icon={faLinkedinIn} /> <span className={styles.caption}>katarzyna-sroka-09</span>
                                <span className={styles.mobilecaption}>LinkedIn</span>
                        </a>
                        </li>
                        <li>
                            <div onClick={props.scrollToProjects}>
                                <FontAwesomeIcon icon={faObjectUngroup} /> <span className={styles.caption}>Projekty</span>
                                <span className={styles.mobilecaption}>Projekty</span>
                        </div>
                        </li>
                    </ul>
                </div>
                
            </section>
            <CvSkills />
            <h2>WYKSZTAŁCENIE</h2>
            <ul className={`${commonStyles.list} ${styles.educationlist}`}>
                <li>
                    Wyższe: Uczelnia Państwowa Wyższa Szkoła Zawodowa im. rtm. Witolda Pileckiego w Oświęcimiu - kierunek: pielęgniarstwo (2018r. - 2021r.)
                </li>
            </ul>
        </main>
    )
}