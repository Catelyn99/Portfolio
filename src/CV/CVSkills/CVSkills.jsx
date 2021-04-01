import './CVSkills.css';
import '../CvCommon.css';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';
import { faHtml5, faCss3Alt, faJs, faGitSquare, faReact } from '@fortawesome/free-brands-svg-icons';

class CvSkills extends React.Component {

    skills = [
        {
            id: 1,
            name: 'HTML5',
            elementId: "cv-icon-html5",
            icon: faHtml5,
        },
        {
            id: 2,
            name: 'CSS3',
            elementId: "cv-icon-css3",
            icon: faCss3Alt,
        },
        {
            id: 3,
            name: 'JavaScript',
            elementId: "cv-icon-js",
            icon: faJs,
        },
        {
            id: 4,
            name: 'Git',
            elementId: "cv-icon-git",
            icon: faGitSquare,
        },
        {
            id: 5,
            name: 'React',
            elementId: "cv-icon-react",
            icon: faReact,
        },
        {
            id: 6,
            name: 'JSON',
            elementId: "cv-icon-json",
            icon: faCircleNotch,
        }
    ];

    render() {
        const technicalSkills = this.skills.map(skill => {
            return (
                <li key={skill.id}>
                    <FontAwesomeIcon id={skill.elementId} icon={skill.icon} size="3x" />
                    <br />
                    {skill.name}
                </li>
            )
        });

        return (
            <section className="cv-section-container">
                <div className="cv-block" id="cv-personal-skills-container">
                    <h2>UMIEJĘTNOŚCI OSOBISTE:</h2>
                    <ul className="cv-list">
                        <li>Języki: polski (natywny), angielski (B2)</li>
                        <li>Kurs: Kwalifikowana Pierwsza Pomoc</li>
                        <li>Prawo jazdy: kategoria B</li>
                    </ul>
                </div>
                <div className="cv-block" id="cv-technical-skills-container">
                    <h2>ZNAJOMOŚĆ:</h2>
                    <ul id="cv-list-technical-skills" className="cv-list">
                        {technicalSkills}
                    </ul>
                </div>
            </section>
        )
    }
}

export default CvSkills;