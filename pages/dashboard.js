import { ArgonLeftSidebar } from "../components/ArgonSidebar";
import { TopNavbar } from "../components/TopDefaultNavbar";
import { TopHeader} from "../components/TopHeader";

 const Dashboard = () => { 
    return (
        <>
            <ArgonLeftSidebar/>
            <div className="main-content" id="panel">
                <TopNavbar/>
                <TopHeader/>   
            </div>
        </>
    );
}

export default Dashboard;