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

// Global Machine Learning regions with HEX colors
const globalSegments: Segment[] = [
  { name: "Silicon Valley", color: "#1E3A8A #3B82F6", stats: "3500+ AI Companies", tools: "TensorFlow, PyTorch", tip: "Focus on deep learning models", percentage: "18%" },
  { name: "Cambridge", color: "#047857 #10B981", stats: "900+ AI Startups", tools: "Scikit-learn, Keras", tip: "Master model optimization", percentage: "10%" },
  { name: "Berlin", color: "#6B21A8 #7C3AED", stats: "700+ AI Hubs", tools: "XGBoost, LightGBM", tip: "Explore reinforcement learning", percentage: "8%" },
  { name: "Bangalore", color: "#B91C1C #EF4444", stats: "2000+ ML Engineers", tools: "TensorFlow, Pandas", tip: "Build scalable AI pipelines", percentage: "12%" },
  { name: "Tokyo", color: "#D97706 #F59E0B", stats: "1000+ Innovators", tools: "PyTorch, FastAI", tip: "Integrate AI with robotics", percentage: "7%" },
  { name: "New York", color: "#0E7490 #06B6D4", stats: "2500+ AI Agencies", tools: "Keras, Scikit-learn", tip: "Optimize for real-time inference", percentage: "9%" },
  { name: "Singapore", color: "#BE185D #EC4899", stats: "850+ AI Firms", tools: "TensorFlow, Jupyter", tip: "Develop explainable AI", percentage: "6%" },
  { name: "Sydney", color: "#C2410C #F97316", stats: "600+ AI Startups", tools: "PyTorch, Spark ML", tip: "Master distributed training", percentage: "5%" },
  { name: "Toronto", color: "#1E40AF #2563EB", stats: "800+ AI Communities", tools: "Scikit-learn, TensorFlow", tip: "Join ML research groups", percentage: "6%" },
  { name: "Helsinki", color: "#0F766E #14B8A6", stats: "500+ AI Events", tools: "FastAI, XGBoost", tip: "Experiment with generative AI", percentage: "4%" },
  { name: "Paris", color: "#A21CAF #D946EF", stats: "650+ Innovators", tools: "PyTorch, Pandas", tip: "Focus on AI ethics", percentage: "5%" },
  { name: "Haifa", color: "#15803D #22C55E", stats: "750+ AI Startups", tools: "TensorFlow, Keras", tip: "Innovate with computer vision", percentage: "5%" },
  { name: "Seoul", color: "#9F1239 #F43F5E", stats: "1000+ AI Firms", tools: "Scikit-learn, PyTorch", tip: "Build AI for autonomous systems", percentage: "6%" },
  { name: "Shanghai", color: "#10B981 #15803D", stats: "1400+ AI-Software", tools: "TensorFlow, Spark ML", tip: "Integrate with edge AI", percentage: "7%" },
  { name: "Mexico City", color: "#6D28D9 #8B5CF6", stats: "550+ AI Devs", tools: "Pandas, FastAI", tip: "Focus on localized AI models", percentage: "4%" },
];

// Egypt Machine Learning cities with HEX colors
const egyptSegments: Segment[] = [
  { name: "Cairo", color: "#2563EB #1E40AF", stats: "750+ AI Startups", tools: "TensorFlow, PyTorch", tip: "Join local ML hackathons", percentage: "31%" },
  { name: "Giza", color: "#059669 #047857", stats: "350+ AI Communities", tools: "Scikit-learn, Keras", tip: "Optimize model training", percentage: "20%" },
  { name: "Alexandria", color: "#7C3AED #6D28D9", stats: "250+ AI Firms", tools: "Pandas, XGBoost", tip: "Build robust AI pipelines", percentage: "15%" },
  { name: "Ismailia", color: "#DC2626 #B91C1C", stats: "120+ Freelancers", tools: "TensorFlow, FastAI", tip: "Explore freelance ML projects", percentage: "12%" },
  { name: "Suez", color: "#F97316 #C2410C", stats: "100+ AI Groups", tools: "PyTorch, Scikit-learn", tip: "Contribute to open-source AI", percentage: "10%" },
  { name: "Aswan", color: "#06B6D4 #0E7490", stats: "80+ AI Events", tools: "Keras, Jupyter", tip: "Attend ML workshops", percentage: "8%" },
];

export default function RoadmapCircleMachineLearning(){
  return(
    <div>
      <RoadmapCircle egyptSegments={egyptSegments} globalSegments={globalSegments}/>
    </div>
  )
};
