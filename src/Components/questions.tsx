import { AnimatePresence, motion } from "framer-motion";
import React, { useContext, useEffect, useState } from "react";
import { BgContext } from "../Context/bgContext";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Questions({quizData}){
    const bgColor = useContext(BgContext)
    const [time , setTime] = useState(600)
    const [selectedSkill, setSelectedSkill] = useState(0)
    const [currentQuestion , setCurrentQuestion] = useState(0)
    const [isSubmitted , setIsSubmitted] = useState(false)
    const [userAnswers , setUserAnswers] = useState(Array(quizData[0].questions.length).fill(null))
    const [score , setScore] = useState(0)

    const currentSkill = quizData[selectedSkill]
    const questions = currentSkill.questions
    const totalQuestions = questions.length

    // reduce the timer
    useEffect(() : any => {
        if (time > 0 && !isSubmitted){
            const timer = setInterval(() => {
                setTime((prev) => {
                    if (prev <= 1){
                        submitQuiz()
                        return 0
                    }
                    return prev - 1
                })
            }, 1000)
            return () => clearInterval(timer)
        }
    }, [time])

    // Timer Funtion
    function formatTime(time: number){
        const minutes = Math.floor(time / 60 )
        const secs = time % 60
        return `${minutes.toString().padStart(2 , "0")}:${secs.toString().padStart(2 , "0")}` // => 00:00
    }

    function prevQuestion(){
        if(currentQuestion + 1 > 1){
            setCurrentQuestion((prev) => prev - 1)
        }
    }
    function nextQuestion(){
        if(currentQuestion < totalQuestions - 1 ){
            setCurrentQuestion((prev) => prev + 1)
        }
    }

    function selectOption(option){
        if (!isSubmitted){
            const newAnswers = [...userAnswers]
            newAnswers[currentQuestion] = option;
            setUserAnswers(newAnswers)
        }
    }

    function submitQuiz(){
        if (!isSubmitted){
            const calculatedScore = userAnswers.reduce((acc , answer , index) => {
                return questions[index].answer === answer ? acc + 1 : acc
            } , 0)
            setScore(calculatedScore)
            setCurrentQuestion(0)
            setIsSubmitted(true)
        }
    }

    function resetQuiz(){
        setTime(600)
        setScore(0)
        setUserAnswers(Array(quizData[0].questions.length).fill(null))
        setCurrentQuestion(0)
        setIsSubmitted(false)
    }

    const allQuestionsAnswered = userAnswers.every((answer) => answer !== null)

    return(
        <div 
            className={`pt-18 text-center min-h-screen ${bgColor.color} flex flex-col items-center justify-start`}
            dir="rtl"
            style={{ fontFamily: "'Creepster', cursive" }} // Assuming Creepster font is loaded
        >
            {/* Timer */}
            <motion.div
                initial={{scale:.2 , opacity: 0}}
                animate={{scale: 1 , opacity: 1}}
                transition={{duration: .5}}
                className="font-bold text-2xl text-blue-500 text-center mb-3"
            >
                الوقت المتبقي {formatTime(time)}
            </motion.div>

            {/* show the skills */}
            <div className="flex flex-wrap justify-center m-6" dir="ltr">
                {quizData.map((skill , skillIdx) => (
                    <motion.button
                        initial={{opacity: 0 , y: -30}}
                        animate={{opacity: 1 , y: 0}}
                        transition={{duration: .3 , delay: .1 * skillIdx}}
                        key={skillIdx}
                        onClick={() => {
                            setSelectedSkill(skillIdx)
                            setCurrentQuestion(0);
                            setUserAnswers(Array(skill.questions.length).fill(null));
                            setIsSubmitted(false);
                            setScore(0);
                            setTime(600);
                        }}
                        className={`flex cursor-pointer rounded-lg p-3 m-2 border border-blue-500
                        ${selectedSkill === skillIdx ? "bg-blue-700 text-white" : "bg-gray-800 text-blue-500"}
                        shadow-lg hover:bg-blue-700 hover:text-white transition-colors duration-300`}
                    >
                        <span className="mr-1">{skill.icon}</span>
                        <span>{skill.title}</span>
                    </motion.button>
                ))}
            </div>

            {/* quiz Data Skill */}
            <motion.div 
                initial={{scale: .7 , opacity: 0}}
                animate={{scale: 1 , opacity: 1}}
                transition={{duration: .8}}
                className="w-full bg-gray-900 rounded-lg text-white border border-blue-500 p-4 max-w-md m-6"
            >
                {/* title skill */}
                <div className="flex justify-between items-center mb-3">
                    <div className="flex justify-center items-center">
                        <span>{currentSkill.icon}</span>
                        <span className="text-blue-500 font-extrabold text-2xl mr-1">{currentSkill.title}</span>
                    </div>
                    <span className="text-gray-400">{`${currentQuestion + 1} / ${totalQuestions}`}</span>
                </div>

                {/* question skill */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentQuestion}   
                        initial={{opacity: 0 , x: 50 , scale: .9}}
                        animate={{opacity: 1 , x: 0 , scale: 1}}
                        exit={{ opacity: 0, x: -50, scale: 0.9 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="mb-4"
                    >
                        <h1 
                            className="font-extrabold text-xl"
                            dir="rtl"
                        >
                            {currentSkill.questions[currentQuestion].question}
                        </h1>
                    </motion.div>
                </AnimatePresence>

                {/* options skill */}
                <div className="flex flex-col justify-center items-center">
                    {currentSkill.questions[currentQuestion].options.map((option , optionIdx) => (
                        <motion.button
                            key={optionIdx}
                            whileHover={{ scale: 1.03, "boxShadow": "1px 9px 10px -3px #0089ed91" }}
                            whileTap={{ scale: 0.97 }}
                            className={`rounded-lg p-3 m-3 border border-gray-400 w-full cursor-pointer
                                ${
                                    isSubmitted ? 
                                        questions[currentQuestion].answer === option ? "bg-green-500 text-white" 
                                        : userAnswers[currentQuestion] === option ? "bg-red-600 text-white" 
                                        : "bg-gray-800 text-white"
                                    : userAnswers[currentQuestion] === option ? "bg-blue-600 text-white"
                                    : "bg-gray-800 text-white hover:bg-blue-400 duration-300"
                                }
                            `}
                            onClick={() => selectOption(option)}
                        >
                            {option}
                        </motion.button>
                    ))}
                </div>
                {/* Result */}
                {
                    isSubmitted && (
                        <motion.div
                            initial={{x: 30 , opacity: 0}}
                            animate={{x: 0 , opacity: 1}}
                            className="bg-gray-800 border border-blue-500 rounded-lg py-5 m-2 mb-4"
                        >
                            <p className="font-bold text-2xl text-blue-500">درجتك {`${totalQuestions} / ${score}`}</p>
                            <p>لقد نجوت من الاختبار... أم لا؟</p>
                            <motion.button
                                onClick={resetQuiz}
                                whileHover={{scale: 1.1}}
                                whileTap={{scale: .9}}
                                className="bg-blue-500 border border-gray-300 rounded-lg p-2 m-2"
                            >
                                اعادة المحاوله
                            </motion.button>
                        </motion.div>
                    )
                }

                {/* Navigation buttons */}
                <div className="flex justify-between ">
                    <div>
                        <motion.button
                            onClick={prevQuestion}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className={`bg-gray-700 border border-blue-500 text-blue-500 p-3 rounded-full hover:bg-blue-600 hover:text-white duration-300 ${currentQuestion + 1 <= 1 ? "cursor-not-allowed" : "cursor-pointer"}`}
                        >
                            <ChevronLeft className="w-6 h-6" />
                        </motion.button>
                    </div>
                    {!isSubmitted && allQuestionsAnswered && currentQuestion === totalQuestions - 1 &&
                    <div>
                        <motion.button
                            onClick={submitQuiz}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            transition={{duration: .1}}
                            className="cursor-pointer bg-gray-700 text-blue-500 p-3 rounded-full hover:bg-blue-600 hover:text-white duration-300"
                        >
                            تسليم الاختبار
                        </motion.button>
                    </div>
                    }
                    <div>
                        <motion.button
                            onClick={nextQuestion}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            transition={{duration: .1}}
                            className={`bg-gray-700 border border-blue-500 text-blue-500 p-3 rounded-full hover:bg-blue-600 hover:text-white duration-300 ${currentQuestion + 1 >= totalQuestions ? "cursor-not-allowed" : "cursor-pointer"}`}
                        >
                            <ChevronRight className="w-6 h-6 " />
                        </motion.button>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}