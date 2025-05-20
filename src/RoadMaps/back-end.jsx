import { motion } from "framer-motion";
import { Code, Database, Server, GitBranch, Lock, Workflow, TestTube, Rocket, FileTerminal, Globe, Layers, Shield, Key } from "lucide-react";
import { useContext } from "react";
import { BgContext } from "../Context/bgContext";

const sections = [
  {
    title: "الأساسيات",
    icon: <Code className="w-6 h-6 text-amber-400" />,
    children: [
      {
        title: "Node.js",
        icon: <FileTerminal className="w-5 h-5 text-green-400" />,
        projects: ["Simple Server", "File Uploader", "CLI Tool", "Chat Server"],
        resources: [
          { name: "Elzero Web School", url: "https://www.youtube.com/@ElzeroWebSchool" },
          { name: "أكاديمية ترميز", url: "https://www.youtube.com/@TarmeezAcademy" }
        ]
      },
      {
        title: "Express.js",
        icon: <Server className="w-5 h-5 text-blue-400" />,
        projects: ["REST API", "CRUD App", "Blog Backend", "Task Manager"],
        resources: [
          { name: "Elzero Web School", url: "https://www.youtube.com/@ElzeroWebSchool" },
          { name: "Codezilla", url: "https://www.youtube.com/@Codezilla" }
        ]
      },
      {
        title: "HTTP & APIs",
        icon: <Globe className="w-5 h-5 text-yellow-300" />,
        projects: ["Weather API", "Movie Database API", "GitHub API Client", "Proxy Server"],
        resources: [
          { name: "Elzero Web School", url: "https://www.youtube.com/@ElzeroWebSchool" },
          { name: "Web Dev Simplified", url: "https://www.youtube.com/@WebDevSimplified" }
        ]
      },
    ]
  },
  {
    title: "قواعد البيانات",
    icon: <Database className="w-6 h-6 text-blue-500" />,
    children: [
      {
        title: "SQL (MySQL/PostgreSQL)",
        icon: <Database className="w-5 h-5 text-blue-400" />,
        projects: ["E-commerce Database", "Blog Database", "User Management System"],
        resources: [
          { name: "Elzero Web School", url: "https://www.youtube.com/@ElzeroWebSchool" },
          { name: "أكاديمية ترميز", url: "https://www.youtube.com/@TarmeezAcademy" }
        ]
      },
      {
        title: "NoSQL (MongoDB)",
        icon: <Layers className="w-5 h-5 text-green-400" />,
        projects: ["Task Manager", "Chat App Backend", "Product Catalog"],
        resources: [
          { name: "Codezilla", url: "https://www.youtube.com/@Codezilla" },
          { name: "The Net Ninja", url: "https://www.youtube.com/@NetNinja" }
        ]
      },
      {
        title: "ORM (Prisma/Sequelize)",
        icon: <GitBranch className="w-5 h-5 text-indigo-400" />,
        projects: ["Blog with Prisma", "E-commerce with Sequelize", "User Dashboard"],
        resources: [
          { name: "Mohamed Elhawary", url: "https://www.youtube.com/@MohamedElhawary" },
          { name: "Web Dev Simplified", url: "https://www.youtube.com/@WebDevSimplified" }
        ]
      }
    ]
  },
  {
    title: "المصادقة والأمان",
    icon: <Lock className="w-6 h-6 text-red-400" />,
    children: [
      {
        title: "JWT & Authentication",
        icon: <Key className="w-5 h-5 text-red-300" />,
        projects: ["Login System", "Role-based Auth", "OAuth Integration"],
        resources: [
          { name: "Elzero Web School", url: "https://www.youtube.com/@ElzeroWebSchool" },
          { name: "The Net Ninja", url: "https://www.youtube.com/@NetNinja" }
        ]
      },
      {
        title: "Security Best Practices",
        icon: <Shield className="w-5 h-5 text-orange-400" />,
        projects: ["Secure API", "Input Validation", "Rate Limiter"],
        resources: [
          { name: "Codezilla", url: "https://www.youtube.com/@Codezilla" },
          { name: "Academind", url: "https://www.youtube.com/@academind" }
        ]
      }
    ]
  },
  {
    title: "بنية التطبيقات",
    icon: <Layers className="w-6 h-6 text-purple-400" />,
    children: [
      {
        title: "MVC Architecture",
        icon: <Layers className="w-5 h-5 text-purple-300" />,
        projects: ["MVC Blog", "Task Manager MVC", "E-commerce Backend"],
        resources: [
          { name: "Elzero Web School", url: "https://www.youtube.com/@ElzeroWebSchool" },
          { name: "Traversy Media", url: "https://www.youtube.com/@TraversyMedia" }
        ]
      },
      {
        title: "Microservices",
        icon: <GitBranch className="w-5 h-5 text-indigo-400" />,
        projects: ["Microservices Chat App", "Order Service", "User Service"],
        resources: [
          { name: "Mohamed Elhawary", url: "https://www.youtube.com/@MohamedElhawary" },
          { name: "FreeCodeCamp", url: "https://www.youtube.com/@freecodecamp" }
        ]
      }
    ]
  },
  {
    title: "GraphQL",
    icon: <Globe className="w-6 h-6 text-pink-400" />,
    children: [
      {
        title: "GraphQL Basics",
        icon: <Globe className="w-5 h-5 text-pink-300" />,
        projects: ["GraphQL Blog API", "User Query System", "Product Catalog"],
        resources: [
          { name: "Codezilla", url: "https://www.youtube.com/@Codezilla" },
          { name: "The Net Ninja", url: "https://www.youtube.com/@NetNinja" }
        ]
      }
    ]
  },
  {
    title: "State Management",
    icon: <Workflow className="w-6 h-6 text-purple-400" />,
    children: [
      {
        title: "Redis / Message Queues",
        icon: <Workflow className="w-5 h-5 text-purple-300" />,
        projects: ["Caching System", "Task Queue", "Notification System"],
        resources: [
          { name: "Mohamed Elhawary", url: "https://www.youtube.com/@MohamedElhawary" },
          { name: "Academind", url: "https://www.youtube.com/@academind" }
        ]
      }
    ]
  },
  {
    title: "Testing",
    icon: <TestTube className="w-6 h-6 text-red-400" />,
    children: [
      {
        title: "Unit & Integration Testing",
        icon: <TestTube className="w-5 h-5 text-red-300" />,
        projects: ["Test API Endpoints", "Test Database Queries", "Test Auth"],
        resources: [
          { name: "Web Dev Simplified", url: "https://www.youtube.com/@WebDevSimplified" },
          { name: "The Net Ninja", url: "https://www.youtube.com/@NetNinja" }
        ]
      }
    ]
  },
  {
    title: "Deployment",
    icon: <Rocket className="w-6 h-6 text-green-400" />,
    children: [
      {
        title: "CI/CD + Hosting",
        icon: <Rocket className="w-5 h-5 text-green-300" />,
        projects: ["Deploy to Heroku", "Deploy to AWS", "Docker Setup"],
        resources: [
          { name: "Elzero Web School", url: "https://www.youtube.com/@ElzeroWebSchool" },
          { name: "FreeCodeCamp", url: "https://www.youtube.com/@freecodecamp" }
        ]
      }
    ]
  }
];

