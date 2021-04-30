import styles from './CVSkills.module.scss';
import commonStyles from '../CvCommon.module.scss';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';
import { faHtml5, faCss3Alt, faJs, faGitSquare, faReact, f41e, faSass } from '@fortawesome/free-brands-svg-icons';

class CvSkills extends React.Component {

    skills = [
        {
            id: 1,
            name: 'HTML5',
            elementId: styles.iconhtml5,
            icon: faHtml5,
        },
        {
            id: 2,
            name: 'CSS3',
            elementId: styles.iconcss3,
            icon: faCss3Alt,
        },
        {
            id: 3,
            name: 'JavaScript',
            elementId: styles.iconjs,
            icon: faJs,
        },
        {
            id: 4,
            name: 'Git',
            elementId: styles.icongit,
            icon: faGitSquare,
        },
        {
            id: 5,
            name: 'React',
            elementId: styles.iconreact,
            icon: faReact,
        },
        {
            id: 6,
            name: 'JSON',
            elementId: styles.iconjson,
            icon: faCircleNotch,
        },
        {
            id: 7,
            name: 'SASS',
            elementId: styles.iconsass,
            icon: faSass,
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
            <section className={commonStyles.sectioncontainer}>
                <div className={commonStyles.block} id={styles.personalskillscontainer}>
                    <h2>UMIEJĘTNOŚCI OSOBISTE:</h2>
                    <ul className={commonStyles.list}>
                        <li>Języki: polski (natywny), angielski (B2)</li>
                        <li>Kurs: Kwalifikowana Pierwsza Pomoc</li>
                        <li>Prawo jazdy: kategoria B</li>
                    </ul>
                </div>
                <div className={commonStyles.block} id={styles.technicalskillscontainer}>
                    <h2>ZNAJOMOŚĆ:</h2>
                    <ul id={styles.listtechnicalskills} className={commonStyles.list}>
                        {technicalSkills}
                    </ul>
                </div>
            </section>
        )
    }
}

export default CvSkills;