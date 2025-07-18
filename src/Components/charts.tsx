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


export default function RoadmapCircle({globalSegments, egyptSegments}){
  const [hoveredSegment, setHoveredSegment] = useState<HoveredSegment>({ global: null, egypt: null });
  const [selectedSegment, setSelectedSegment] = useState<HoveredSegment>({ global: null, egypt: null });

  // Memoize segment calculations to avoid recalculating on every render
  const calculateSegmentData = useCallback((segments: Segment[]): SegmentData[] => {
    const totalSegments = segments.length;
    const anglePerSegment = 360 / totalSegments; // 24
    const outerRadius = 100; // Outer radius of the donut
    const innerRadius = 50; // Inner radius to create the hole
    return segments.map((_, index) => {
      const startAngle = index * anglePerSegment;          // 0 , 24 , 48 , 72 , 96
      const endAngle = startAngle + anglePerSegment;      // 24 , 48 , 72 , 96 , 120
      const midAngle = startAngle + anglePerSegment / 2; //  12 , 36 , 60 , 84 , 108
      const startRad = (startAngle * Math.PI) / 180;
      const endRad = (endAngle * Math.PI) / 180;
      const textRad = (midAngle * Math.PI) / 180;
      return {
        startRad,
        endRad,
        textRad,
        outerX1: 130 + outerRadius * Math.cos(startRad),
        outerY1: 130 + outerRadius * Math.sin(startRad),
        outerX2: 130 + outerRadius * Math.cos(endRad),
        outerY2: 130 + outerRadius * Math.sin(endRad),
        innerX1: 130 + innerRadius * Math.cos(endRad),
        innerY1: 130 + innerRadius * Math.sin(endRad),
        innerX2: 130 + innerRadius * Math.cos(startRad),
        innerY2: 130 + innerRadius * Math.sin(startRad),
        textX: 130 + (outerRadius + innerRadius) / 2 * Math.cos(textRad),
        textY: 130 + (outerRadius + innerRadius) / 2 * Math.sin(textRad),
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
          <h2 className="text-2xl sm:text-3xl font-bold text-white drop-shadow-lg mt-3">
            {type === "global" ? "Global Front-End Hubs" : "Egypt Front-End Hubs"}
          </h2>
          <motion.svg
            width="110%"
            height="110%"
            viewBox="0 0 260 260"
            initial={{ scale: 0.8, opacity: 0, rotate: -90 }}
            animate={{ scale: 1, opacity: 1, rotate: 0 }}
            transition={{ duration: 3, ease: "easeOut", type: "spring", stiffness: 300 }}
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
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{
                    scale: hoveredSegment[type] === index || selectedSegment[type] === index ? 1.2 : 1,
                    opacity: hoveredSegment[type] === index || selectedSegment[type] === index ? 1 : 0.9,
                  }}
                  whileHover={{ scale: 1.2, opacity: 1, transition: { duration: 0.3, type: "spring", stiffness: 120 } }}
                  transition={{ duration: 0.5, ease: "easeOut", type: "spring", stiffness: 100 }}
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
                className="relative w-fit h-fit text-center text-white bg-gradient-to-br from-gray-800/90 to-gray-900/90 p-4 sm:p-6 rounded-xl shadow-xl"
                style={{bottom: "450px"}}
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
    },[hoveredSegment, selectedSegment]
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
