import styles from "./Header.module.scss";

export default function Header() {
  return (
    <>
      <header className={styles.introduction}>
        <div className={styles.welcome}>
          Welcome <span className={styles.welcomeLong}>to my profile</span>
        </div>
        <div className={styles.pageName}>Katarzyna Sroka</div>
        <div className={styles.pageNameMobile}>KS</div>
        <div className={styles.introductionTextMobile}>Frontend Developer</div>
        <div className={styles.introductionText}>I'm only a woman.</div>
        <div className={styles.introductionText}>I'm only a nurse.</div>
        <div className={styles.introductionText}>
          I'm only a{" "}
          <span className={styles.introductionTextBold}>
            FRONTEND DEVELOPER
          </span>
          .
        </div>
      </header>
      <section className={styles.possible}>
        <span>I</span>
        <span>M</span>
        <span>POSSIBLE</span>
      </section>
    </>
  );
}
