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

// Global Game Development regions with HEX colors
const globalSegments: Segment[] = [
  { name: "Los Angeles", color: "#1E3A8A #3B82F6", stats: "3500+ Game Studios", tools: "Unity, Unreal Engine", tip: "Focus on immersive storytelling", percentage: "18%" },
  { name: "Montreal", color: "#047857 #10B981", stats: "1000+ Game Devs", tools: "Godot, Unity", tip: "Master game physics", percentage: "10%" },
  { name: "Helsinki", color: "#6B21A8 #7C3AED", stats: "600+ Indie Studios", tools: "Unity, Cocos2d", tip: "Explore mobile game markets", percentage: "7%" },
  { name: "Pune", color: "#B91C1C #EF4444", stats: "1500+ Devs", tools: "Unreal Engine, Godot", tip: "Optimize for low-end devices", percentage: "11%" },
  { name: "Yokohama", color: "#D97706 #F59E0B", stats: "1200+ Innovators", tools: "Unity, CryEngine", tip: "Incorporate AR/VR", percentage: "8%" },
  { name: "Austin", color: "#0E7490 #06B6D4", stats: "2000+ Game Agencies", tools: "Unreal Engine, Unity", tip: "Focus on multiplayer systems", percentage: "9%" },
  { name: "Bangkok", color: "#BE185D #EC4899", stats: "800+ Tech Firms", tools: "Godot, Phaser", tip: "Develop cross-platform games", percentage: "6%" },
  { name: "Perth", color: "#C2410C #F97316", stats: "500+ Indie Devs", tools: "Unity, GameMaker", tip: "Experiment with procedural generation", percentage: "4%" },
  { name: "Calgary", color: "#1E40AF #2563EB", stats: "700+ Dev Communities", tools: "Unreal Engine, C++", tip: "Join game dev meetups", percentage: "5%" },
  { name: "Stockholm", color: "#0F766E #14B8A6", stats: "450+ Game Events", tools: "Unity, Godot", tip: "Focus on game AI", percentage: "4%" },
  { name: "Barcelona", color: "#A21CAF #D946EF", stats: "600+ Innovators", tools: "Unity, Phaser", tip: "Prioritize game accessibility", percentage: "5%" },
  { name: "Eilat", color: "#15803D #22C55E", stats: "700+ Startups", tools: "Unreal Engine, Unity", tip: "Innovate with game monetization", percentage: "5%" },
  { name: "Daegu", color: "#9F1239 #F43F5E", stats: "900+ Game Firms", tools: "Godot, CryEngine", tip: "Build esports-ready games", percentage: "6%" },
  { name: "Shanghai", color: "#10B981 #15803D", stats: "1300+ Hardware-Software", tools: "Unity, Cocos2d", tip: "Integrate cloud gaming", percentage: "7%" },
  { name: "Santiago", color: "#6D28D9 #8B5CF6", stats: "550+ Devs", tools: "GameMaker, Unity", tip: "Focus on localization", percentage: "4%" },
];

// Egypt Game Development cities with HEX colors
const egyptSegments: Segment[] = [
  { name: "Cairo", color: "#2563EB #1E40AF", stats: "800+ Game Startups", tools: "Unity, Godot", tip: "Join local game jams", percentage: "30%" },
  { name: "Giza", color: "#059669 #047857", stats: "350+ Dev Communities", tools: "Unreal Engine, Phaser", tip: "Optimize game performance", percentage: "18%" },
  { name: "Alexandria", color: "#7C3AED #6D28D9", stats: "250+ Game Studios", tools: "Unity, Cocos2d", tip: "Build engaging UIs", percentage: "15%" },
  { name: "Damietta", color: "#DC2626 #B91C1C", stats: "120+ Freelancers", tools: "GameMaker, Godot", tip: "Explore freelance game projects", percentage: "12%" },
  { name: "Beni Suef", color: "#F97316 #C2410C", stats: "100+ Dev Groups", tools: "Unity, C++", tip: "Contribute to open-source games", percentage: "10%" },
  { name: "Hurghada", color: "#06B6D4 #0E7490", stats: "80+ Game Events", tools: "Unreal Engine, Phaser", tip: "Attend game dev workshops", percentage: "8%" },
];

export default function RoadmapCircleGameDevelopment(){
  return(
    <div>
      <h1>ghewihgiwh</h1>
      <RoadmapCircle egyptSegments={egyptSegments} globalSegments={globalSegments}/>
    </div>
  )
};
