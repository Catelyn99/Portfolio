import styles from './Navigation.module.scss';

export default function Navigation(props) {

    return (
        <section>
            <ul className={styles.navigation}>
                <li onClick={props.scrollToAboutMe} className={styles.navigation__item}>O MNIE </li>
                <li onClick={props.scrollToCv} className={styles.navigation__item}>CV</li>
                <li onClick={props.scrollToProjects} className={styles.navigation__item}>PROJEKTY</li>
            </ul>
        </section>
    );
}