import './App.css';
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
      <div className="app-container">
        <div className="app-section" ref={refAboutMe}>
          <AboutMe />
        </div>
        <div id="app-cv" className="app-section" ref={refCv}>
          <Cv />
        </div>
        <div className="app-section" ref={refProjects}>
          <Projects /> 
        </div>
      </div>
    </div>
  );
}


export default App;
