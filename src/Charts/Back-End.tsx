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

// Global Backend regions with HEX colors
const globalSegments: Segment[] = [
  { name: "San Francisco", color: "#1E40AF #1E3A8A", stats: "4500+ Tech Companies", tools: "Node.js, Express", tip: "Optimize API performance", percentage: "18%" },
  { name: "Dublin", color: "#047857 #065F46", stats: "1000+ Startups", tools: "Django, Flask", tip: "Focus on database optimization", percentage: "9%" },
  { name: "Munich", color: "#6B21A8 #5B21B6", stats: "700+ Tech Hubs", tools: "Spring, Java", tip: "Implement microservices", percentage: "7%" },
  { name: "Hyderabad", color: "#B91C1C #991B1B", stats: "1800+ Devs", tools: "Node.js, Python", tip: "Secure APIs with OAuth", percentage: "11%" },
  { name: "Osaka", color: "#D97706 #B45309", stats: "1300+ Innovators", tools: "Ruby on Rails, Go", tip: "Learn containerization", percentage: "6%" },
  { name: "Boston", color: "#0E7490 #06B6D4", stats: "2500+ Agencies", tools: "Laravel, Node.js", tip: "Use CI/CD pipelines", percentage: "8%" },
  { name: "Hong Kong", color: "#BE185D #DB2777", stats: "900+ Tech Firms", tools: "FastAPI, Django", tip: "Scale with cloud services", percentage: "5%" },
  { name: "Melbourne", color: "#C2410C #EA580C", stats: "600+ Startups", tools: "Spring, Go", tip: "Master serverless architecture", percentage: "4%" },
  { name: "Vancouver", color: "#3730A3 #1E3A8A", stats: "800+ Dev Communities", tools: "Node.js, TypeScript", tip: "Join backend meetups", percentage: "5%" },
  { name: "Oslo", color: "#0F766E #14B8A6", stats: "500+ Tech Events", tools: "Flask, FastAPI", tip: "Experiment with GraphQL", percentage: "3%" },
  { name: "Zurich", color: "#A21CAF #C026D3", stats: "700+ Innovators", tools: "Spring, Java", tip: "Focus on API security", percentage: "4%" },
  { name: "Jerusalem", color: "#15803D #22C55E", stats: "900+ Startups", tools: "Node.js, Go", tip: "Explore event-driven systems", percentage: "5%" },
  { name: "Busan", color: "#9F1239 #F43F5E", stats: "1000+ Tech Firms", tools: "Django, Laravel", tip: "Build scalable backends", percentage: "6%" },
  { name: "Guangzhou", color: "#15803D #10B981", stats: "1400+ Hardware-Software", tools: "Flask, Node.js", tip: "Integrate IoT with APIs", percentage: "7%" },
  { name: "Rio de Janeiro", color: "#6D28D9 #8B5CF6", stats: "600+ Devs", tools: "Ruby on Rails, Python", tip: "Focus on localization", percentage: "3%" },
];

// Egypt Backend cities with HEX colors
const egyptSegments: Segment[] = [
  { name: "Cairo", color: "#1D4ED8 #1E40AF", stats: "900+ Tech Startups", tools: "Node.js, Django", tip: "Join backend hackathons", percentage: "30%" },
  { name: "Giza", color: "#047857 #059669", stats: "450+ Dev Communities", tools: "Laravel, Flask", tip: "Optimize database queries", percentage: "18%" },
  { name: "Alexandria", color: "#6D28D9 #7C3AED", stats: "250+ Tech Firms", tools: "Spring, Java", tip: "Build RESTful APIs", percentage: "14%" },
  { name: "Suez", color: "#B91C1C #DC2626", stats: "180+ Freelancers", tools: "Go, Node.js", tip: "Explore freelance backend projects", percentage: "12%" },
  { name: "Ismailia", color: "#C2410C #F97316", stats: "120+ Dev Groups", tools: "FastAPI, TypeScript", tip: "Contribute to open-source APIs", percentage: "10%" },
  { name: "Luxor", color: "#0E7490 #06B6D4", stats: "90+ Tech Events", tools: "Ruby on Rails, Flask", tip: "Attend backend workshops", percentage: "8%" },
];

export default function RoadmapCircleBackEnd(){
  return(
    <div>
      <RoadmapCircle egyptSegments={egyptSegments} globalSegments={globalSegments}/>
    </div>
  )
};
