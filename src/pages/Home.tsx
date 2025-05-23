import React, { useState, useRef, useEffect } from 'react';
import { Github, ExternalLink, Code, Database, Brain, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

const projects = [
  {
    title: 'AI-Powered Code Assistant',
    description: 'A machine learning model that helps developers write better code through intelligent suggestions and automated code review.',
    tech: ['Python', 'TensorFlow', 'FastAPI'],
    github: 'https://github.com',
    live: 'https://example.com',
    techColors: ['bg-blue-200/30', 'bg-orange-200/30', 'bg-green-200/30']
  },
  {
    title: 'Distributed Systems Simulator',
    description: 'Educational tool for visualizing and understanding distributed systems concepts and algorithms.',
    tech: ['React', 'Node.js', 'WebSocket'],
    github: 'https://github.com',
    live: 'https://example.com',
    techColors: ['bg-cyan-200/30', 'bg-green-200/30', 'bg-blue-200/30']
  },
  {
    title: 'Quantum Computing Visualization',
    description: 'Interactive web application for visualizing quantum computing concepts and circuits.',
    tech: ['TypeScript', 'Three.js', 'WebGL'],
    github: 'https://github.com',
    live: 'https://example.com',
    techColors: ['bg-blue-200/30', 'bg-purple-200/30', 'bg-red-200/30']
  },
  {
    title: 'Blockchain Analytics Platform',
    description: 'Real-time analytics and visualization platform for blockchain transactions and smart contracts.',
    tech: ['Solidity', 'React', 'Web3.js'],
    github: 'https://github.com',
    live: 'https://example.com',
    techColors: ['bg-yellow-200/30', 'bg-cyan-200/30', 'bg-blue-200/30']
  }
];

const skills = [
  {
    category: 'Programming Languages',
    icon: <Code className="w-6 h-6 text-purple-400" />,
    items: ['Python', 'C/C++', 'C#', 'JavaScript', 'Java']
  },
  {
    category: 'Databases',
    icon: <Database className="w-6 h-6 text-purple-400" />,
    items: ['PostgreSQL', 'MongoDB', 'Redis', 'Neo4j']
  },
  {
    category: 'Machine Learning',
    icon: <Brain className="w-6 h-6 text-purple-400" />,
    items: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'NLTK']
  },
  {
    category: 'Security',
    icon: <Shield className="w-6 h-6 text-purple-400" />,
    items: ['Wireshark', 'Nmap', 'Snort', 'Kali Linux', 'Burp Suite']
  }
];

const recommendations = [
  {
    name: 'Dr. Sarah Johnson',
    role: 'Professor of Computer Science',
    text: 'An exceptional student with a deep understanding of complex algorithms and system design. Their research contributions have been invaluable.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150'
  },
  {
    name: 'Alex Chen',
    role: 'Tech Lead at Google',
    text: 'Demonstrated outstanding technical skills during their internship. Their problem-solving abilities and attention to detail are remarkable.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150&h=150'
  },
  {
    name: 'Emily Rodriguez',
    role: 'Senior Software Engineer at Microsoft',
    text: 'A brilliant developer with exceptional problem-solving skills. Their contributions to our team projects were outstanding.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150&h=150'
  },
  {
    name: 'Michael Zhang',
    role: 'AI Research Lead at DeepMind',
    text: 'Their understanding of machine learning concepts and ability to implement complex algorithms is impressive.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150&h=150'
  }
];

