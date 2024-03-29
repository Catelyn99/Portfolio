import styles from "./App.module.scss";
import Header from "./components/Header/Header";
import Cv from "./components/CV/Cv";
import Projects from "./components/Projects/Projects";
import AboutMe from "./components/AboutMe/AboutMe";
import { useRef } from "react";
import Navigation from "./components/Navigation/Navigation";

const App = () => {
  const refAboutMe = useRef(null);
  const refCv = useRef(null);
  const refProjects = useRef(null);

  const scrollToAboutMe = () =>
    refAboutMe.current.scrollIntoView({ behavior: "smooth" });
  const scrollToCv = () => refCv.current.scrollIntoView({ behavior: "smooth" });
  const scrollToProjects = () =>
    refProjects.current.scrollIntoView({ behavior: "smooth" });

  return (
    <>
      <Navigation
        scrollToAboutMe={scrollToAboutMe}
        scrollToCv={scrollToCv}
        scrollToProjects={scrollToProjects}
      />
      <Header />
      <main className={styles.container}>
        <section className={styles.aboutMe} ref={refAboutMe}>
          <AboutMe />
        </section>
        <section className={styles.cv} ref={refCv}>
          <Cv scrollToProjects={scrollToProjects} />
        </section>
        <section className={styles.projects} ref={refProjects}>
          <Projects />
        </section>
      </main>
      <footer>Katarzyna Sroka © 2022</footer>
    </>
  );
};

export default App;
