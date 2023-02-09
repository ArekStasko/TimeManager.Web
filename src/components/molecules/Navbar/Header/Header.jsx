import Icon from "../../../atoms/Icon/Icon";
import Annotation from "../../../atoms/Annotation/Annotation";
import "./header.css";

const Header = () =>{
    const header = (
        <div className="header">
            <div className="main-wrapper">
                {Icon("Icon tm-logo")}
                {Annotation("Why TimeManager ?")}
            </div>
        </div>
    )

    return header
}

export default Header;