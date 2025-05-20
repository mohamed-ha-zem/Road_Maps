import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function LaunchPad() {
  // Animation Variants
    const heroVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
    };

    const ctaVariants = {
        hidden: { scale: 0.9, opacity: 0 },
        visible: { scale: 1, opacity: 1, transition: { delay: 0.1, duration: 0.8 } },
        hover: { scale: 1.1, boxShadow: "0px 0px 15px rgba(255, 215, 0, 0.5)" },
        hover2: {scale: 0.9}
    };

    const bgVariants = {
        initial: { opacity: 0 },
        animate: { opacity: 1, transition: { duration: 1.5 } },
    };

    return (
        <div className="min-h-screen w-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white flex flex-col items-center justify-center relative">
            {/* Background Wave Effect */}
            <motion.div
                className="absolute inset-0 bg-gradient-to-r from-yellow-500/20 to-transparent z-0"
                variants={bgVariants}
                initial="initial"
                animate="animate"
            />

            {/* Hero Section */}
            <div className="relative z-10 text-center px-4">
                <motion.h1
                    className="text-5xl md:text-7xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-yellow-600"
                    variants={heroVariants}
                    initial="hidden"
                    animate="visible"
                >
                    Welcome to LearnMate
                </motion.h1>
                <motion.p
                    className="mt-4 text-lg md:text-xl text-gray-300 max-w-2xl mx-auto"
                    variants={heroVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: 0.2 }}
                >
                Embark on a legendary learning journey with world-class courses tailored for you.
                </motion.p>

                {/* CTA Button */}
                <motion.div
                    className="mt-8 w-fit mx-auto my-8 rounded-full"
                    variants={ctaVariants}
                    initial="hidden"
                    animate="visible"
                    whileHover="hover"
                    whileTap="hover2"
                >
                <Link
                    to="/dashBoard"
                    className="inline-block px-8 py-3 text-lg font-semibold rounded-full bg-gradient-to-r from-yellow-500 to-yellow-600 text-gray-900 shadow-lg hover:from-yellow-600 hover:to-yellow-700 transition-all"
                >
                    Start Your Journey
                </Link>
                </motion.div>
            </div>

            {/* Decorative Elements */}
            <motion.div
                className="absolute bottom-4 left-4 w-32 h-32 bg-yellow-500/20 rounded-full blur-xl z-0"
                animate={{ scale: [1, 1.1, 1], opacity: [0.4, 0.6, 0.4] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
                className="absolute top-4 right-4 w-32 h-32  bg-yellow-500/20 rounded-full blur-xl z-0"
                animate={{ scale: [1, 1.1, 1], opacity: [0.4, 0.6, 0.4] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
        </div>
    );
}

export default LaunchPad;