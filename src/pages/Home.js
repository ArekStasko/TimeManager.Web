import Navbar from "../components/organisms/navbar"
import "../styles/Home/home.css"

function Home(){
    return(
        <div className="Home">
            {Navbar()}
        </div>
    )
}

export default Home