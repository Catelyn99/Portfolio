import Project from './Project/Project'
import styles from './Projects.module.css'
import React from 'react';
import blogImg from './images/blog.png';
import quizImg from './images/quiz.png';
import portfolioImg from './images/portfolio.png';

class Projects extends React.Component {
    projects = [
        {
            id: '1',
            name: 'QUIZ',
            url: 'https://catelyn99.github.io/Quiz/quiz',
            technologiesUsed: 'HTML, CSS, JavaScript',
            description: `Krótki quiz na temat HTML5. W quizie jest możliwość
            podsumowania punktów oraz sprawdzenia poprawnych
            odpowiedzi.`,
            img: {
                src: quizImg,
                alt: 'The image of quiz',
            },
        },
        {
            id: '2',
            name: 'BLOG',
            url: 'https://catelyn99.github.io/Blog/blog',
            technologiesUsed: 'HTML, CSS, JavaScript, Bootstrap',
            description: 'Blog przedstawiający kilka z moich podróży.  Do każdej podróży stworzony jest opis wycieczki, z którego można skorzystać i pooglądać zdjęcia.',
            img: {
                src: blogImg,
                alt: 'The image of blog',
            },
        },
        {
            id: '3',
            name: 'PORTFOLIO',
            url: 'https://catelyn99.github.io/Legacy-Portfolio/myPage',
            technologiesUsed: 'HTML, CSS, JavaScript',
            description: 'Aplikacja przedstawia moje pierwsze portfolio.',
            img: {
                src: portfolioImg,
                alt: 'The image of portfolio',
            },
        }
    ];

    render() {
        const projectsHTML = this.projects.map(item => <Project className={styles.container} key={item.id} project={item} />)

        return (
            <>
            <div className={styles.name}>PROJEKTY</div>
            <div className={styles.container}>
                {projectsHTML}
            </div>
            </>
        );
    }
}

export default Projects;