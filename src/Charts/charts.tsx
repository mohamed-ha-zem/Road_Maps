import { motion, AnimatePresence } from "framer-motion";
import React, { useState, useMemo, useCallback } from "react";

// Define interfaces for segment data
interface Segment {
  name: string;
  color: string;
  stats: string;
  tools: string;
  tip: string;
  percentage: string;
}

interface SegmentData {
  startRad: number;
  endRad: number;
  textRad: number;
  outerX1: number;
  outerY1: number;
  outerX2: number;
  outerY2: number;
  innerX1: number;
  innerY1: number;
  innerX2: number;
  innerY2: number;
  textX: number;
  textY: number;
  midAngle: number;
}

interface HoveredSegment {
  global: number | null;
  egypt: number | null;
}

// Global Front-End regions with HEX colors
const globalSegments: Segment[] = [
  { name: "Silicon Valley", color: "#3B82F6 #4F46E5", stats: "5000+ Tech Companies", tools: "React, Next.js", tip: "Focus on scalable UI frameworks", percentage: "20%" },
  { name: "London", color: "#10B981 #0D9488", stats: "1200+ Startups", tools: "Vue.js, Svelte", tip: "Master CSS frameworks", percentage: "10%" },
  { name: "Berlin", color: "#8B5CF6 #6D28D9", stats: "800+ Tech Hubs", tools: "Angular, React", tip: "Explore UI/UX trends", percentage: "8%" },
  { name: "Bangalore", color: "#EF4444 #BE123C", stats: "2000+ Devs", tools: "React, JavaScript", tip: "Contribute to open-source", percentage: "12%" },
  { name: "Tokyo", color: "#F59E0B #B45309", stats: "1500+ Innovators", tools: "Three.js, Vue.js", tip: "Learn 3D animations", percentage: "7%" },
  { name: "New York", color: "#06B6D4 #0E7490", stats: "3000+ Agencies", tools: "React, Gatsby", tip: "Optimize performance", percentage: "9%" },
  { name: "Singapore", color: "#EC4899 #BE185D", stats: "1000+ Tech Firms", tools: "Flutter, React", tip: "Build cross-platform apps", percentage: "6%" },
  { name: "Sydney", color: "#F97316 #C2410C", stats: "700+ Startups", tools: "Svelte, Tailwind", tip: "Master PWAs", percentage: "5%" },
  { name: "Toronto", color: "#4F46E5 #1E3A8A", stats: "900+ Dev Communities", tools: "React, TypeScript", tip: "Join meetups", percentage: "6%" },
  { name: "Stockholm", color: "#14B8A6 #0F766E", stats: "600+ Tech Events", tools: "Svelte, Vue.js", tip: "Experiment with frameworks", percentage: "4%" },
  { name: "Amsterdam", color: "#D946EF #A21CAF", stats: "800+ Innovators", tools: "React, Angular", tip: "Focus on accessibility", percentage: "5%" },
  { name: "Tel Aviv", color: "#22C55E #15803D", stats: "1000+ Startups", tools: "React, Vue.js", tip: "Innovate with micro-frontends", percentage: "6%" },
  { name: "Seoul", color: "#F43F5E #9F1239", stats: "1200+ Tech Firms", tools: "React, Three.js", tip: "Explore game-like UIs", percentage: "7%" },
  { name: "Shenzhen", color: "#10B981 #15803D", stats: "1500+ Hardware-Software", tools: "Vue.js, Flutter", tip: "Integrate hardware with web", percentage: "8%" },
  { name: "São Paulo", color: "#8B5CF6 #6D28D9", stats: "700+ Devs", tools: "React, JavaScript", tip: "Focus on localization", percentage: "4%" },
];

// Egypt Front-End cities with HEX colors
const egyptSegments: Segment[] = [
  { name: "Cairo", color: "#2563EB #3730A3", stats: "1000+ Tech Startups", tools: "React, Vue.js", tip: "Join local hackathons", percentage: "35%" },
  { name: "Giza", color: "#059669 #0F766E", stats: "500+ Dev Communities", tools: "React, Tailwind", tip: "Focus on UI/UX", percentage: "20%" },
  { name: "Alexandria", color: "#7C3AED #6D28D9", stats: "300+ Tech Firms", tools: "Angular, JavaScript", tip: "Build responsive designs", percentage: "15%" },
  { name: "Mansoura", color: "#DC2626 #BE123C", stats: "200+ Freelancers", tools: "Vue.js, Svelte", tip: "Explore freelance opportunities", percentage: "10%" },
  { name: "Tanta", color: "#F97316 #C2410C", stats: "150+ Dev Groups", tools: "React, TypeScript", tip: "Contribute to open-source", percentage: "10%" },
  { name: "Assiut", color: "#06B6D4 #0E7490", stats: "100+ Tech Events", tools: "Flutter, JavaScript", tip: "Attend tech meetups", percentage: "10%" },
];

