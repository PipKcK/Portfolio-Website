import React from 'react';
import { Github, ExternalLink, ArrowUpRight } from 'lucide-react';

const currentProjects = [
  {
    title: 'AI-Powered Code Assistant',
    description: 'A sophisticated machine learning model that helps developers write better code through intelligent suggestions and automated code review. Features include real-time code analysis, security vulnerability detection, and performance optimization recommendations.',
    tech: ['Python', 'TensorFlow', 'FastAPI', 'Docker'],
    github: 'https://github.com',
    live: 'https://example.com',
    status: 'In Development'
  },
  {
    title: 'Distributed Systems Simulator',
    description: 'An educational tool for visualizing and understanding distributed systems concepts and algorithms. Includes interactive simulations of consensus protocols, fault tolerance mechanisms, and network partitioning scenarios.',
    tech: ['React', 'Node.js', 'WebSocket', 'D3.js'],
    github: 'https://github.com',
    live: 'https://example.com',
    status: 'Beta Testing'
  }
];

const pastProjects = [
  {
    title: 'Blockchain Chain of Custody',
    description: 'Blockchain-based system to track evidence lifecycle, enhancing traceability and integrity in forensic investigations.',
    tech: ['Solidity', 'Ethereum', 'web3.js'],
    github: 'https://github.com/PipKcK/Blockchain-Chain-of-Custody',
    live: ''
  },
  {
    title: 'Hyperledger Fabric: Supply Chain Smart Contract',
    description: 'Private blockchain using Hyperledger Fabric to track product lifecycle, manage ownership, and ensure transaction integrity.',
    tech: ['Go', 'Docker', 'Hyperledger Fabric'],
    github: 'https://github.com/PipKcK/Hyperledger-Fabric-Supply-Chain-Smart-Contract',
    live: ''
  },
  {
    title: 'Logic Programming-Driven Robotic Warehouse Optimization',
    description: 'Warehouse automation system using logic programming for robot path planning, dynamic routing, and collision avoidance.',
    tech: ['ASP (Clingo)', 'Python', 'Grid Planning'],
    github: 'https://github.com/PipKcK/Automated-Warehouse-Scenario',
    live: ''
  },
  {
    title: 'Traffic Accident Hotspot Detection Using Machine Learning',
    description: 'ML-based prediction system to detect accident-prone areas and evaluate severity using spatial and temporal features.',
    tech: ['scikit-learn', 'pandas', 'Random Forest'],
    github: 'https://github.com/PipKcK/Traffic-Accident-Hotspot-Detection',
    live: ''
  },
  {
    title: 'Context-Aware Health Monitoring App',
    description: 'Android app that tracks heart and respiratory rates using smartphone sensors and user feedback for health insights.',
    tech: ['Android Studio', 'Java', 'Sensor APIs'],
    github: 'https://github.com/PipKcK/Context-Monitoring-App?tab=readme-ov-file',
    live: ''
  },
  {
    title: 'Distributed Media Streaming Analytics Dashboard',
    description: 'Streaming analytics dashboard with distributed data processing and content trend visualization using simulated datasets.',
    tech: ['Flask', 'CockroachDB', 'Streamlit'],
    github: 'https://github.com/PipKcK/streaming-data-simulation',
    live: ''
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