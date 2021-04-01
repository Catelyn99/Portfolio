import './Header.css';

export default function Header(props) {

    return (
        <div className="header-container">
            <div className="page-name">Katarzyna Sroka</div>
            <div className="page-name-mobile">KS</div>
            <ul className="menu">
                <li onClick={props.scrollToAboutMe} className="menu-item">O MNIE </li>
                <li onClick={props.scrollToCv} className="menu-item">CV</li>
                <li onClick={props.scrollToProjects} className="menu-item">PROJEKTY</li>
            </ul>
        </div>
    );
}