export default function BackEnd() {
  const bgColor = useContext(BgContext);

  return (
    <div className={`p-6 mx-auto ${bgColor.color} min-h-screen flex flex-col items-center w-full`}>
      <h1 className="text-4xl font-bold text-center text-white mb-12">Back-End Roadmap 🚀</h1>
      <div className="w-full space-y-12">
        {sections.map((section, sectionIdx) => (
          <motion.div
            key={sectionIdx}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: sectionIdx * 0.2 }}
            className="flex flex-col items-center"
          >
            <div className="flex items-center gap-4 mb-6 bg-zinc-900 px-6 py-3 rounded-full">
              {section.icon}
              <h2 className="text-2xl font-bold text-white">{section.title}</h2>
            </div>
            <div className="flex flex-wrap justify-center gap-12">
              {section.children.map((skill, skillIdx) => (
                <motion.div
                  key={skillIdx}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: skillIdx * 0.1 }}
                  className="flex flex-col items-center"
                >
                  <div className="flex items-center gap-3 mb-4 bg-zinc-800 px-4 py-2 rounded-full">
                    {skill.icon}
                    <h3 className="text-lg font-semibold text-amber-300">{skill.title}</h3>
                  </div>
                  <div className="flex flex-col items-center gap-4 mt-4">
                    <div className="flex flex-wrap justify-center gap-4">
                      {skill.projects.map((proj, projIdx) => (
                        <motion.div
                          key={projIdx}
                          className="bg-zinc-700 px-3 py-2 rounded-lg text-zinc-200 hover:text-white transition duration-200 text-sm"
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3, delay: projIdx * 0.05 }}
                        >
                          {proj}
                        </motion.div>
                      ))}
                    </div>
                    <div className="flex flex-col items-center mt-4">
                      <h4 className="text-sm font-semibold text-zinc-400 mb-2">مصادر تعليمية</h4>
                      <div className="flex flex-wrap justify-center gap-3">
                        {skill.resources.map((resource, resIdx) => (
                          <motion.a
                            key={resIdx}
                            href={resource.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-zinc-600 px-3 py-1 rounded-md text-zinc-200 hover:text-white hover:bg-zinc-500 transition duration-200 text-xs"
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: resIdx * 0.05 }}
                          >
                            {resource.name}
                          </motion.a>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}