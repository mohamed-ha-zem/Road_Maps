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

// Global Database Development regions with HEX colors
const globalSegments: Segment[] = [
  { name: "Austin", color: "#1E3A8A #3B82F6", stats: "3000+ Tech Companies", tools: "PostgreSQL, MongoDB", tip: "Optimize query performance", percentage: "16%" },
  { name: "Dublin", color: "#047857 #10B981", stats: "900+ Data Firms", tools: "MySQL, Redis", tip: "Master database indexing", percentage: "9%" },
  { name: "Frankfurt", color: "#6B21A8 #7C3AED", stats: "700+ Data Centers", tools: "Oracle, SQL Server", tip: "Implement data warehousing", percentage: "7%" },
  { name: "Mumbai", color: "#B91C1C #EF4444", stats: "1600+ Devs", tools: "MongoDB, Cassandra", tip: "Secure database access", percentage: "12%" },
  { name: "Osaka", color: "#D97706 #F59E0B", stats: "1100+ Innovators", tools: "PostgreSQL, Firebase", tip: "Explore NoSQL databases", percentage: "8%" },
  { name: "Seattle", color: "#0E7490 #06B6D4", stats: "2500+ Data Agencies", tools: "MySQL, DynamoDB", tip: "Use cloud-native databases", percentage: "10%" },
  { name: "Jakarta", color: "#BE185D #EC4899", stats: "800+ Tech Firms", tools: "Redis, MongoDB", tip: "Scale with distributed systems", percentage: "6%" },
  { name: "Adelaide", color: "#C2410C #F97316", stats: "500+ Startups", tools: "SQL Server, PostgreSQL", tip: "Master database migrations", percentage: "4%" },
  { name: "Ottawa", color: "#1E40AF #2563EB", stats: "650+ Dev Communities", tools: "MySQL, Oracle", tip: "Join database meetups", percentage: "5%" },
  { name: "Oslo", color: "#0F766E #14B8A6", stats: "400+ Data Events", tools: "MongoDB, Firebase", tip: "Experiment with graph databases", percentage: "3%" },
  { name: "Madrid", color: "#A21CAF #D946EF", stats: "600+ Innovators", tools: "PostgreSQL, Cassandra", tip: "Focus on data integrity", percentage: "4%" },
  { name: "Herzliya", color: "#15803D #22C55E", stats: "700+ Startups", tools: "MySQL, Redis", tip: "Optimize for big data", percentage: "5%" },
  { name: "Busan", color: "#9F1239 #F43F5E", stats: "1000+ Data Firms", tools: "MongoDB, SQL Server", tip: "Build scalable data pipelines", percentage: "6%" },
  { name: "Hangzhou", color: "#10B981 #15803D", stats: "1200+ Hardware-Software", tools: "Firebase, PostgreSQL", tip: "Integrate with cloud storage", percentage: "7%" },
  { name: "Bogotá", color: "#6D28D9 #8B5CF6", stats: "550+ Devs", tools: "MySQL, MongoDB", tip: "Focus on data localization", percentage: "4%" },
];

// Egypt Database Development cities with HEX colors
const egyptSegments: Segment[] = [
  { name: "Cairo", color: "#2563EB #1E40AF", stats: "750+ Data Startups", tools: "MySQL, MongoDB", tip: "Join database hackathons", percentage: "31%" },
  { name: "Giza", color: "#059669 #047857", stats: "350+ Dev Communities", tools: "PostgreSQL, Redis", tip: "Optimize for query speed", percentage: "19%" },
  { name: "Alexandria", color: "#7C3AED #6D28D9", stats: "220+ Data Firms", tools: "SQL Server, Firebase", tip: "Build robust schemas", percentage: "16%" },
  { name: "Fayoum", color: "#DC2626 #B91C1C", stats: "100+ Freelancers", tools: "MongoDB, Cassandra", tip: "Explore freelance data projects", percentage: "11%" },
  { name: "Minya", color: "#F97316 #C2410C", stats: "90+ Dev Groups", tools: "MySQL, PostgreSQL", tip: "Contribute to open-source databases", percentage: "10%" },
  { name: "Qena", color: "#06B6D4 #0E7490", stats: "70+ Data Events", tools: "Redis, Firebase", tip: "Attend database workshops", percentage: "9%" },
];
export default function RoadmapCircleDataBase(){
  return(
    <div>
      <RoadmapCircle egyptSegments={egyptSegments} globalSegments={globalSegments}/>
    </div>
  )
};