const RoadmapCircle: React.FC = () => {
  const [hoveredSegment, setHoveredSegment] = useState<HoveredSegment>({ global: null, egypt: null });
  const [selectedSegment, setSelectedSegment] = useState<HoveredSegment>({ global: null, egypt: null });

  // Memoize segment calculations to avoid recalculating on every render
  const calculateSegmentData = useCallback((segments: Segment[]): SegmentData[] => {
    const totalSegments = segments.length;
    const anglePerSegment = 360 / totalSegments;
    const outerRadius = 100; // Outer radius of the donut
    const innerRadius = 50; // Inner radius to create the hole
    return segments.map((_, index) => {
      const startAngle = index * anglePerSegment;
      const endAngle = startAngle + anglePerSegment;
      const midAngle = startAngle + anglePerSegment / 2;
      const startRad = (startAngle * Math.PI) / 180;
      const endRad = (endAngle * Math.PI) / 180;
      const textRad = (midAngle * Math.PI) / 180;
      return {
        startRad,
        endRad,
        textRad,
        outerX1: 100 + outerRadius * Math.cos(startRad),
        outerY1: 100 + outerRadius * Math.sin(startRad),
        outerX2: 100 + outerRadius * Math.cos(endRad),
        outerY2: 100 + outerRadius * Math.sin(endRad),
        innerX1: 100 + innerRadius * Math.cos(endRad),
        innerY1: 100 + innerRadius * Math.sin(endRad),
        innerX2: 100 + innerRadius * Math.cos(startRad),
        innerY2: 100 + innerRadius * Math.sin(startRad),
        textX: 100 + (outerRadius + innerRadius) / 2 * Math.cos(textRad),
        textY: 100 + (outerRadius + innerRadius) / 2 * Math.sin(textRad),
        midAngle,
      };
    });
  }, []);

  // Memoized segment data
  const globalSegmentData = useMemo(() => calculateSegmentData(globalSegments), [calculateSegmentData]);
  const egyptSegmentData = useMemo(() => calculateSegmentData(egyptSegments), [calculateSegmentData]);

  const renderPieChart = useCallback(
    (segments: Segment[], segmentData: SegmentData[], type: "global" | "egypt") => {
      return (
        <div className="flex flex-col items-center w-full max-w-[400px] sm:max-w-[500px] md:max-w-[600px] lg:max-w-[700px] mt-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 drop-shadow-lg">
            {type === "global" ? "Global Front-End Hubs" : "Egypt Front-End Hubs"}
          </h2>
          <motion.svg
            width="100%"
            height="100%"
            viewBox="0 0 200 200"
            initial={{ scale: 0.8, opacity: 0, rotate: -90 }}
            animate={{ scale: 1, opacity: 1, rotate: 0 }}
            transition={{ duration: 1.2, ease: "easeOut", type: "spring", stiffness: 80 }}
            className="relative drop-shadow-2xl"
          >
            {segments.map((segment, index) => (
              <g key={index}>
                <motion.path
                  d={`
                    M${segmentData[index].outerX1},${segmentData[index].outerY1}
                    A100,100 0 0,1 ${segmentData[index].outerX2},${segmentData[index].outerY2}
                    L${segmentData[index].innerX1},${segmentData[index].innerY1}
                    A50,50 0 0,0 ${segmentData[index].innerX2},${segmentData[index].innerY2}
                    Z
                  `}
                  fill={`url(#gradient-${type}-${index})`}
                  // initial={{ scale: 0.8, opacity: 0 }}
                  // animate={{
                  //   scale: hoveredSegment[type] === index || selectedSegment[type] === index ? 1.2 : 1,
                  //   opacity: hoveredSegment[type] === index || selectedSegment[type] === index ? 1 : 0.9,
                  // }}
                  // whileHover={{ scale: 1.2, opacity: 1, transition: { duration: 0.3, type: "spring", stiffness: 120 } }}
                  // transition={{ duration: 0.5, ease: "easeOut", type: "spring", stiffness: 100 }}
                  onMouseEnter={() => setHoveredSegment((prev) => ({ ...prev, [type]: index }))}
                  onMouseLeave={() => setHoveredSegment((prev) => ({ ...prev, [type]: null }))}
                  onClick={() => setSelectedSegment((prev) => ({ ...prev, [type]: index }))}
                  className="hover:cursor-pointer"
                />
                <motion.text
                  x={segmentData[index].textX}
                  y={segmentData[index].textY}
                  textAnchor="middle"
                  fill="#ffffff"
                  fontSize="6"
                  fontWeight="bold"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{
                    opacity: hoveredSegment[type] === index ? 1 : 0.8,
                    scale: hoveredSegment[type] === index ? 1.2 : 1,
                  }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  transform={`rotate(${-segmentData[index].midAngle}, ${segmentData[index].textX}, ${segmentData[index].textY})`}
                >
                  {segment.percentage}
                </motion.text>
                <motion.text
                  x={segmentData[index].textX}
                  y={segmentData[index].textY + 8}
                  textAnchor="middle"
                  fill="#ffffff"
                  fontSize="5"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{
                    opacity: hoveredSegment[type] === index ? 1 : 0.8,
                    scale: hoveredSegment[type] === index ? 1.2 : 1,
                  }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  transform={`rotate(${-segmentData[index].midAngle}, ${segmentData[index].textX}, ${segmentData[index].textY + 8})`}
                >
                  {segment.tools.split(",")[0]}
                </motion.text>
                {/* Gradient Definition */}
                <defs>
                  <linearGradient id={`gradient-${type}-${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{ stopColor: segment.color.split(" ")[0], stopOpacity: 1 }} />
                    <stop offset="100%" style={{ stopColor: segment.color.split(" ")[1], stopOpacity: 1 }} />
                  </linearGradient>
                </defs>
              </g>
            ))}
          </motion.svg>
          <AnimatePresence>
            {hoveredSegment[type] !== null && (
              <motion.div
                className="text-center text-white mt-6 bg-gradient-to-br from-gray-800/90 to-gray-900/90 p-4 sm:p-6 rounded-xl shadow-xl"
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.9 }}
                transition={{ duration: 0.4, ease: "easeOut", type: "spring", stiffness: 120 }}
              >
                <h3 className="text-xl sm:text-2xl font-bold drop-shadow-md">{segments[hoveredSegment[type]!].name}</h3>
                <p className="text-sm sm:text-lg font-medium">{segments[hoveredSegment[type]!].stats}</p>
                <p className="text-xs sm:text-sm font-medium">Contribution: {segments[hoveredSegment[type]!].percentage}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      );
    },
    [hoveredSegment, selectedSegment]
  );

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 via-indigo-900 to-black py-12 px-4">
      {/* Glowing Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/40 to-purple-600/40 blur-3xl"></div>

      <div className="flex flex-col items-center justify-center w-full max-w-7xl mx-auto space-y-16">
        {/* Global Donut Chart */}
        <motion.div
          className="w-full flex justify-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          {renderPieChart(globalSegments, globalSegmentData, "global")}
        </motion.div>

        {/* Egypt Donut Chart */}
        <motion.div
          className="w-full flex justify-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
        >
          {renderPieChart(egyptSegments, egyptSegmentData, "egypt")}
        </motion.div>
      </div>

      {/* Modal for Click Interaction */}
      <AnimatePresence>
        {(selectedSegment.global !== null || selectedSegment.egypt !== null) && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <motion.div
              className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 sm:p-8 rounded-xl shadow-2xl max-w-sm sm:max-w-md w-full text-white"
              initial={{ scale: 0.8, y: 50, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.8, y: 50, opacity: 0 }}
              transition={{ duration: 0.4, type: "spring", stiffness: 120 }}
            >
              {selectedSegment.global !== null && (
                <>
                  <h2 className="text-2xl sm:text-3xl font-bold mb-4">{globalSegments[selectedSegment.global].name}</h2>
                  <p className="text-sm sm:text-lg mb-2"><strong>Stats:</strong> {globalSegments[selectedSegment.global].stats}</p>
                  <p className="text-sm sm:text-lg mb-2"><strong>Popular Tools:</strong> {globalSegments[selectedSegment.global].tools}</p>
                  <p className="text-sm sm:text-lg mb-2"><strong>Contribution:</strong> {globalSegments[selectedSegment.global].percentage}</p>
                  <p className="text-sm sm:text-lg mb-4"><strong>Pro Tip:</strong> {globalSegments[selectedSegment.global].tip}</p>
                </>
              )}
              {selectedSegment.egypt !== null && (
                <>
                  <h2 className="text-2xl sm:text-3xl font-bold mb-4">{egyptSegments[selectedSegment.egypt].name}</h2>
                  <p className="text-sm sm:text-lg mb-2"><strong>Stats:</strong> {egyptSegments[selectedSegment.egypt].stats}</p>
                  <p className="text-sm sm:text-lg mb-2"><strong>Popular Tools:</strong> {egyptSegments[selectedSegment.egypt].tools}</p>
                  <p className="text-sm sm:text-lg mb-2"><strong>Contribution:</strong> {egyptSegments[selectedSegment.egypt].percentage}</p>
                  <p className="text-sm sm:text-lg mb-4"><strong>Pro Tip:</strong> {egyptSegments[selectedSegment.egypt].tip}</p>
                </>
              )}
              <motion.button
                className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold py-2 px-6 rounded-lg transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedSegment({ global: null, egypt: null })}
              >
                Close
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default RoadmapCircle;