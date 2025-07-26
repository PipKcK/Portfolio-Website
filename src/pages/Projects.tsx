import React from 'react';
import { Github, ExternalLink, ArrowUpRight } from 'lucide-react';

const currentProjects = [
  {
    title: 'Home Lab - Network Mapper',
    description: 'A comprehensive Python-based network scanning and monitoring tool designed for home lab environments providing device discovery, real-time network monitoring, and a web-based security dashboard.',
    tech: ['Python', 'tshark', 'scapy', 'flask', 'nmap'],
    github: 'https://github.com/PipKcK/Home-Lab-Network-Mapper',
    live: 'https://github.com/PipKcK/Home-Lab-Network-Mapper/blob/main/readme.md',
    image: '/assets/project-images/home-lab-network-mapper.png',
    status: 'Stable V.1 Released'
  },
  {
    title: 'ChatINC - AI Chatbot',
    description: 'An AI-powered chatbot designed to assist users in understanding the Indian Constitution and navigating complex topics and queries with the help of a fine-tuned (LoRA) Mistral 7B Large Language Model through natural language conversation.',
    tech: ['Python', 'Ollama', 'LoRA'],
    github: 'https://www.thisisujjwal.engineer/chat',
    live: 'https://www.thisisujjwal.engineer/chat',
    image: '/assets/project-images/chatinc-ai-chatbot.png',
    status: 'Live'
  }
];

const pastProjects = [
  {
    title: 'Blockchain Chain of Custody',
    description: 'Blockchain-based system to track evidence lifecycle, enhancing traceability and integrity in forensic investigations.',
    tech: ['Solidity', 'Ethereum', 'web3.js'],
    github: 'https://github.com/PipKcK/Blockchain-Chain-of-Custody',
    live: '',
    topic: 'Blockchain, Chain of Custody, Identity Management'
  },
  {
    title: 'Hyperledger Fabric: Supply Chain Smart Contract',
    description: 'Private blockchain using Hyperledger Fabric to track product lifecycle, manage ownership, and ensure transaction integrity.',
    tech: ['Go', 'Docker', 'Hyperledger Fabric'],
    github: 'https://github.com/PipKcK/Hyperledger-Fabric-Supply-Chain-Smart-Contract',
    live: '',
    topic: 'Blockchain, Smart Contracts, Supply Chain'
  },
  {
    title: 'Logic Programming-Driven Robotic Warehouse Optimization',
    description: 'Warehouse automation system using logic programming for robot path planning, dynamic routing, and collision avoidance.',
    tech: ['ASP (Clingo)', 'Python', 'Grid Planning'],
    github: 'https://github.com/PipKcK/Automated-Warehouse-Scenario',
    live: '',
    topic: 'Robotics, Logic Programming, Warehouse Automation'
  },
  {
    title: 'Traffic Accident Hotspot Detection Using Machine Learning',
    description: 'ML-based prediction system to detect accident-prone areas and evaluate severity using spatial and temporal features.',
    tech: ['scikit-learn', 'pandas', 'Random Forest'],
    github: 'https://github.com/PipKcK/Traffic-Accident-Hotspot-Detection',
    live: '',
    topic: 'Machine Learning, Data Analysis, Model Evaluation'
  },
  {
    title: 'Context-Aware Health Monitoring App',
    description: 'Android app that tracks heart and respiratory rates using smartphone sensors and user feedback for health insights.',
    tech: ['Android Studio', 'Java', 'Sensor APIs'],
    github: 'https://github.com/PipKcK/Context-Monitoring-App?tab=readme-ov-file',
    live: '',
    topic: 'Mobile App Development, Data Management, Data Collection'
  },
  {
    title: 'Distributed Media Streaming Analytics Dashboard',
    description: 'Streaming analytics dashboard with distributed data processing and content trend visualization using simulated datasets.',
    tech: ['Flask', 'CockroachDB', 'Streamlit'],
    github: 'https://github.com/PipKcK/streaming-data-simulation',
    live: '',
    topic: 'Data Analytics, Distributed Systems, Data Visualization'
  }
];


function Projects() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Current Projects */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold mb-8">Current Projects</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {currentProjects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg overflow-hidden hover:transform hover:scale-[1.02] transition-all duration-300"
            >
              <div className="aspect-w-16 aspect-h-9">
                {project.image && (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover"
                  />
                )}
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-semibold">{project.title}</h3>
                  <span className="px-3 py-1 bg-purple-400/20 text-purple-300 rounded-full text-sm">
                    {project.status}
                  </span>
                </div>
                <p className="text-gray-400 mb-6">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-400 hover:text-purple-400 transition-colors"
                  >
                    <Github size={20} className="mr-2" />
                    <span>Source</span>
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-400 hover:text-purple-400 transition-colors"
                  >
                    <ExternalLink size={20} className="mr-2" />
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Past Projects */}
      <section>
        <h2 className="text-3xl font-bold mb-8">Past Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pastProjects.map((project, index) => (
            <div
              key={index}
              className="group bg-gray-800 rounded-lg overflow-hidden hover:transform hover:scale-[1.02] transition-all duration-300"
            >
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 group-hover:text-purple-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-blue-200 italic mb-2">{project.topic}</p>
                <p className="text-gray-400 mb-4 line-clamp-3">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-400 hover:text-purple-400 transition-colors"
                  >
                    <Github size={18} className="mr-1" />
                    <span>Source</span>
                    <ArrowUpRight size={14} className="ml-1" />
                  </a>
                  {project.live && project.live.trim() !== '' && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-400 hover:text-purple-400 transition-colors"
                    >
                      <ExternalLink size={18} className="mr-1" />
                      <span>Demo</span>
                      <ArrowUpRight size={14} className="ml-1" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Projects;