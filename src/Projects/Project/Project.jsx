import './Project.css'

export default function Project(props) {
    return (
        <article className="project-container">
            <header className="project-name">{props.project.name}</header>
            <div className="project-image-container">
                <img src={props.project.img.src} alt={props.project.img.alt} />
            </div>
            <div className="project-tech-description">
            <div className="project-tech-used">
                Użyte technologie:
                <br />
                {props.project.technologiesUsed}
            </div>
            <div className="project-description">{props.project.description}</div>
            </div>
        </article>
    )
}