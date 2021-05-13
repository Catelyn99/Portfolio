import styles from './Cv.module.scss';
import React from 'react';
import commonStyles from './CvCommon.module.scss';
import cvPdf from './CV_Sroka_Katarzyna.pdf';
import myphoto from './myphoto.jpg';
import CvSkills from './CVSkills/CVSkills';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faFileDownload, faObjectUngroup } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

export default function Cv(props) {
    return (
        <div className={styles.main}>
            <div id={styles.other}>
                <h2 id={styles.title}>CURRICULUM VITAE</h2>
                <a href={cvPdf} id={styles.download} download>POBIERZ <FontAwesomeIcon style={{ marginLeft: '5px' }} icon={faFileDownload} /></a>
            </div>
            <section className={commonStyles.sectioncontainer}>
                <div className={commonStyles.block}>
                    <img id={styles.myphoto} src={myphoto} alt="me" />
                </div>
                <div className={commonStyles.block}>
                    <ul id={styles.generaldata} className={commonStyles.list}>
                        <li>
                            <a href="mailto:katarzynasroka99@gmail.com">
                                <FontAwesomeIcon icon={faEnvelope} /> <span className={styles.abouticoncaptionlong}>katarzynasroka99@gmail.com</span>
                                <span className={styles.abouticoncaptionshort}>Email</span>
                        </a>
                        </li>
                        <li>
                            <a href="https://github.com/Catelyn99">
                                <FontAwesomeIcon icon={faGithub} /> <span className={styles.abouticoncaptionlong}>Catelyn99</span>
                                <span className={styles.abouticoncaptionshort}>GitHub</span>
                        </a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/katarzyna-sroka-09/">
                                <FontAwesomeIcon icon={faLinkedinIn} /> <span className={styles.abouticoncaptionlong}>katarzyna-sroka-09</span>
                                <span className={styles.abouticoncaptionshort}>LinkedIn</span>
                        </a>
                        </li>
                        <li>
                            <div onClick={props.scrollToProjects}>
                                <FontAwesomeIcon icon={faObjectUngroup} /> <span className={styles.abouticoncaptionlong}>Projekty</span>
                                <span className={styles.abouticoncaptionshort}>Projekty</span>
                        </div>
                        </li>
                    </ul>
                </div>
                
            </section>
            <CvSkills />
            <h2>WYKSZTAŁCENIE</h2>
            <ul className={commonStyles.list} id={styles.educationlist}>
                <li>
                    Średnie: Centrum kształcenia Zawodowego i Ustawicznego nr 1 im. ks. prof. J. Tischnera - profil europejski (2015r. - 2018r.)
                </li>
                <li>
                    Wyższe: Uczelnia Państwowa Wyższa Szkoła Zawodowa im. rtm. Witolda Pileckiego w Oświęcimiu - kierunek: pielęgniarstwo (2018r. - aktualnie)
                </li>
            </ul>
        </div>
    )
}