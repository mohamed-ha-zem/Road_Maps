import { motion, AnimatePresence } from "framer-motion";
import { useContext } from "react";
import { SidebarContext } from "../Context/sideBarContext";
import { sideBarLinkes } from "./RoadMapLinkes";
import DropdownMenu from "../Components/dropdownMenu";
import { BgContext } from "../Context/bgContext";
import { Questions } from "./questionsLinks";
import React from "react";
import { Cities } from "./cities";
import { CalendarDays } from "lucide-react";
import { Link } from "react-router-dom";

export default function Sidebar() {
  const bgColor = useContext(BgContext);
  const sideBarOpen = useContext(SidebarContext);
  const links = sideBarLinkes();
  const questions = Questions();
  const cities = Cities();

  const sidebarVariants = {
    open: { x: 0, opacity: 1 },
    closed: { x: "-100%", opacity: 0 },
  };


  return (
    <AnimatePresence>
      {sideBarOpen.isSidebarOpen && (
        <motion.div
          className={`fixed top-0 pt-14 z-10 left-0 h-full w-64 ${bgColor.color}/90 p-4 shadow-2xl md:static md:w-64 md:translate-x-0 backdrop-blur-lg rounded-r-xl`}
          variants={sidebarVariants}
          initial="closed"
          animate="open"
          exit="closed"
          transition={{ duration: 0.3 }}
          style={{ position: "absolute" }}
        >
          <nav className="space-y-2 overflow-y-auto h-[calc(100vh-100px)] scrollbar-hide pr-1 mt-5">
            <DropdownMenu title={"Road Maps"} links={links} bgColor={bgColor}/>
            <DropdownMenu title={"Questions"} links={questions} bgColor={bgColor}/>
            <DropdownMenu title={"famous cities"} links={cities} bgColor={bgColor}/>
            <Link
              to={"calender"}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-800 text-white hover:bg-gray-700 transition-all duration-200 shadow-md ${bgColor.color} w-full justify-between cursor-pointer`}
            >
              <h2>Calender</h2>
              <CalendarDays className="w-5 h-5" />
            </Link>
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
