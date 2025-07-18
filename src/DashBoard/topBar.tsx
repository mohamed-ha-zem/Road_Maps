import { useContext, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bell, CalendarDays, Grid3X3, Menu, Palette } from "lucide-react";
import { BgContext } from "../Context/bgContext";
import { SidebarContext } from "../Context/sideBarContext";
import React from "react";


export default function TopBar() {
    // const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Sidebar الألوان
    const [isSidebarColorsOpen, setIsSidebarColorsOpen] = useState(false); // Sidebar الألوان
    const [isIconsSidebarOpen, setIsIconsSidebarOpen] = useState(false); // Sidebar الـ icons
    const bgColor = useContext(BgContext);
    const sideBarCourses = useContext(SidebarContext)

    const colors = [
        { name: 'Dark Purple', class: 'bg-gradient-to-br from-purple-900 via-indigo-900 to-gray-900/20' }, // Interstellar (3 ألوان)
        { name: 'Deep Red', class: 'bg-gradient-to-br from-red-800 via-rose-700 to-gray-900' },        // Solaris (3 ألوان)
        { name: 'Dark Blue', class: 'bg-gradient-to-br from-blue-900 via-indigo-800 to-black' },        // Galaxy (3 ألوان)
        { name: 'Dark Green', class: 'bg-gradient-to-br from-green-800 via-emerald-700 to-gray-900' },  // Forest (3 ألوان)
        { name: 'Sandy Gold', class: 'bg-gradient-to-br from-amber-700 via-yellow-600 to-gold-900' },   // Desert (3 ألوان مع لمسة ذهبية)
        { name: 'Teal Luxury', class: 'bg-gradient-to-br from-teal-500 via-cyan-600 to-blue-900' },     // Northern Light (3 ألوان)
        { name: 'Golden Majesty', class: 'bg-gradient-to-br from-yellow-500 via-amber-600 to-gold-800 via-orange-700 to-brown-900' }, // ذهبي فخم (5 ألوان)
        { name: 'Sapphire Elegance', class: 'bg-gradient-to-br from-blue-700 via-indigo-600 to-purple-900 via-gray-800 to-black' },   // زفير فخم (4 ألوان)
        { name: 'Ruby Royale', class: 'bg-gradient-to-br from-red-600 via-rose-500 to-pink-900 via-gray-800 to-black' },             // ياقوت فخم (4 ألوان)
        { name: 'Emerald Prestige', class: 'bg-gradient-to-br from-emerald-500 via-green-600 to-teal-900 via-gray-700 to-black' },     // زمرد فخم (4 ألوان)
        { name: 'Opal Opulence', class: 'bg-gradient-to-br from-white via-gray-300 to-blue-400 via-indigo-500 to-purple-900' },       // أوبال فخم (5 ألوان)
        { name: 'Diamond Gleam', class: 'bg-gradient-to-br from-white via-gray-200 to-silver-500 via-blue-300 to-gray-900' },         // ماسة لامعة (4 ألوان)
        { name: 'Amber Royalty', class: 'bg-gradient-to-br from-yellow-600 via-orange-500 to-amber-900 via-brown-700 to-black' },     // كهرمان ملكي (4 ألوان)
        { name: 'Platinum Shine', class: 'bg-gradient-to-br from-gray-100 via-silver-300 to-gray-600 via-blue-800 to-black' },        // بلاتين لامع (4 ألوان)
        { name: 'Topaz Treasure', class: 'bg-gradient-to-br from-yellow-400 via-amber-500 to-orange-700 via-red-900 to-brown-950' }   // توباز كنوز (4 ألوان)
    ];

    return (
        <div className={` flex flex-col ${bgColor.color} text-white`}>
            {/* TopBar */}
            <motion.header
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6 }}
                className={`w-full px-6 py-3 flex items-center justify-between ${bgColor.color} shadow-lg backdrop-blur-md z-20 fixed`}
            >
                {/* Left Section */}
                <div className="flex items-center gap-3">
                    <button
                        className="md:hidden p-2 W-full rounded-full hover:bg-amber-500/20"
                        onClick={() => setIsIconsSidebarOpen(true)} // فتح Sidebar الـ icons
                    >
                        <Menu className="w-6 h-6" />
                    </button>
                    <h1 className="text-2xl font-poppins font-bold">Codezy</h1>
                    <motion.button
                        whileHover={{scale: 1.1}}
                        whileTap={{scale: .9}}
                        className="p-2 W-full rounded-full cursor-pointer"
                        onClick={() => sideBarCourses.setIsSidebarOpen(!sideBarCourses.isSidebarOpen)} // فتح Sidebar الـ icons
                    >
                        <Menu className="h-fit ml-5 w-fit" />
                    </motion.button>
                </div>

                {/* Center Section */}
                <div className="hidden md:flex items-center gap-5 text-white">
                    <button className="p-2 rounded-full hover:bg-amber-500/20">
                        <Bell className="w-5 h-5" />
                    </button>
                    <button className="p-2 rounded-full hover:bg-amber-500/20">
                        <CalendarDays className="w-5 h-5" />
                    </button>
                    <button className="p-2 rounded-full hover:bg-amber-500/20">
                        <Grid3X3 className="w-5 h-5" />
                    </button>
                    <button
                        className="p-2 rounded-full hover:bg-amber-500/20"
                        onClick={() => setIsSidebarColorsOpen(true)} // فتح Sidebar الألوان
                    >
                        <Palette className="w-5 h-5" />
                    </button>
                    <div className="text-sm">🇬🇧</div>
                </div>

                {/* Right Section */}
                <div className="flex items-center gap-5">
                    <div className="text-white text-sm bg-white/10 px-3 py-1 rounded-xl">
                        {new Date().toLocaleDateString()}
                    </div>
                    <img
                        src="https://i.pravatar.cc/40"
                        alt="Profile"
                        className="w-9 h-9 rounded-full border-2 border-amber-500"
                    />
                </div>
            </motion.header>

            {/* Sidebar للألوان */}
            <AnimatePresence>
                {isSidebarColorsOpen && (
                    <>
                        {/* Overlay */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 0.3 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 bg-black z-40"
                            onClick={() => setIsSidebarColorsOpen(false)}
                        />

                        {/* Sidebar Content */}
                        <motion.div
                            initial={{ x: "100%", opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            exit={{ x: "100%", opacity: 0 }}
                            transition={{ type: "spring", stiffness: 200, damping: 25, duration: 0.5 }}
                            className={`fixed top-0 right-0 h-screen w-64 sm:w-72 ${bgColor.color || 'bg-gray-50'} text-slate-200 z-50 shadow-2xl rounded-l-2xl p-6 border-l-4 border-gray-900/10 backdrop-blur-md`}
                        >
                            <div className="flex justify-between items-center mb-5 border-b border-gray-200 pb-3">
                                <h2 className="text-xl font-bold text-slate-200">Theme Switch</h2>
                                <motion.button
                                    whileHover={{ scale: 1.1, rotate: 90 }}
                                    whileTap={{ scale: 0.9 }}
                                    onClick={() => setIsSidebarColorsOpen(false)}
                                    className="text-2xl text-gray-600 hover:text-gray-900 transition-colors duration-200"
                                >
                                    ✖
                                </motion.button>
                            </div>
                            <div className="flex flex-col gap-3 max-h-[85vh] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100 p-2">
                                {colors.map((c) => (
                                    <motion.button
                                        key={c.class}
                                        onClick={() => {
                                            bgColor.setColor(c.class);
                                            setIsSidebarColorsOpen(false);
                                        }}
                                        initial={{ scale: 0.95, opacity: 0 }}
                                        animate={{ scale: 1, opacity: 1 }}
                                        whileHover={{ scale: 1.05, opacity: 0.95, boxShadow: "0 8px 16px rgba(0,0,0,0.2)" }}
                                        whileTap={{ scale: 0.98 }}
                                        // transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                        className={`${c.class} text-white py-3 px-6 rounded-xl hover:opacity-90 transition-all duration-200 flex items-center justify-between font-semibold text-sm md:text-base cursor-pointer`}
                                    >
                                        <span>{c.name}</span>
                                        <div className="w-6 h-6 rounded-full border-2 border-white/70 " style={{ background: c.class.split(' ')[0] }}></div>
                                    </motion.button>
                                ))}
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>

            {/* Sidebar للـ icons (في الشاشات الصغيرة) */}
            <AnimatePresence>
                {isIconsSidebarOpen && (
                    <>
                        {/* Overlay */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 0.3 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 bg-black z-40"
                            onClick={() => setIsIconsSidebarOpen(false)}
                        />

                        {/* Sidebar Content */}
                        <motion.div
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            className="fixed top-0 right-0 h-screen w-64 sm:w-72 bg-white text-black z-50 shadow-2xl p-5"
                        >
                            <div className="flex justify-between items-center mb-4 border-b pb-2">
                                <h2 className="text-xl font-semibold">الخيارات</h2>
                                <button
                                    onClick={() => setIsIconsSidebarOpen(false)}
                                    className="text-xl text-gray-500 hover:text-black"
                                >
                                    ✖
                                </button>
                            </div>

                            <div className="flex flex-col gap-4">
                                <button
                                    className="flex items-center gap-2 p-2 rounded hover:bg-gray-100"
                                    onClick={() => setIsIconsSidebarOpen(false)}
                                >
                                    <Bell className="w-5 h-5" />
                                    <span>الإشعارات</span>
                                </button>
                                <button
                                    className="flex items-center gap-2 p-2 rounded hover:bg-gray-100"
                                    onClick={() => setIsIconsSidebarOpen(false)}
                                >
                                    <CalendarDays className="w-5 h-5" />
                                    <span>التقويم</span>
                                </button>
                                <button
                                    className="flex items-center gap-2 p-2 rounded hover:bg-gray-100"
                                    onClick={() => setIsIconsSidebarOpen(false)}
                                >
                                    <Grid3X3 className="w-5 h-5" />
                                    <span>الشبكة</span>
                                </button>
                                <button
                                    className="flex items-center gap-2 p-2 rounded hover:bg-gray-100"
                                    onClick={() => {
                                        setIsIconsSidebarOpen(false);
                                        setIsSidebarColorsOpen(true); // فتح Sidebar الألوان
                                    }}
                                >
                                    <Palette className="w-5 h-5" />
                                    <span>تغيير الثيم</span>
                                </button>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>

            {/* Main Content */}
            {/* <main className={`flex-1 p-6 ${bgColor.color}/75`}></main> */}
        </div>
    );
}