function Home() {
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [autoScrollEnabled, setAutoScrollEnabled] = useState(true);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [currentRecommendation, setCurrentRecommendation] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLElement>(null);

  useEffect(() => {
    let animationFrameId: number;
    let speed = hoveredCard !== null ? 0.2 : 1;

    const animate = () => {
      if (sliderRef.current && autoScrollEnabled) {
        sliderRef.current.scrollLeft += speed;
        
        if (sliderRef.current.scrollLeft >= sliderRef.current.scrollWidth - sliderRef.current.clientWidth) {
          sliderRef.current.scrollLeft = 0;
        }
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [autoScrollEnabled, hoveredCard]);

  useEffect(() => {
    let timer: number;
    if (!isDragging) {
      timer = window.setTimeout(() => {
        setCurrentRecommendation((prev) => (prev + 2) % recommendations.length);
      }, 5000);
    }
    return () => window.clearTimeout(timer);
  }, [currentRecommendation, isDragging]);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setAutoScrollEnabled(false);
    setStartX(e.pageX - (sliderRef.current?.offsetLeft || 0));
    setScrollLeft(sliderRef.current?.scrollLeft || 0);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    setAutoScrollEnabled(true);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - (sliderRef.current?.offsetLeft || 0);
    const walk = (x - startX) * 2;
    if (sliderRef.current) {
      sliderRef.current.scrollLeft = scrollLeft - walk;
    }
  };

  const handleCardClick = (github: string) => {
    window.open(github, '_blank');
  };

  return (
    <div>
      <section className="relative h-[600px] overflow-hidden mb-20">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2070"
            alt="Digital Network"
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/60 via-gray-900/50 to-gray-900/60"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/30 to-gray-900"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between">
          <div className="max-w-2xl">
            <div className="mb-16">
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text leading-[1.2] !leading-[1.2] py-2 inline-block">
                Ujjwal Baranwal
              </h1>
            </div>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Specializing in Computer Networks, Information Security, and Data Security.
              Bridging the gap between cybersecurity and data science to enhance data protection.
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => projectsRef.current?.scrollIntoView({ behavior: 'smooth' })}
                className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors duration-300"
              >
                View Projects
              </button>
              <Link
                to="/contact"
                className="group relative inline-flex items-center justify-center px-6 py-3 overflow-hidden"
              >
                <div className="absolute inset-0 w-full h-full bg-gray-700 group-hover:bg-gray-600 transition-colors rounded-lg"></div>
                <div className="absolute inset-0 w-full h-full border-2 border-white rounded-lg opacity-0 group-hover:opacity-100 group-hover:animate-pulse"></div>
                <span className="relative text-white">Get in Touch</span>
              </Link>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="relative w-96 h-96">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-600 rounded-full animate-pulse"></div>
              <img
                src="assets\Profile.jpeg"
                alt="Ujjwal Baranwal"
                className="absolute inset-2 w-[calc(100%-16px)] h-[calc(100%-16px)] object-cover rounded-full ring-4 ring-gray-900"
              />
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8">About Me</h2>
          <div className="bg-gray-800 rounded-lg p-8">
            <p className="text-gray-300 leading-relaxed mb-6">
              I am a Master's Student in Computer Science specializing in Cyber-Security at Arizona State University. With a strong foundation in computer science fundamentals and a passion for recent cutting-edge research, I strive to create innovative solutions that make a positive impact.
            </p>
            <p className="text-gray-300 leading-relaxed mb-6">
              My academic interests include data & information security, artificial intelligence, distributed computing, and quantum computing. I have project experience working on various projects ranging from AI-powered applications to secure communications systems, and I'm always eager to learn and apply new technologies.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Outside of academics, I am passionate about open-source projects and partake in hackathons. I believe in the growing need for secure applications to protect one's PII data and am committed to perform in the interest of the community and the people by continuous learning and growing in this ever-evolving field.
            </p>
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skill, index) => (
              <div key={index} className="bg-gray-800 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  {skill.icon}
                  <h3 className="text-xl font-semibold ml-2">{skill.category}</h3>
                </div>
                <ul className="space-y-2">
                  {skill.items.map((item, i) => (
                    <li key={i} className="text-gray-300 flex items-center">
                      <span className="w-2 h-2 bg-purple-400 rounded-full mr-2"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section ref={projectsRef} className="mb-20 scroll-mt-20" id="projects">
          <h2 className="text-3xl font-bold mb-8">Featured Projects</h2>
          <div 
            ref={sliderRef}
            className="overflow-x-hidden cursor-grab active:cursor-grabbing"
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onMouseMove={handleMouseMove}
          >
            <div className="flex gap-8 min-w-max">
              {[...projects, ...projects].map((project, index) => (
                <div 
                  key={index}
                  className={`w-[400px] h-[300px] bg-gray-800 rounded-lg p-6 flex flex-col justify-between transition-all duration-300 hover:bg-gray-700 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/10 ${
                    hoveredCard === index ? 'ring-2 ring-purple-400' : ''
                  }`}
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                  onClick={() => handleCardClick(project.github)}
                  style={{ cursor: 'pointer' }}
                >
                  <div>
                    <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                    <p className="text-gray-400 mb-4 line-clamp-3">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech, i) => (
                        <span 
                          key={i} 
                          className={`px-3 py-1 rounded-full text-sm text-white ${project.techColors[i]} transition-colors duration-300`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex space-x-4">
                    <Github size={20} className="text-gray-400 hover:text-purple-400 transition-colors" />
                    <ExternalLink size={20} className="text-gray-400 hover:text-purple-400 transition-colors" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/*<section className="mb-20">
          <h2 className="text-3xl font-bold mb-8">Recommendations</h2>
          <div className="relative bg-gray-800 rounded-lg p-8">
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${Math.floor(currentRecommendation / 2) * 100}%)` }}
              >
                {Array.from({ length: Math.ceil(recommendations.length / 2) }, (_, i) => (
                  <div 
                    key={i}
                    className="w-full flex-shrink-0 grid grid-cols-1 md:grid-cols-2 gap-8"
                    style={{ minWidth: '100%' }}
                  >
                    {recommendations.slice(i * 2, i * 2 + 2).map((rec, index) => (
                      <div key={index} className="bg-gray-700/50 rounded-lg p-6">
                        <div className="flex items-center mb-4">
                          <div className="relative flex-shrink-0">
                            <img
                              src={rec.image}
                              alt={rec.name}
                              className="w-16 h-16 rounded-full object-cover"
                            />
                            <div className="absolute inset-0 rounded-full ring-2 ring-purple-400/50"></div>
                          </div>
                          <div className="ml-4">
                            <h3 className="font-semibold text-lg text-purple-400">{rec.name}</h3>
                            <p className="text-gray-400 text-sm">{rec.role}</p>
                          </div>
                        </div>
                        <p className="text-gray-300 italic">"{rec.text}"</p>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-center mt-8 space-x-3">
              {Array.from({ length: Math.ceil(recommendations.length / 2) }, (_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentRecommendation(index * 2);
                    clearTimeout(window.setTimeout(() => {}, 0));
                  }}
                  className={`transition-all duration-300 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-400 ${
                    Math.floor(currentRecommendation / 2) === index
                      ? 'w-8 bg-purple-400'
                      : 'w-2 bg-gray-600 hover:bg-gray-500'
                  } h-2`}
                  aria-label={`Go to recommendations ${index * 2 + 1}-${Math.min((index + 1) * 2, recommendations.length)}`}
                />
              ))}
            </div>

            <div className="absolute top-1/2 -translate-y-1/2 left-4">
              <button
                onClick={() => {
                  setCurrentRecommendation(prev => 
                    prev === 0 ? recommendations.length - 2 : prev - 2
                  );
                  clearTimeout(window.setTimeout(() => {}, 0));
                }}
                className="p-2 rounded-full bg-gray-700/50 hover:bg-gray-700 transition-colors border border-gray-600 hover:border-purple-400"
                aria-label="Previous recommendations"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
            </div>
            <div className="absolute top-1/2 -translate-y-1/2 right-4">
              <button
                onClick={() => {
                  setCurrentRecommendation(prev => 
                    prev >= recommendations.length - 2 ? 0 : prev + 2
                  );
                  clearTimeout(window.setTimeout(() => {}, 0));
                }}
                className="p-2 rounded-full bg-gray-700/50 hover:bg-gray-700 transition-colors border border-gray-600 hover:border-purple-400"
                aria-label="Next recommendations"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </section>*/}
      </div>
    </div>
  );
}

export default Home;