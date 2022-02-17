import styles from './Header.module.scss';

export default function Header() {

    return (
        <>
            <header>
                <div className={styles.welcome}>Welcome to my profile</div>
                <div className={styles.pagename}>Katarzyna Sroka</div>
                <div className={styles.pagenamemobile}>KS</div>
                <div className={styles.introductionmobile}>Frontend Developer</div>
                <div className={styles.introduction}>I' m only a woman.</div>
                <div className={styles.introduction}>I' m only a nurse.</div>
                <div className={styles.introduction}>I' m only a <span className={styles.introductionbold}>FRONTEND DEVELOPER</span>.</div>
            </header>
            <section className={styles.possible}>
                <span>I</span>
                <span>M</span>
                <span>POSSIBLE</span>
            </section>
        </>
    );
}