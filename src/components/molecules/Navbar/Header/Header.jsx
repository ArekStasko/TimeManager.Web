import Icon from "../../../atoms/Icon/Icon";
import Annotation from "../../../atoms/Annotation/Annotation";
import "./header.css";

const Header = () =>{
    const header = (
        <div className="header">
            <div className="main-wrapper">
                <Icon style={"Icon tm-logo"} />
                <Annotation text={"Why TimeManager ?"} />
            </div>
        </div>
    )

    return header
}

export default Header;