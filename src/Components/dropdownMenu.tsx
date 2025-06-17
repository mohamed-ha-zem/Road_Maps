import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom"; // افترضت إنك بتستخدم react-router-dom زي الكود الأصلي
import { ChevronDown } from "lucide-react"; // أيقونة للـ dropdown
import React from "react";

const linkVariants = {
    hidden: (i: number) => ({
        opacity: 0,
        y: -20,
        transition: { delay: i * 0.1 }
    }),
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.1 }
    })
    };

    export default function DropdownMenu({ title , links, bgColor }) {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="relative">
        {/* زرار الـ Dropdown */}
        <motion.button
            onClick={toggleDropdown}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-800 text-white hover:bg-gray-700 transition-all duration-200 shadow-md ${bgColor.color} w-full justify-between cursor-pointer`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
        >
            <span>{title}</span>
            <ChevronDown className={`w-5 h-5 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
        </motion.button>

        {/* القائمة المنسدلة */}
        {isOpen && (
            <motion.ul
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute mt-2 bg-gray-900 rounded-lg shadow-lg border border-gray-700 z-10 w-full"
            >
            {links.map((link: any, i: unknown) => (
                <motion.li
                    key={link.path}
                    custom={i}
                    initial="hidden"
                    animate="visible"
                    variants={linkVariants}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="border-b border-gray-700 last:border-b-0"
                >
                    <Link
                        to={link.path}
                        className="block py-3 px-4 text-white hover:bg-gray-800 hover:text-cyan-400 transition-all duration-200"
                        onClick={() => setIsOpen(false)} // يقفل الـ dropdown لما تختار لينك
                    >
                        {link.title}
                    </Link>
                </motion.li>
            ))}
            </motion.ul>
        )}
        </div>
    );
}