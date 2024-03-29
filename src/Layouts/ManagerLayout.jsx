import Sidebar from "../components/Sidebar";
import {useState} from "react";
import Manager from "../Pages/Manager";
import Calendar from "../Pages/Calendar";
import Kanban from "../Pages/Kanban";
import Statistics from "../Pages/Statistics";


function ManagerLayout(props){

    const [tab, setTab] = useState(0);

    function renderByTab(){
        switch (tab){
            case 0:
                return <Manager />
            case 1:
                return <Calendar />
            case 2:
                return <Kanban />
            case 3:
                return <Statistics />
        }
    }

    return(
        <div className="managerLayout">
            <Sidebar tab={tab} setTab={setTab} />
            <div className="managerLayout__body">
                    {renderByTab()}
            </div>
        </div>
    )
}

export default ManagerLayout;