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

// Global Blockchain Development regions with HEX colors
const globalSegments: Segment[] = [
  { name: "Zug", color: "#1E3A8A #3B82F6", stats: "2000+ Blockchain Firms", tools: "Ethereum, Solidity", tip: "Focus on smart contract security", percentage: "16%" },
  { name: "Singapore", color: "#047857 #10B981", stats: "850+ Crypto Startups", tools: "Hyperledger, Chainlink", tip: "Master decentralized finance", percentage: "10%" },
  { name: "Dubai", color: "#6B21A8 #7C3AED", stats: "600+ Blockchain Hubs", tools: "Solana, Rust", tip: "Explore NFT development", percentage: "8%" },
  { name: "Bengaluru", color: "#B91C1C #EF4444", stats: "1500+ Blockchain Devs", tools: "Ethereum, Truffle", tip: "Build scalable DApps", percentage: "12%" },
  { name: "Tokyo", color: "#D97706 #F59E0B", stats: "900+ Innovators", tools: "Corda, Solidity", tip: "Integrate with Web3", percentage: "7%" },
  { name: "New York", color: "#0E7490 #06B6D4", stats: "2000+ Crypto Agencies", tools: "Polygon, Hardhat", tip: "Optimize gas efficiency", percentage: "9%" },
  { name: "Hong Kong", color: "#BE185D #EC4899", stats: "800+ Blockchain Firms", tools: "Ethereum, IPFS", tip: "Develop cross-chain solutions", percentage: "6%" },
  { name: "Melbourne", color: "#C2410C #F97316", stats: "500+ Crypto Startups", tools: "Solana, Chainlink", tip: "Master blockchain interoperability", percentage: "5%" },
  { name: "Toronto", color: "#1E40AF #2563EB", stats: "650+ Blockchain Communities", tools: "Hyperledger, Solidity", tip: "Join blockchain meetups", percentage: "6%" },
  { name: "Lisbon", color: "#0F766E #14B8A6", stats: "400+ Blockchain Events", tools: "Ethereum, Rust", tip: "Experiment with DAOs", percentage: "4%" },
  { name: "Berlin", color: "#A21CAF #D946EF", stats: "550+ Innovators", tools: "Polygon, Truffle", tip: "Focus on blockchain security", percentage: "5%" },
  { name: "Tel Aviv", color: "#15803D #22C55E", stats: "700+ Crypto Startups", tools: "Solana, Hardhat", tip: "Innovate with DeFi protocols", percentage: "5%" },
  { name: "Seoul", color: "#9F1239 #F43F5E", stats: "900+ Blockchain Firms", tools: "Ethereum, Corda", tip: "Build tokenized ecosystems", percentage: "6%" },
  { name: "Shanghai", color: "#10B981 #15803D", stats: "1200+ Blockchain-Software", tools: "Hyperledger, IPFS", tip: "Integrate with supply chain", percentage: "7%" },
  { name: "Rio de Janeiro", color: "#6D28D9 #8B5CF6", stats: "450+ Blockchain Devs", tools: "Solidity, Chainlink", tip: "Focus on regional blockchain adoption", percentage: "4%" },
];

// Egypt Blockchain Development cities with HEX colors
const egyptSegments: Segment[] = [
  { name: "Cairo", color: "#2563EB #1E40AF", stats: "650+ Blockchain Startups", tools: "Ethereum, Solidity", tip: "Join local blockchain hackathons", percentage: "30%" },
  { name: "Giza", color: "#059669 #047857", stats: "300+ Blockchain Communities", tools: "Hyperledger, Truffle", tip: "Optimize smart contract development", percentage: "20%" },
  { name: "Alexandria", color: "#7C3AED #6D28D9", stats: "200+ Blockchain Firms", tools: "Solana, Hardhat", tip: "Build secure DApps", percentage: "15%" },
  { name: "Fayoum", color: "#DC2626 #B91C1C", stats: "100+ Freelancers", tools: "Polygon, Chainlink", tip: "Explore freelance blockchain projects", percentage: "12%" },
  { name: "Minya", color: "#F97316 #C2410C", stats: "90+ Blockchain Groups", tools: "Ethereum, Rust", tip: "Contribute to open-source blockchain", percentage: "10%" },
  { name: "Qena", color: "#06B6D4 #0E7490", stats: "70+ Blockchain Events", tools: "Solidity, IPFS", tip: "Attend blockchain workshops", percentage: "8%" },
];
export default function RoadmapCircleBlockChain(){
  return(
    <div>
      <RoadmapCircle egyptSegments={egyptSegments} globalSegments={globalSegments}/>
    </div>
  )
};
