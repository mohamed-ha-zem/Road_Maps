import { AnimatePresence, motion } from "framer-motion";
import { useContext, useEffect, useState } from "react";
import { BgContext } from "../Context/bgContext";
import React from "react";

export default function Roadmap({title, sections}){
    interface SelectedSkill {
        title: string,
        description: string[],
        resources: {
        arabicFree: {
            name: string,
            url: string
        }[],
        englishFree: {
            name: string,
            url: string
        }[], 
        paid: {
            name: string,
            url: string
        }[] , 
        }
    }

    const [completedSkills , setCompletedSkills] = useState({})
    const [selectedSkill , setSelectedSkill] = useState<SelectedSkill | null>(null)

    useEffect(() => {
        const savedSkills = localStorage.getItem("completedSkills")
        if(savedSkills){
            setCompletedSkills(JSON.parse(savedSkills))
        }
    } , [])

    function toggleSkillCompletion(skillTitle: string){
        setCompletedSkills((prev) => {
        const newSkills = {
            ...prev,
            [skillTitle]: !prev[skillTitle]
        }
        localStorage.setItem("completedSkills" , JSON.stringify(newSkills))
        return newSkills
        })
    }

    function openMenu(skill){
        setSelectedSkill(skill)
    }
    function closeMenu(){
        setSelectedSkill(null)
    }

    const menuVariants = {
        hidden: {opacity: 0 , x: 100},
        visible: {opacity: 1 , x: 0 , transition: { duration: 0.3, ease: "easeOut" }},
        exit: {opacity: 0 , x: 100 , transition: { duration: 0.3 }}
    }

    const bgColor = useContext(BgContext)

    const styles = `
    /* إخفاء شريط التمرير مع الإبقاء على إمكانية التمرير */
    ::-webkit-scrollbar {
        display: none;
    }
    .no-scrollbar {
        -ms-overflow-style  /* IE and Edge */
        scrollbar-width: none; /* Firefox */
    }

    /* تأثير glow للبطاقات */
    .glow-effect {
        position: relative;
        transition: all 0.3s ease;
    }
    .glow-effect:hover {
        transform: translateY(-5px);
        box-shadow: 0 0 20px rgba(255, 255, 255, 0.2);
    }
    .glow-effect::before {
        content: '';
        position: absolute;
        top: -2px;
        left: -2px;
        right: -2px;
        bottom: -2px;
        border-radius: 12px;
        background: linear-gradient(45deg, #ff6b6b, #4ecdc4);
        opacity: 0;
        z-index: -1;
        transition: opacity 0.3s ease;
    }
    .glow-effect:hover::before {
        opacity: 0.7;
    }
    `;


    return (
        <>
        <style>{styles}</style>
        <div className={`${bgColor.color}d-flex pr-5 pl-5 pb-10`}>
            <div className="h-14"></div>
            <motion.h2 
                className="text-transparent bg-clip-text bg-linear-to-r from-amber-400 to-cyan-400 text-5xl font-extrabold text-center p-4"
                initial={{y: -50 , opacity: 0}}
                animate={{y: 0 , opacity: 1}}
                transition={{duration: .8}}
            >
            {title} Roadmap 🚀
            </motion.h2>
            {
            sections.map((section , sectionIdx) => (
                <motion.div 
                    key={sectionIdx} 
                    initial={{y: -100 , opacity: 0}}
                    viewport={{once: true , amount: .2}}
                    whileInView={{y: 0 , opacity: 1}}
                    transition={{duration: .6 , delay: .1}}
                    className="border-2 border-gray-700 bg-gray-900/50 m-5 flex flex-col rounded-2xl text-white p-5 mb-15"
                >
                <div className="m-5 flex gap-1.5 items-center">
                    <h2 className="text-3xl mr-2">{section.icon}</h2>
                    <h2 className="text-3xl font-bold">{section.title}</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {
                    section.children.map((skill , skillIdx) => (
                        <motion.div 
                            key={skillIdx} 
                            className="bg-gray-950/50 m-4 p-7 pl-10 rounded-xl flex flex-col border border-gray-500 cursor-pointer"
                            initial={{scale: 0 , opacity: 0}}
                            viewport={{ once: true, amount: .1}}
                            whileInView={{scale: 1 , opacity: 1}}
                            transition={{duration: .8 , delay: skillIdx * .4}}
                            onClick={() => openMenu(skill)}
                        >
                        <div className="flex gap-2 items-center justify-between">
                            <div className="flex gap-2 items-center">
                                <h2>{skill.icon}</h2>
                                <h2 className="text-yellow-500 text-xl font-bold">{skill.title}</h2>
                            </div>
                            <button
                                className={`${completedSkills[skill.title]? "bg-green-500" : "bg-gray-500" } text-amber-50 rounded-2xl p-1 w-fit transition-all duration-100`}
                                onClick={(e) => {
                                    e.stopPropagation()
                                    toggleSkillCompletion(skill.title)
                                }}
                            >
                            {completedSkills[skill.title] ? "مكتمل" : "غير مكتمل"}
                            </button>
                        </div>
                        <ul>
                            <h3 className="text-gray-600">مخرجات التعلم</h3>
                            {
                            skill.learningOutcomes.map((li , liIdx) => (
                                <motion.li 
                                    key={liIdx} 
                                    className="list-disc text-gray-300 text-sm"
                                    initial={{opacity: 0 , y: -10}}
                                    whileInView={{opacity: 1 , y: 0}}
                                    transition={{duration: .3 , delay: liIdx * .05}}
                                >
                                {li}
                                </motion.li>
                            ))
                            }
                        </ul>
                        </motion.div>
                    ))
                    }
                </div>
                </motion.div>
            ))
            }
            <AnimatePresence>
            {
                selectedSkill && (
                <motion.div 
                    variants={menuVariants}
                    initial="hidden"
                    whileInView="visible"
                    exit="exit"
                    transition={{duration: .5}}
                    className="fixed top-20 right-0 bg-gray-800 rounded-2xl p-10 w-120 text-white h-160 overflow-y-auto no-scrollbar"
                >
                    <div className="flex justify-between">
                    <h2 className="text-2xl text-yellow-400 font-bold">{selectedSkill.title}</h2>
                    <motion.button
                        whileHover={{rotate: 180 , scale: 1.3}}
                        whileTap={{scale: .7 , rotate: 0}}
                        transition={{duration: .2}}
                    >
                        <svg className="w-7 h-7 cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24" onClick={() => closeMenu()}>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </motion.button>
                    </div>
                    <div>
                    <h4 className="m-3 mr-0 text-gray-500" dir="rtl">عن {selectedSkill.title}</h4>
                    <ul className="list-disc" dir="rtl">
                        {
                        selectedSkill.description.map((desc , descIdx) => (
                            <motion.li 
                                key={descIdx} 
                                className="list-disc text-gray-300 text-sm"
                                initial={{opacity: 0 , y: -10}}
                                viewport={{once: false}}
                                whileInView={{opacity: 1 , y: 0}}
                                transition={{duration: .3 , delay: descIdx * .05}}
                            >
                            {desc}
                            </motion.li>
                        )) 
                        }
                    </ul>
                    </div>
                    <div>
                    <div>
                        <h4 className="m-3 mr-0 text-gray-500 mb-6" dir="rtl">مصادر عربية مجانية</h4>
                        <div className="flex flex-wrap gap-2 justify-end">
                        {selectedSkill.resources.arabicFree.map((resource , idx) => (
                            <motion.a 
                                key={idx} 
                                target="_blank"
                                rel="noopener noreferrer"
                                href={resource.url} 
                                className="bg-gradient-to-r from-cyan-600 to-blue-600 px-3 py-1 rounded-lg text-sm text-white hover:from-cyan-500 hover:to-blue-500 transition-colors duration-200"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3, delay: idx * 0.05 }}
                            >
                            {resource.name}
                            </motion.a>
                        ))}
                        </div>
                    </div>
                    <div>
                        <h4 className="m-3 mr-0 text-gray-500 mb-6" dir="rtl">مصادر اجنبيه مجانية</h4>
                        <div className="flex flex-wrap gap-2 justify-end">
                        {selectedSkill.resources.englishFree.map((resource , idx) => (
                            <motion.a 
                                key={idx} 
                                target="_blank"
                                rel="noopener noreferrer"
                                href={resource.url} 
                                className="bg-gradient-to-r from-cyan-600 to-blue-600 px-3 py-1 rounded-lg text-sm text-white hover:from-cyan-500 hover:to-blue-500 transition-colors duration-200"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3, delay: idx * 0.05 }}
                            >
                            {resource.name}
                            </motion.a>
                        ))}
                        </div>
                    </div>
                    <div>
                        <h4 className="m-3 mr-0 text-gray-500 mb-6" dir="rtl">مصادر اجنبيه مدفوعه</h4>
                        <div className="flex flex-wrap gap-2 justify-end">
                        {selectedSkill.resources.paid.map((resource , idx) => (
                            <motion.a 
                                key={idx} 
                                target="_blank"
                                rel="noopener noreferrer"
                                href={resource.url} 
                                className="bg-gradient-to-r from-cyan-600 to-blue-600 px-3 py-1 rounded-lg text-sm text-white hover:from-cyan-500 hover:to-blue-500 transition-colors duration-200"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3, delay: idx * 0.05 }}
                            >
                            {resource.name}
                            </motion.a>
                        ))}
                        </div>
                    </div>
                    </div>
                </motion.div>
                )
            }
            </AnimatePresence>
        </div>
        </>
    )
}