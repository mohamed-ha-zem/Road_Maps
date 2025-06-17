export default function QuestionsFrontEnd(){
  const [selectedSkill, setSelectedSkill] = useState<number>(0); // chose the skill 
  const [currentQuestion, setCurrentQuestion] = useState<number>(0); // questions to current skill
  const [userAnswers, setUserAnswers] = useState<(string | null)[]>(Array(quizData[0].questions.length).fill(null));
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [score, setScore] = useState<number | null>(null);
  const [timeLeft, setTimeLeft] = useState<number>(600); // 10 minutes in seconds

  const currentSkill = quizData[selectedSkill];
  const questions = currentSkill.questions;
  const totalQuestions = questions.length;

  // Timer logic
  useEffect((): any =>{
    if (timeLeft > 0 && !isSubmitted) {
      const timer = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            submitQuiz();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [timeLeft, isSubmitted]);

  // Format time as MM:SS
  const formatTime = (seconds: number): string => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  // Handle option selection
  const selectOption = (option: string) => {
    if (!isSubmitted) {
      const newAnswers = [...userAnswers];
      newAnswers[currentQuestion] = option;
      setUserAnswers(newAnswers);
    }
  };

  // Navigate to next question
  const nextQuestion = () => {
    if (currentQuestion < totalQuestions - 1) {
      setCurrentQuestion((prev) => prev + 1);
    }
  };

  // Navigate to previous question
  const prevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion((prev) => prev - 1);
    }
  };

  // Submit quiz and calculate score
  const submitQuiz = () => {
    if (!isSubmitted) {
      const calculatedScore = userAnswers.reduce((acc, answer, index) => {
        return answer === questions[index].answer ? acc + 1 : acc;
      }, 0);
      setScore(calculatedScore);
      setIsSubmitted(true);
    }
  };

  // Reset quiz
  const resetQuiz = () => {
    setUserAnswers(Array(totalQuestions).fill(null));
    setCurrentQuestion(0);
    setIsSubmitted(false);
    setScore(null);
    setTimeLeft(600); // Reset timer to 10 minutes
  };

  // Check if all questions are answered
  const allQuestionsAnswered = userAnswers.every((answer) => answer !== null);

  const bgColor = useContext(BgContext);

  // Animation variants for flicker effect
  const flickerVariants = {
    initial: { opacity: 0.3 },
    animate: {
      opacity: [0.3, 1, 0.5, 1, 0.7, 1],
      transition: { duration: 0.5, times: [0, 0.2, 0.4, 0.6, 0.8, 1] }
    }
  };

  // Animation variants for shake effect
  const shakeVariants = {
    animate: {
      x: [-5, 5, -5, 5, 0],
      transition: { duration: 0.3, times: [0, 0.25, 0.5, 0.75, 1] }
    }
  };

  return (
    <div
      className={`min-h-screen mt-15 bg-gradient-to-b from-black to-red-900 flex flex-col items-center justify-center p-4 ${bgColor.color}/90 font-creepster`}
      dir="rtl"
      style={{ fontFamily: "'Creepster', cursive" }} // Assuming Creepster font is loaded
    >
      {/* Timer */}
      <motion.div
        className="mb-4 text-2xl text-red-500 font-bold"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        الوقت المتبقي: {formatTime(timeLeft)}
      </motion.div>

      {/* Skill selection */}
      <div className="mb-6 flex flex-wrap gap-4 justify-center" dir="ltr">
        {quizData.map((skill, index) => (
          <motion.button
            key={index}
            onClick={() => {
              setSelectedSkill(index);
              setCurrentQuestion(0);
              setUserAnswers(Array(skill.questions.length).fill(null));
              setIsSubmitted(false);
              setScore(null);
              setTimeLeft(600);
            }}
            className={`px-4 py-2 rounded-lg flex items-center gap-2 cursor-pointer ${
              selectedSkill === index ? "bg-red-700 text-white" : "bg-gray-800 text-red-400"
            } shadow-lg hover:bg-red-600 transition-colors duration-300 border border-red-500`}
            whileHover={{ scale: 1.1, rotate: 3 }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            {skill.icon}
            <span>{skill.title}</span>
          </motion.button>
        ))}
      </div>

      {/* Quiz card */}
      <motion.div
        className="bg-gray-900 rounded-lg shadow-2xl p-6 w-full max-w-md border border-red-700"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold flex items-center gap-2 text-red-500">
            {currentSkill.icon}
            {currentSkill.title}
          </h2>
          <span className="text-gray-400">
            {currentQuestion + 1} / {totalQuestions}
          </span>
        </div>

        {/* Question */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentQuestion}
            initial={{ opacity: 0, x: 50, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: -50, scale: 0.9 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="mb-4"
          >
            <p className="text-xl text-white font-semibold">{questions[currentQuestion].question}</p>
          </motion.div>
        </AnimatePresence>

        {/* Options */}
        <div className="space-y-3 mb-4">
          {questions[currentQuestion].options.map((option, index) => (
            <motion.button
              key={index}
              onClick={() => selectOption(option)}
              className={`w-full p-3 rounded-lg text-right border ${
                isSubmitted
                  ? option === questions[currentQuestion].answer
                    ? "bg-green-700 text-white border-green-500"
                    : userAnswers[currentQuestion] === option
                    ? "bg-red-700 text-white border-red-500"
                    : "bg-gray-800 text-gray-300 border-gray-600"
                  : userAnswers[currentQuestion] === option
                  ? "bg-red-600 text-white border-red-500"
                  : "bg-gray-800 text-gray-300 border-gray-600 hover:bg-gray-700"
              } transition-colors duration-300`}
              whileHover={{ scale: 1.03, boxShadow: "0 4px 12px rgba(255,0,0,0.3)" }}
              whileTap={{ scale: 0.97 }}
              variants={isSubmitted && userAnswers[currentQuestion] === option && option !== questions[currentQuestion].answer ? shakeVariants : {}}
              animate={isSubmitted && userAnswers[currentQuestion] === option && option !== questions[currentQuestion].answer ? "animate" : ""}
              disabled={isSubmitted && !allQuestionsAnswered}
            >
              {option}
            </motion.button>
          ))}
        </div>

        {/* Result */}
        {isSubmitted && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="mb-4 p-4 bg-gray-800 rounded-lg text-center border border-red-600"
          >
            <p className="text-2xl font-bold text-red-500">
              درجتك: {score}/{totalQuestions}
            </p>
            <p className="text-gray-300 mt-2">لقد نجوت من الاختبار... أم لا؟</p>
            <motion.button
              onClick={resetQuiz}
              className="mt-4 px-4 py-2 bg-red-700 text-white rounded-lg hover:bg-red-600 transition-colors duration-300 border border-red-500"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              إعادة المحاولة
            </motion.button>
          </motion.div>
        )}

        {/* Navigation buttons */}
        <div className="flex justify-between items-center">
          <motion.button
            onClick={prevQuestion}
            className={`p-2 bg-gray-800 rounded-full hover:bg-red-600 transition-colors duration-300 border border-red-500 ${
              currentQuestion === 0 ? "opacity-50 cursor-not-allowed" : ""
            }`}
            whileHover={{ scale: 1.1, rotate: -5 }}
            whileTap={{ scale: 0.9 }}
            disabled={currentQuestion === 0}
            variants={flickerVariants}
            initial= "initial"
            animate="animate"
          >
            <ChevronLeft className="w-6 h-6 text-red-500" />
          </motion.button>

          {!isSubmitted && allQuestionsAnswered && currentQuestion === totalQuestions - 1 && (
            <motion.button
              onClick={submitQuiz}
              className="px-4 py-2 bg-red-700 text-white rounded-lg flex items-center gap-2 hover:bg-red-600 transition-colors duration-300 border border-red-500"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <CheckCircle className="w-5 h-5 text-white" />
              <span>تسليم الاختبار</span>
            </motion.button>
          )}

          <motion.button
            onClick={nextQuestion}
            className={`p-2 bg-gray-800 rounded-full hover:bg-red-600 transition-colors duration-300 border border-red-500 ${
              currentQuestion === totalQuestions - 1 ? "opacity-50 cursor-not-allowed" : ""
            }`}
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
            disabled={currentQuestion === totalQuestions - 1}
            variants={flickerVariants}
            initial= "initial"
            animate="animate"
          >
            <ChevronRight className="w-6 h-6 text-red-500" />
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};