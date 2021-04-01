import './Project.css'

export default function Project(props) {
    return (
        <a href={props.project.url} className="project-container">
            <div className="project-image-container">
                <img src={props.project.img.src} alt={props.project.img.alt} />
            </div>
            <h2 className="project-name">{props.project.name}</h2>
            <div className="project-tech-description">
            <div className="project-tech-used">
                Użyte technologie:
                <br />
                {props.project.technologiesUsed}
            </div>
            <div className="project-description">{props.project.description}</div>
            </div>
        </a>
    )
}