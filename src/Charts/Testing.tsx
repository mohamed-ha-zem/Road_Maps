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

// Global Mobile App Development regions with HEX colors
const globalSegments: Segment[] = [
  { name: "Seattle", color: "#1E3A8A #2563EB", stats: "4000+ Tech Companies", tools: "Flutter, React Native", tip: "Optimize for cross-platform", percentage: "17%" },
  { name: "Paris", color: "#065F46 #10B981", stats: "1100+ Startups", tools: "Swift, Kotlin", tip: "Focus on native performance", percentage: "10%" },
  { name: "Hamburg", color: "#5B21B6 #7C3AED", stats: "650+ Tech Hubs", tools: "React Native, Ionic", tip: "Explore hybrid apps", percentage: "6%" },
  { name: "Chennai", color: "#991B1B #EF4444", stats: "1700+ Devs", tools: "Flutter, Xamarin", tip: "Build offline-first apps", percentage: "12%" },
  { name: "Kyoto", color: "#B45309 #F59E0B", stats: "1200+ Innovators", tools: "React Native, Swift", tip: "Integrate AR features", percentage: "7%" },
  { name: "Chicago", color: "#0E7490 #06B6D4", stats: "2800+ Agencies", tools: "Kotlin, Flutter", tip: "Prioritize app security", percentage: "9%" },
  { name: "Kuala Lumpur", color: "#BE185D #EC4899", stats: "850+ Tech Firms", tools: "React Native, Flutter", tip: "Develop for low-end devices", percentage: "5%" },
  { name: "Brisbane", color: "#C2410C #F97316", stats: "550+ Startups", tools: "Ionic, Xamarin", tip: "Master progressive web apps", percentage: "4%" },
  { name: "Montreal", color: "#1E40AF #3B82F6", stats: "750+ Dev Communities", tools: "Swift, React Native", tip: "Join mobile dev meetups", percentage: "6%" },
  { name: "Copenhagen", color: "#0F766E #14B8A6", stats: "500+ Tech Events", tools: "Flutter, Kotlin", tip: "Experiment with animations", percentage: "3%" },
  { name: "Lisbon", color: "#A21CAF #D946EF", stats: "600+ Innovators", tools: "React Native, Ionic", tip: "Focus on accessibility", percentage: "4%" },
  { name: "Haifa", color: "#15803D #22C55E", stats: "800+ Startups", tools: "Swift, Flutter", tip: "Innovate with IoT integration", percentage: "5%" },
  { name: "Incheon", color: "#9F1239 #F43F5E", stats: "1100+ Tech Firms", tools: "Kotlin, React Native", tip: "Build gamified apps", percentage: "6%" },
  { name: "Chengdu", color: "#10B981 #15803D", stats: "1300+ Hardware-Software", tools: "Flutter, Xamarin", tip: "Integrate with wearables", percentage: "7%" },
  { name: "Buenos Aires", color: "#6D28D9 #8B5CF6", stats: "650+ Devs", tools: "React Native, Swift", tip: "Focus on localization", percentage: "4%" },
];

// Egypt Mobile App Development cities with HEX colors
const egyptSegments: Segment[] = [
  { name: "Cairo", color: "#1E40AF #2563EB", stats: "850+ Tech Startups", tools: "Flutter, React Native", tip: "Join mobile hackathons", percentage: "32%" },
  { name: "Giza", color: "#059669 #047857", stats: "400+ Dev Communities", tools: "Swift, Kotlin", tip: "Optimize for performance", percentage: "20%" },
  { name: "Alexandria", color: "#7C3AED #6D28D9", stats: "280+ Tech Firms", tools: "React Native, Ionic", tip: "Build responsive UIs", percentage: "15%" },
  { name: "Port Said", color: "#DC2626 #B91C1C", stats: "150+ Freelancers", tools: "Flutter, Xamarin", tip: "Explore freelance app projects", percentage: "12%" },
  { name: "Zagazig", color: "#F97316 #C2410C", stats: "130+ Dev Groups", tools: "Kotlin, React Native", tip: "Contribute to open-source apps", percentage: "11%" },
  { name: "Aswan", color: "#06B6D4 #0E7490", stats: "80+ Tech Events", tools: "Swift, Flutter", tip: "Attend mobile dev workshops", percentage: "10%" },
];

export default function RoadmapCircleTesting(){
  return(
    <div>
      <RoadmapCircle egyptSegments={egyptSegments} globalSegments={globalSegments}/>
    </div>
  )
};
