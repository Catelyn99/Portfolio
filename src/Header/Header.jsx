import styles from './Header.module.scss';

export default function Header(props) {

    return (
        <div className={styles.headercontainer}>
            <div className={styles.pagename}>Katarzyna Sroka</div>
            <div className={styles.pagenamemobile}>KS</div>
            <ul className={styles.menu}>
                <li onClick={props.scrollToAboutMe} className={styles.menuitem}>O MNIE </li>
                <li onClick={props.scrollToCv} className={styles.menuitem}>CV</li>
                <li onClick={props.scrollToProjects} className={styles.menuitem}>PROJEKTY</li>
            </ul>
        </div>
    );
}