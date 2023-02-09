import NonAuthButtons from "../../molecules/Navbar/NonAuthButtons/NonAuthButtons";
import Header from "../../molecules/Navbar/Header/Header";
import "./navbar.css"
const Navbar = () => {

    const navbar =(
        <div className="Navbar">
            {Header()}
            {NonAuthButtons()}
        </div>
    );

    return navbar;
}

export default Navbar;