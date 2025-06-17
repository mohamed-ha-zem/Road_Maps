import { Outlet } from "react-router-dom";
import Sidebar from "./sideBar";
// import FrontEnd from "../RoadMaps/front-end";
import React from "react";
import TopBar from "./topBar";

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