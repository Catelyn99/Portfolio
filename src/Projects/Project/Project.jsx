import styles from './Project.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons';

export default function Project(props) {
    return (
        <div className={props.project.id % 2 === 0 ? styles.revertContainer : styles.container}>
            <img src={props.project.img.src} alt={props.project.img.alt} />
            <div className={styles.infoColumn}>
                <h1 className={styles.name}>{props.project.name}</h1>
                <div>
                    <div className={styles.description}>
                        {props.project.description.split('  ').map(item => {
                            return (
                                <>
                                    {item}
                                    <br />
                                </>
                            )
                        })}
                    </div>
                    <div className={styles.techused}>
                        {props.project.technologiesUsed}
                    </div>
                    <a href={props.project.url} className={styles.viewProject}>
                        VIEW PROJECT <FontAwesomeIcon icon={faArrowCircleRight} />
                    </a>
                </div>
            </div>
        </div>
    )
}