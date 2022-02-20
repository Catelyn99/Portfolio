import Project from "./Project/Project";
import styles from "./Projects.module.scss";
import React from "react";
import blogImg from "../../images/blog.png";
import quizImg from "../../images/quiz.png";
import hospitalWard from "../../images/hospital-ward.jpg";
import vendorsCookie from "../../images/vendors-cookie.jpg";

class Projects extends React.Component {
  projects = [
    {
      id: 1,
      name: "Hospital - ward",
      url: "https://catelyn99.github.io/Hospital-ward/",
      technologiesUsed: "HTML, SASS, JavaScript, React",
      description:
        "Aplikacja jest odzwierciedleniem oddziału szpitalnego. Celem jest zwiększenie efektywności pracy wśród personelu medycznego oraz poprawa komunikacji na oddziale. Każdy pracownik mający aplikację może zrobić sobie szybki podgląd na zlecenia i uwagi dotyczące pacjentów.  Aplikacja cały czas jest w procesie tworzenia.",
      img: {
        src: hospitalWard,
        alt: "The image of hospital-ward",
      },
    },
    {
      id: 2,
      name: "VENDORS-COOKIE",
      url: "https://catelyn99.github.io/Vendors-cookie/",
      technologiesUsed: "HTML, CSS, JavaScript",
      description:
        'Aplikacja pobiera z zewnętrznego API listę vendorów i wyświetla je w popupie. Użytkownik ma możliwość wyboru i akceptacji lub odrzucenia wybranych opcji.  Wybrane dane zapisywane są w pliku cookie na 24h. W tym czasie "popup" nie będzie wyświetlał się po ponownym otwarciu strony.',
      img: {
        src: vendorsCookie,
        alt: "The image of vendors-cookie",
      },
    },
    {
      id: 3,
      name: "QUIZ",
      url: "https://catelyn99.github.io/Quiz/quiz",
      technologiesUsed: "HTML, CSS, JavaScript",
      description: `Krótki quiz na temat HTML5.  W quizie jest możliwość podsumowania punktów oraz sprawdzenia poprawnych odpowiedzi.`,
      img: {
        src: quizImg,
        alt: "The image of quiz",
      },
    },
  ];

  render() {
    const projectsHTML = this.projects.map((item) => (
      <Project key={item.id} project={item} />
    ));

    return (
      <>
        <div className={styles.name}>Projekty</div>
        <div className={styles.container}>{projectsHTML}</div>
      </>
    );
  }
}

export default Projects;
