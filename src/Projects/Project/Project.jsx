import styles from './Project.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons';

export default function Project(props) {
    return (
        <a href={props.project.url} className={styles.container}>
            <div className={props.project.id % 2 === 0 ? styles.leftReversed : styles.left}>
                <img src={props.project.img.src} alt={props.project.img.alt} className={styles.projectImage} />
            </div>
            <div className={styles.right}>
                <div className={styles.projectInfo}>
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
                        <div className={styles.viewProject}>
                            VIEW PROJECT <FontAwesomeIcon icon={faArrowCircleRight} />
                        </div>
                    </div>
                </div>
            </div>
        </a>
    )
}