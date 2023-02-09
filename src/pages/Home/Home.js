import Navbar from "../../components/organisms/Navbar/navbar"
import "./home.css"

const Home = () => {

    const home = (
        <div className="Home">
            <div className="Background"></div>
            {Navbar()}
        </div>
    );

    return home;
}

export default Home