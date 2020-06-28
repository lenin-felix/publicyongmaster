import { ArgonLeftSidebar } from "../components/ArgonSidebar";
import { TopNavbar } from "../components/TopDefaultNavbar";
import { TopHeader} from "../components/TopHeader";
import { useState } from "react";
import { LightArgonTable } from "../components/ArgonTable";
import { ArgonPopup } from "../components/ArgonPopup";

 const Dashboard = () => { 

    const [myState,myStateAction] = useState({status : true});

    return (
        <>
            <ArgonLeftSidebar/>
            <div className="main-content" id="panel">
                <TopNavbar/>
                <TopHeader/>   
                <ArgonPopup/>
                <LightArgonTable/>
            </div>
        </>
    );
}

export default Dashboard;