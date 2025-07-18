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

// Global AI Development regions with HEX colors
const globalSegments: Segment[] = [
  { name: "San Francisco", color: "#1E3A8A #3B82F6", stats: "4000+ AI Companies", tools: "TensorFlow, PyTorch", tip: "Focus on scalable AI models", percentage: "18%" },
  { name: "Oxford", color: "#047857 #10B981", stats: "950+ AI Startups", tools: "Keras, Scikit-learn", tip: "Master generative AI", percentage: "10%" },
  { name: "Munich", color: "#6B21A8 #7C3AED", stats: "750+ AI Hubs", tools: "XGBoost, Hugging Face", tip: "Explore NLP advancements", percentage: "8%" },
  { name: "Pune", color: "#B91C1C #EF4444", stats: "1900+ AI Engineers", tools: "TensorFlow, Pandas", tip: "Build robust AI pipelines", percentage: "12%" },
  { name: "Kyoto", color: "#D97706 #F59E0B", stats: "1100+ Innovators", tools: "PyTorch, ONNX", tip: "Integrate AI with robotics", percentage: "7%" },
  { name: "Boston", color: "#0E7490 #06B6D4", stats: "2600+ AI Agencies", tools: "Keras, FastAI", tip: "Optimize for edge AI", percentage: "9%" },
  { name: "Hong Kong", color: "#BE185D #EC4899", stats: "900+ AI Firms", tools: "TensorFlow, Jupyter", tip: "Develop ethical AI systems", percentage: "6%" },
  { name: "Brisbane", color: "#C2410C #F97316", stats: "600+ AI Startups", tools: "PyTorch, Spark ML", tip: "Master distributed AI training", percentage: "5%" },
  { name: "Montreal", color: "#1E40AF #2563EB", stats: "850+ AI Communities", tools: "Scikit-learn, TensorFlow", tip: "Join AI research groups", percentage: "6%" },
  { name: "Oslo", color: "#0F766E #14B8A6", stats: "500+ AI Events", tools: "Hugging Face, FastAI", tip: "Experiment with AI vision", percentage: "4%" },
  { name: "Barcelona", color: "#A21CAF #D946EF", stats: "650+ Innovators", tools: "PyTorch, Pandas", tip: "Focus on AI governance", percentage: "5%" },
  { name: "Jerusalem", color: "#15803D #22C55E", stats: "800+ AI Startups", tools: "TensorFlow, Keras", tip: "Innovate with autonomous AI", percentage: "5%" },
  { name: "Incheon", color: "#9F1239 #F43F5E", stats: "1000+ AI Firms", tools: "Scikit-learn, PyTorch", tip: "Build AI for smart cities", percentage: "6%" },
  { name: "Guangzhou", color: "#10B981 #15803D", stats: "1500+ AI-Software", tools: "TensorFlow, ONNX", tip: "Integrate with IoT systems", percentage: "7%" },
  { name: "Buenos Aires", color: "#6D28D9 #8B5CF6", stats: "600+ AI Devs", tools: "Pandas, FastAI", tip: "Focus on localized AI solutions", percentage: "4%" },
];

// Egypt AI Development cities with HEX colors
const egyptSegments: Segment[] = [
  { name: "Cairo", color: "#2563EB #1E40AF", stats: "800+ AI Startups", tools: "TensorFlow, PyTorch", tip: "Join local AI hackathons", percentage: "32%" },
  { name: "Giza", color: "#059669 #047857", stats: "350+ AI Communities", tools: "Scikit-learn, Keras", tip: "Optimize AI model training", percentage: "20%" },
  { name: "Alexandria", color: "#7C3AED #6D28D9", stats: "250+ AI Firms", tools: "Pandas, Hugging Face", tip: "Build scalable AI systems", percentage: "15%" },
  { name: "Damietta", color: "#DC2626 #B91C1C", stats: "120+ Freelancers", tools: "TensorFlow, FastAI", tip: "Explore freelance AI projects", percentage: "12%" },
  { name: "Port Said", color: "#F97316 #C2410C", stats: "100+ AI Groups", tools: "PyTorch, Scikit-learn", tip: "Contribute to open-source AI", percentage: "10%" },
  { name: "Hurghada", color: "#06B6D4 #0E7490", stats: "80+ AI Events", tools: "Keras, Jupyter", tip: "Attend AI workshops", percentage: "8%" },
];
export default function RoadmapCircleAI(){
  return(
    <div>
      <RoadmapCircle egyptSegments={egyptSegments} globalSegments={globalSegments}/>
    </div>
  )
};
