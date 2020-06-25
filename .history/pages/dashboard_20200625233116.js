import { ArgonLeftSidebar } from "../components/ArgonSidebar";
import { TopNavbar } from "../components/TopDefaultNavbar";


 const Dashboard = () => { 
    return (
        <>
            <ArgonLeftSidebar/>
            <div className="main-content" id="panel">
                <TopNavbar/>
            </div>
        </>
    );
}

export default Dashboard;