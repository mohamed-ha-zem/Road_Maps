import React from "react";
import RoadmapCircle from "../Components/charts";

// Define interfaces for segment data
interface Segment {
  name: string;
  color: string;
  stats: string;
  tools: string;
  tip: string;
  percentage: string;
}

// Global Data Science regions with HEX colors
const globalSegments: Segment[] = [
  { name: "Boston", color: "#1E3A8A #3B82F6", stats: "2800+ Data Firms", tools: "Python, TensorFlow", tip: "Focus on machine learning models", percentage: "16%" },
  { name: "London", color: "#047857 #10B981", stats: "1000+ Data Startups", tools: "R, Pandas", tip: "Master data visualization", percentage: "10%" },
  { name: "Munich", color: "#6B21A8 #7C3AED", stats: "600+ AI Hubs", tools: "PyTorch, Scikit-learn", tip: "Explore deep learning", percentage: "7%" },
  { name: "Hyderabad", color: "#B91C1C #EF4444", stats: "1800+ Data Scientists", tools: "Python, Spark", tip: "Work on big data analytics", percentage: "12%" },
  { name: "Kyoto", color: "#D97706 #F59E0B", stats: "900+ Innovators", tools: "TensorFlow, Jupyter", tip: "Integrate AI with IoT", percentage: "8%" },
  { name: "San Diego", color: "#0E7490 #06B6D4", stats: "2200+ Data Agencies", tools: "R, Tableau", tip: "Optimize data pipelines", percentage: "9%" },
  { name: "Singapore", color: "#BE185D #EC4899", stats: "850+ Tech Firms", tools: "Python, Power BI", tip: "Build predictive models", percentage: "6%" },
  { name: "Melbourne", color: "#C2410C #F97316", stats: "550+ Data Startups", tools: "Spark, Pandas", tip: "Master cloud-based analytics", percentage: "5%" },
  { name: "Vancouver", color: "#1E40AF #2563EB", stats: "700+ Data Communities", tools: "TensorFlow, R", tip: "Join data science meetups", percentage: "6%" },
  { name: "Stockholm", color: "#0F766E #14B8A6", stats: "450+ Data Events", tools: "PyTorch, Scikit-learn", tip: "Experiment with NLP", percentage: "4%" },
  { name: "Lisbon", color: "#A21CAF #D946EF", stats: "550+ Innovators", tools: "Python, Tableau", tip: "Focus on data ethics", percentage: "4%" },
  { name: "Tel Aviv", color: "#15803D #22C55E", stats: "800+ AI Startups", tools: "Jupyter, Spark", tip: "Innovate with computer vision", percentage: "5%" },
  { name: "Seoul", color: "#9F1239 #F43F5E", stats: "950+ Data Firms", tools: "TensorFlow, Power BI", tip: "Build scalable AI systems", percentage: "6%" },
  { name: "Beijing", color: "#10B981 #15803D", stats: "1300+ AI-Software", tools: "Pandas, PyTorch", tip: "Integrate with cloud platforms", percentage: "7%" },
  { name: "Sao Paulo", color: "#6D28D9 #8B5CF6", stats: "600+ Data Devs", tools: "R, Python", tip: "Focus on data localization", percentage: "4%" },
];

// Egypt Data Science cities with HEX colors
const egyptSegments: Segment[] = [
  { name: "Cairo", color: "#2563EB #1E40AF", stats: "700+ Data Startups", tools: "Python, TensorFlow", tip: "Join local data science hackathons", percentage: "32%" },
  { name: "Giza", color: "#059669 #047857", stats: "300+ Data Communities", tools: "R, Pandas", tip: "Optimize data processing", percentage: "20%" },
  { name: "Alexandria", color: "#7C3AED #6D28D9", stats: "200+ Data Firms", tools: "PyTorch, Tableau", tip: "Build robust ML models", percentage: "15%" },
  { name: "Mansoura", color: "#DC2626 #B91C1C", stats: "100+ Freelancers", tools: "Spark, Jupyter", tip: "Explore freelance data projects", percentage: "12%" },
  { name: "Zagazig", color: "#F97316 #C2410C", stats: "90+ Data Groups", tools: "Python, Scikit-learn", tip: "Contribute to open-source AI", percentage: "10%" },
  { name: "Luxor", color: "#06B6D4 #0E7490", stats: "70+ Data Events", tools: "R, Power BI", tip: "Attend data science workshops", percentage: "8%" },
];

export default function RoadmapCircleDataScience(){
  return(
    <div>
      <RoadmapCircle egyptSegments={egyptSegments} globalSegments={globalSegments}/>
    </div>
  )
};
