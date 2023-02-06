import NonAuthButtons from "../molecules/Navbar/NonAuthButtons";
import Header from "../molecules/Navbar/Header";

function Navbar() {
    return(
        <div className="Navbar">
            {Header()}
            {NonAuthButtons()}
        </div>
    );
}

export default Navbar;