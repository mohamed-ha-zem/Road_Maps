import { motion, AnimatePresence } from "framer-motion";
import { useContext } from "react";
import { Menu } from "lucide-react";
import { SidebarContext } from "../Context/sideBarContext";
import { sideBarLinkes } from "./RoadMapLinkes";
import { Link, NavLink } from "react-router-dom";
import DropdownMenu from "../Components/dropdownMenu";
import { BgContext } from "../Context/bgContext";
import { Questions } from "./questionsLinks";

export default function Sidebar() {
  const bgColor = useContext(BgContext);
  const sideBarOpen = useContext(SidebarContext);
  const links = sideBarLinkes();
  const questions = Questions();

  const sidebarVariants = {
    open: { x: 0, opacity: 1 },
    closed: { x: "-100%", opacity: 0 },
  };

  const linkVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.05,
        duration: 0.3,
      },
    }),
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
          <div className="flex items-center justify-between mb-6">
            <button
              className="md:hidden p-2 rounded-full hover:bg-amber-500/20"
              onClick={sideBarOpen.toggleSidebar} // Use toggle function from context
            >
              <Menu className="w-6 h-6 rotate-180 text-white" />
            </button>
          </div>
          <nav className="space-y-2 overflow-y-auto h-[calc(100vh-100px)] scrollbar-hide pr-1">
            <DropdownMenu title={"Road Maps"} links={links} bgColor={bgColor}/>
            <DropdownMenu title={"Questions"} links={questions} bgColor={bgColor}/>
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
