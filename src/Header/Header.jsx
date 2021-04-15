import styles from './Header.module.scss';

export default function Header(props) {

    return (
        <div className={styles.container}>
            <header>
                <div className={styles.pagename}>Katarzyna Sroka</div>
                <div className={styles.pagenamemobile}>KS</div>
                <div className={styles.introduction}>Front-end Developer</div>
            </header>
            <section>
                <ul className={styles.menu}>
                    <li onClick={props.scrollToProjects} className={styles.menuitem}>PROJEKTY</li>
                    <li onClick={props.scrollToAboutMe} className={styles.menuitem}>O MNIE </li>
                    <li onClick={props.scrollToCv} className={styles.menuitem}>CV</li>
                </ul>
            </section>
        </div>
    );
}