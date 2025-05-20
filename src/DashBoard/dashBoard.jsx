import { Outlet } from "react-router-dom";
import Sidebar from "./sideBar";
import TopBar from "./topBar";
import FrontEnd from "../RoadMaps/front-end";

export default function DashBoard(){
    return(
        <div className="absolute w-full">
            <TopBar/>
            <div >
                <Sidebar/>
                <Outlet/>
            </div>
        </div>
    )
}