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

// Global UI/UX Design regions with HEX colors
const globalSegments: Segment[] = [
  { name: "San Francisco", color: "#1E3A8A #3B82F6", stats: "2500+ Design Studios", tools: "Figma, Adobe XD", tip: "Focus on user-centered design", percentage: "16%" },
  { name: "London", color: "#047857 #10B981", stats: "800+ Design Agencies", tools: "Sketch, InVision", tip: "Master prototyping techniques", percentage: "10%" },
  { name: "Berlin", color: "#6B21A8 #7C3AED", stats: "600+ Design Hubs", tools: "Figma, Zeplin", tip: "Explore micro-interactions", percentage: "8%" },
  { name: "Mumbai", color: "#B91C1C #EF4444", stats: "1400+ UI/UX Designers", tools: "Adobe XD, Framer", tip: "Design for diverse audiences", percentage: "12%" },
  { name: "Tokyo", color: "#D97706 #F59E0B", stats: "900+ Innovators", tools: "Sketch, Figma", tip: "Incorporate minimalist design", percentage: "7%" },
  { name: "New York", color: "#0E7490 #06B6D4", stats: "2000+ Design Firms", tools: "InVision, Adobe XD", tip: "Optimize for accessibility", percentage: "9%" },
  { name: "Singapore", color: "#BE185D #EC4899", stats: "750+ Design Firms", tools: "Figma, Webflow", tip: "Build responsive interfaces", percentage: "6%" },
  { name: "Sydney", color: "#C2410C #F97316", stats: "500+ Design Startups", tools: "Sketch, Zeplin", tip: "Master design systems", percentage: "5%" },
  { name: "Toronto", color: "#1E40AF #2563EB", stats: "650+ Design Communities", tools: "Figma, Adobe XD", tip: "Join UI/UX meetups", percentage: "6%" },
  { name: "Copenhagen", color: "#0F766E #14B8A6", stats: "400+ Design Events", tools: "Framer, InVision", tip: "Experiment with motion design", percentage: "4%" },
  { name: "Amsterdam", color: "#A21CAF #D946EF", stats: "550+ Innovators", tools: "Figma, Sketch", tip: "Focus on inclusive design", percentage: "5%" },
  { name: "Tel Aviv", color: "#15803D #22C55E", stats: "700+ Design Startups", tools: "Adobe XD, Webflow", tip: "Innovate with UX research", percentage: "5%" },
  { name: "Seoul", color: "#9F1239 #F43F5E", stats: "850+ Design Firms", tools: "Figma, Zeplin", tip: "Design for immersive experiences", percentage: "6%" },
  { name: "Shanghai", color: "#10B981 #15803D", stats: "1100+ Design-Software", tools: "Sketch, Framer", tip: "Integrate with AR/VR interfaces", percentage: "7%" },
  { name: "Buenos Aires", color: "#6D28D9 #8B5CF6", stats: "450+ Design Devs", tools: "Adobe XD, Figma", tip: "Focus on localized UX", percentage: "4%" },
];

// Egypt UI/UX Design cities with HEX colors
const egyptSegments: Segment[] = [
  { name: "Cairo", color: "#2563EB #1E40AF", stats: "600+ Design Startups", tools: "Figma, Adobe XD", tip: "Join local UI/UX hackathons", percentage: "30%" },
  { name: "Giza", color: "#059669 #047857", stats: "250+ Design Communities", tools: "Sketch, InVision", tip: "Optimize for user flows", percentage: "20%" },
  { name: "Alexandria", color: "#7C3AED #6D28D9", stats: "180+ Design Firms", tools: "Figma, Zeplin", tip: "Build intuitive interfaces", percentage: "15%" },
  { name: "Sohag", color: "#DC2626 #B91C1C", stats: "90+ Freelancers", tools: "Adobe XD, Framer", tip: "Explore freelance UI/UX projects", percentage: "12%" },
  { name: "Tanta", color: "#F97316 #C2410C", stats: "80+ Design Groups", tools: "Sketch, Webflow", tip: "Contribute to open-source design", percentage: "10%" },
  { name: "Aswan", color: "#06B6D4 #0E7490", stats: "60+ Design Events", tools: "Figma, InVision", tip: "Attend UI/UX workshops", percentage: "8%" },
];

export default function RoadmapCircleUIUX(){
  return(
    <div>
      <RoadmapCircle egyptSegments={egyptSegments} globalSegments={globalSegments}/>
    </div>
  )
};
