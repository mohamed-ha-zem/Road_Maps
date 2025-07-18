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

// Global Embedded Systems regions with HEX colors
const globalSegments: Segment[] = [
  { name: "Shenzhen", color: "#1E3A8A #3B82F6", stats: "3500+ Hardware Firms", tools: "Arduino, Embedded C", tip: "Focus on IoT integration", percentage: "18%" },
  { name: "Munich", color: "#047857 #10B981", stats: "900+ Embedded Startups", tools: "Raspberry Pi, RTOS", tip: "Master real-time systems", percentage: "10%" },
  { name: "Bangalore", color: "#6B21A8 #7C3AED", stats: "700+ Embedded Hubs", tools: "STM32, FreeRTOS", tip: "Optimize low-power designs", percentage: "8%" },
  { name: "Tokyo", color: "#B91C1C #EF4444", stats: "1500+ Embedded Engineers", tools: "ESP32, ARM Cortex", tip: "Secure firmware development", percentage: "12%" },
  { name: "Seoul", color: "#D97706 #F59E0B", stats: "1000+ Innovators", tools: "Embedded C, Zephyr", tip: "Explore automotive systems", percentage: "7%" },
  { name: "Boston", color: "#0E7490 #06B6D4", stats: "2000+ Embedded Agencies", tools: "Arduino, Keil", tip: "Integrate with cloud platforms", percentage: "9%" },
  { name: "Singapore", color: "#BE185D #EC4899", stats: "800+ Tech Firms", tools: "Raspberry Pi, MPLAB", tip: "Develop for smart devices", percentage: "6%" },
  { name: "Eindhoven", color: "#C2410C #F97316", stats: "500+ Embedded Startups", tools: "STM32, Embedded Linux", tip: "Master sensor integration", percentage: "5%" },
  { name: "Austin", color: "#1E40AF #2563EB", stats: "650+ Embedded Communities", tools: "ESP32, IAR Workbench", tip: "Join embedded meetups", percentage: "6%" },
  { name: "Helsinki", color: "#0F766E #14B8A6", stats: "450+ Embedded Events", tools: "Arduino, FreeRTOS", tip: "Experiment with edge computing", percentage: "4%" },
  { name: "Zurich", color: "#A21CAF #D946EF", stats: "550+ Innovators", tools: "Embedded C, Zephyr", tip: "Focus on hardware security", percentage: "5%" },
  { name: "Tel Aviv", color: "#15803D #22C55E", stats: "700+ Embedded Startups", tools: "Raspberry Pi, ARM Cortex", tip: "Innovate with wearable tech", percentage: "5%" },
  { name: "Osaka", color: "#9F1239 #F43F5E", stats: "900+ Tech Firms", tools: "STM32, Keil", tip: "Build for industrial automation", percentage: "6%" },
  { name: "Guangzhou", color: "#10B981 #15803D", stats: "1300+ Hardware-Software", tools: "ESP32, Embedded Linux", tip: "Integrate with 5G networks", percentage: "7%" },
  { name: "Sao Paulo", color: "#6D28D9 #8B5CF6", stats: "450+ Embedded Devs", tools: "Arduino, MPLAB", tip: "Focus on regional IoT solutions", percentage: "4%" },
];

// Egypt Embedded Systems cities with HEX colors
const egyptSegments: Segment[] = [
  { name: "Cairo", color: "#2563EB #1E40AF", stats: "600+ Embedded Startups", tools: "Arduino, Embedded C", tip: "Join local embedded hackathons", percentage: "30%" },
  { name: "Giza", color: "#059669 #047857", stats: "250+ Embedded Communities", tools: "Raspberry Pi, RTOS", tip: "Optimize for low-power systems", percentage: "20%" },
  { name: "Alexandria", color: "#7C3AED #6D28D9", stats: "180+ Embedded Firms", tools: "STM32, FreeRTOS", tip: "Build secure embedded solutions", percentage: "15%" },
  { name: "Ismailia", color: "#DC2626 #B91C1C", stats: "90+ Freelancers", tools: "ESP32, Keil", tip: "Explore freelance embedded projects", percentage: "12%" },
  { name: "Suez", color: "#F97316 #C2410C", stats: "80+ Embedded Groups", tools: "Embedded C, Zephyr", tip: "Contribute to open-source embedded tools", percentage: "10%" },
  { name: "Luxor", color: "#06B6D4 #0E7490", stats: "60+ Embedded Events", tools: "Raspberry Pi, MPLAB", tip: "Attend embedded workshops", percentage: "8%" },
];
export default function RoadmapCircleEmbedded(){
  return(
    <div>
      <RoadmapCircle egyptSegments={egyptSegments} globalSegments={globalSegments}/>
    </div>
  )
};
