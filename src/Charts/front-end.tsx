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

// globel Front-End regions with HEX colors
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



export default function RoadmapCircleFrontEnd(){
  return(
    <div>
      <RoadmapCircle egyptSegments={egyptSegments} globalSegments={globalSegments}/>
    </div>
  )
};
