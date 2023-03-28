import Sidebar from "../components/Menu/Sidebar";
import Navbar from "../components/Menu/Navbar";


function ManagerLayout(props){

    return(
        <div className="manager">
            <Navbar />
            <Sidebar />
            {props.Component}
        </div>
    )
}

export default ManagerLayout;