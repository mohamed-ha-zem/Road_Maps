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

// Global DevOps regions with HEX colors
const globalSegments: Segment[] = [
  { name: "San Francisco", color: "#1E3A8A #3B82F6", stats: "3200+ Tech Companies", tools: "Docker, Kubernetes", tip: "Automate CI/CD pipelines", percentage: "17%" },
  { name: "London", color: "#047857 #10B981", stats: "950+ DevOps Teams", tools: "Jenkins, GitLab", tip: "Master infrastructure as code", percentage: "10%" },
  { name: "Berlin", color: "#6B21A8 #7C3AED", stats: "650+ Cloud Hubs", tools: "Terraform, Ansible", tip: "Focus on cloud orchestration", percentage: "8%" },
  { name: "Bengaluru", color: "#B91C1C #EF4444", stats: "1700+ DevOps Engineers", tools: "AWS, Azure", tip: "Secure cloud deployments", percentage: "12%" },
  { name: "Tokyo", color: "#D97706 #F59E0B", stats: "1000+ Innovators", tools: "Kubernetes, Helm", tip: "Implement observability", percentage: "7%" },
  { name: "New York", color: "#0E7490 #06B6D4", stats: "2300+ Tech Agencies", tools: "GitHub Actions, CircleCI", tip: "Optimize deployment frequency", percentage: "9%" },
  { name: "Singapore", color: "#BE185D #EC4899", stats: "850+ Tech Firms", tools: "Docker, Prometheus", tip: "Monitor system performance", percentage: "6%" },
  { name: "Sydney", color: "#C2410C #F97316", stats: "550+ Startups", tools: "Terraform, Jenkins", tip: "Adopt GitOps practices", percentage: "5%" },
  { name: "Toronto", color: "#1E40AF #2563EB", stats: "700+ DevOps Communities", tools: "Ansible, AWS", tip: "Join DevOps meetups", percentage: "6%" },
  { name: "Copenhagen", color: "#0F766E #14B8A6", stats: "450+ Tech Events", tools: "Kubernetes, Grafana", tip: "Experiment with chaos engineering", percentage: "4%" },
  { name: "Amsterdam", color: "#A21CAF #D946EF", stats: "600+ Innovators", tools: "Azure, Terraform", tip: "Focus on zero-downtime deployments", percentage: "5%" },
  { name: "Tel Aviv", color: "#15803D #22C55E", stats: "750+ Startups", tools: "Jenkins, Kubernetes", tip: "Innovate with serverless CI/CD", percentage: "5%" },
  { name: "Seoul", color: "#9F1239 #F43F5E", stats: "950+ Tech Firms", tools: "AWS, Docker", tip: "Build resilient systems", percentage: "6%" },
  { name: "Shenzhen", color: "#10B981 #15803D", stats: "1100+ Hardware-Software", tools: "Helm, Ansible", tip: "Integrate CI/CD with IoT", percentage: "7%" },
  { name: "Lima", color: "#6D28D9 #8B5CF6", stats: "500+ Devs", tools: "GitLab, Terraform", tip: "Focus on regional scalability", percentage: "4%" },
];

// Egypt DevOps cities with HEX colors
const egyptSegments: Segment[] = [
  { name: "Cairo", color: "#2563EB #1E40AF", stats: "700+ DevOps Startups", tools: "Docker, Jenkins", tip: "Join local DevOps hackathons", percentage: "30%" },
  { name: "Giza", color: "#059669 #047857", stats: "300+ Dev Communities", tools: "Kubernetes, Terraform", tip: "Optimize infrastructure automation", percentage: "20%" },
  { name: "Alexandria", color: "#7C3AED #6D28D9", stats: "200+ Tech Firms", tools: "AWS, GitLab", tip: "Build scalable CI/CD pipelines", percentage: "15%" },
  { name: "Sohag", color: "#DC2626 #B91C1C", stats: "100+ Freelancers", tools: "Ansible, Azure", tip: "Explore freelance DevOps projects", percentage: "12%" },
  { name: "Tanta", color: "#F97316 #C2410C", stats: "90+ Dev Groups", tools: "GitHub Actions, Docker", tip: "Contribute to open-source DevOps tools", percentage: "10%" },
  { name: "Aswan", color: "#06B6D4 #0E7490", stats: "70+ Tech Events", tools: "Terraform, Prometheus", tip: "Attend DevOps workshops", percentage: "8%" },
];

export default function RoadmapCircleDevops(){
  return(
    <div>
      <RoadmapCircle egyptSegments={egyptSegments} globalSegments={globalSegments}/>
    </div>
  )
};
