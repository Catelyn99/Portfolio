import styles from "./AboutMe.module.scss";

export default function AboutMe() {
  return (
    <div className={styles.container}>
      <h1>Cześć!</h1>
      <h2>Jestem Kasia.</h2>
      <h3>
        Jestem osobą energiczną, towarzyską, odpowiedzialną i zaradną w każdym
        momencie. Pragnę się rozwijać i stawiać sobie nowe wyzwania, by nie
        wpaść w życiową rutynę. Uwielbiam planować podróże, a jeszcze bardziej
        je realizować. W wolnych chwilach aktywnie organizuję czas, bądź daję
        się pochłonąć książkom.
      </h3>
      <h3>
        Z programowaniem zetknęłam się przypadkowo, lecz od tamtej chwili stało
        się to moją pasją. Dzięki programowaniu staję się niezależna i wolna.
        Uwielbiam rozwój i kreowanie świata.
      </h3>
      <h3>
        Pracuję w Gravity Global jako Frontend Developer. Nie straszna mi praca
        pod presją lub w stresie. Chętnie biorę udział w spotkaniach i pracy
        grupowej.
      </h3>
    </div>
  );
}
