import styles from './App.module.scss';
import Header from './Header/Header';
import Cv from './CV/Cv';
import Projects from './Projects/Projects';
import AboutMe from './AboutMe/AboutMe';
import { useRef } from 'react';

const App = () => {
  const refAboutMe = useRef(null)
  const refCv = useRef(null)
  const refProjects = useRef(null)

  const scrollToAboutMe = () => refAboutMe.current.scrollIntoView({ behavior: 'smooth' })
  const scrollToCv = () => refCv.current.scrollIntoView({ behavior: 'smooth' })
  const scrollToProjects = () => refProjects.current.scrollIntoView({ behavior: 'smooth' })

  return (
    <div>
      <Header scrollToAboutMe={scrollToAboutMe}
        scrollToCv={scrollToCv}
        scrollToProjects={scrollToProjects} />
      <div className={styles.container}>
        
        <div className={styles.section} ref={refAboutMe}>
          <AboutMe />
        </div>
        <div id={styles.cv} className={styles.section} ref={refCv}>
          <Cv scrollToProjects={scrollToProjects} />
        </div>
        <div id={styles.projects} className={styles.section} ref={refProjects}>
          <Projects /> 
        </div>
      </div>
      <footer>
        Katarzyna Sroka © 2021
      </footer>
    </div>
  );
}


export default App;
