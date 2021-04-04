import styles from './Project.module.scss'

export default function Project(props) {
    return (
        <a href={props.project.url} className={styles.container}>
            <div className={styles.imagecontainer}>
                <img src={props.project.img.src} alt={props.project.img.alt} />
            </div>
            <h2 className={styles.name}>{props.project.name}</h2>
            <div className={styles.techdescription}>
            <div className={styles.techused}>
                Użyte technologie:
                <br />
                {props.project.technologiesUsed}
            </div>
            <div className={styles.description}>{props.project.description}</div>
            </div>
        </a>
    )
}