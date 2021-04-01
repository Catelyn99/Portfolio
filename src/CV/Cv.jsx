import './Cv.css';
import './CvCommon.css';
import cvPdf from './CV_Sroka_Katarzyna.pdf';
import myphoto from './myphoto.jpg';
import CvSkills from './CVSkills/CVSkills';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHome, faFileDownload } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

export default function Cv() {
    return (
        <div className="cv-main">
            <div id="cv-other">
                <h2 id="cv-title">CURRICULUM VITAE</h2>
                <a href={cvPdf} id="cv-download" download>POBIERZ <FontAwesomeIcon style={{ marginLeft: '5px' }} icon={faFileDownload} /></a>
            </div>
            <section className="cv-section-container">
                <div className="cv-block">
                    <img id="cv-myphoto" src={myphoto} alt="me" />
                </div>
                <div className="cv-block">
                    <ul id="cv-general-data" className="cv-list">
                        <li>
                            <FontAwesomeIcon icon={faHome} /> Witanowice
                        </li>
                        <li>
                            <a href="mailto:katarzynasroka99@gmail.com">
                                <FontAwesomeIcon icon={faEnvelope} /> <span className="cv-about-icon-caption-long">katarzynasroka99@gmail.com</span>
                                <span className="cv-about-icon-caption-short">Email</span>
                        </a>
                        </li>
                        <li>
                            <a href="https://github.com/Catelyn99">
                                <FontAwesomeIcon icon={faGithub} /> <span className="cv-about-icon-caption-long">Catelyn99</span>
                                <span className="cv-about-icon-caption-short">GitHub</span>
                        </a>
                        </li>
                    </ul>
                </div>
            </section>
            <CvSkills />
            <h2>WYKSZTAŁCENIE</h2>
            <ul className="cv-list" id="cv-education-list">
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