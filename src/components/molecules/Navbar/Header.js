import Icon from "../../atoms/Icon";
import Title from "../../atoms/Title";

function Header(){
    return(
        <div className="header">
            {Icon("")}
            {Title("TimeManager")}
        </div>
    )
}

export default Header;