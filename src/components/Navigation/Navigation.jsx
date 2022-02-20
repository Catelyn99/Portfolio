import styles from "./Navigation.module.scss";

export default function Navigation(props) {
  return (
    <section>
      <ul className={styles.navigation}>
        <li onClick={props.scrollToAboutMe} className={styles.navigationItem}>
          O MNIE{" "}
        </li>
        <li onClick={props.scrollToCv} className={styles.navigationItem}>
          CV
        </li>
        <li onClick={props.scrollToProjects} className={styles.navigationItem}>
          PROJEKTY
        </li>
      </ul>
    </section>
  );
}
