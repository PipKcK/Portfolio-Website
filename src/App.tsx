import React, { useState, useRef, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
import {
  Github,
  Linkedin,
  Mail,
  Menu,
  X,
  Home as HomeIcon,
  Phone,
  FileDown,
  ScrollText,
  BookOpen,
  GraduationCap,
  Award,
  FolderOpenDot,
  Briefcase,
  Globe,
  ChevronDown,
  MessageCircleMore,
  Play,
  Link2
} from "lucide-react";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Chat from './pages/Chat';
import SocialDownloader from './pages/SocialDownloader';
import Experience from "./pages/Experiences";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";
import Certifications from "./pages/Certifications";

function NavigationContent() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAppsOpen, setIsAppsOpen] = useState(false);
  const timeoutRef = useRef<number | null>(null);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    //setIsAppsOpen(true);
  };
  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsAppsOpen(false);
    }, 250);
  };

  useEffect(() => {
    if (!isAppsOpen) return;

    const handleScroll = () => {
      timeoutRef.current = setTimeout(() => {
      setIsAppsOpen(false);
    }, 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
    }, [isAppsOpen]);

  return (
    <nav className="fixed w-full bg-gray-900/95 backdrop-blur-sm border-b border-gray-800 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-4">
            <Link
              to="/"
              className={`transition-colors ${
                isActive("/")
                  ? "text-purple-400"
                  : "text-gray-300 hover:text-purple-400"
              }`}
            >
              <HomeIcon size={24} />
            </Link>

            {/* Apps Dropdown */}
            <div className="relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
              <button
              onClick={() => {
                if (isAppsOpen) setIsAppsOpen(false);
                else setIsAppsOpen(true);
              }}
                className="flex items-center space-x-1 text-gray-300 hover:text-purple-400 transition-colors"
              >
                Apps
                <ChevronDown
                  size={16}
                  className={`transform transition-transform duration-300 ${
                    isAppsOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Dropdown Menu */}
              {isAppsOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-gray-800 rounded-lg shadow-lg py-2 border border-gray-700">
                  <Link
                    to="/blog"
                    className="block px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-purple-400 transition-colors"
                    onClick={() => setIsAppsOpen(false)}
                  >
                    <BookOpen size={16} className="inline-block mr-2" />
                    Blog
                  </Link>
                  <Link
                    to="/chat"
                    className="block px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-purple-400 transition-colors"
                    onClick={() => setIsAppsOpen(false)}>
                      <MessageCircleMore size={16} className="inline-block mr-2" />
                      ChatINC
                  </Link>
                  <Link
                    to="/social-downloader"
                    className="block px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-purple-400 transition-colors"
                    onClick={() => setIsAppsOpen(false)}
                  >
                    <Play size={16} className="inline-block mr-2" />
                    Social Downloader
                  </Link>
                  <div className="px-4 py-2 text-sm text-gray-400 border-y border-gray-700 text-red-400">
                    Coming Soon
                  </div>
                  <Link
                    to="/url-shortener"
                    className="block px-4 py-2 text-gray-300 hover:bg-gray-700 text-red-300 hover:text-red-400 transition-colors"
                    onClick={() => setIsAppsOpen(false)}
                  >
                    <Link2 size={16} className="inline-block mr-2" />
                    URL Shortener
                  </Link>
                </div>
              )}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-white"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/projects"
              className={`transition-colors ${
                isActive("/projects")
                  ? "text-purple-400"
                  : "text-gray-300 hover:text-purple-400"
              } flex items-center gap-2`}
            >
              <FolderOpenDot size={20} />
              <span>Projects</span>
            </Link>
            <Link
              to="/experiences"
              className={`transition-colors ${
                isActive("/experiences")
                  ? "text-purple-400"
                  : "text-gray-300 hover:text-purple-400"
              } flex items-center gap-2`}
            >
              <Briefcase size={20} />
              <span>Experience</span>
            </Link>
            <Link
              to="/certifications"
              className={`transition-colors ${
                isActive("/certifications")
                  ? "text-purple-400"
                  : "text-gray-300 hover:text-purple-400"
              } flex items-center gap-2`}
            >
              <Award size={20} />
              <span>Certifications</span>
            </Link>
            <Link
              to="/resume"
              className={`transition-colors ${
                isActive("/resume")
                  ? "text-purple-400"
                  : "text-gray-300 hover:text-purple-400"
              } flex items-center gap-2`}
            >
              <ScrollText size={20} />
              <span>Resume</span>
            </Link>

            {/* Contact and social links group */}
            <div className="flex items-center bg-gray-800 rounded-lg px-4 py-2 space-x-4">
              <Link
                to="/contact"
                className={`transition-colors ${
                  isActive("/contact")
                    ? "text-purple-400"
                    : "text-gray-300 hover:text-purple-400"
                }`}
              >
                <Phone size={20} />
              </Link>
              <a
                href="https://github.com/PipKcK"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-purple-400 transition-colors"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/ujjwal-baranwal-asu/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-purple-400 transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:ujjwalb.official@gmail.com"
                className="text-gray-300 hover:text-purple-400 transition-colors"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden ${isMenuOpen ? "block" : "hidden"}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-900 border-b border-gray-800">
          <Link
            to="/projects"
            className={`flex items-center gap-2 px-3 py-2 transition-colors ${
              isActive("/projects")
                ? "text-purple-400"
                : "text-gray-300 hover:text-purple-400"
            }`}
            onClick={() => setIsMenuOpen(false)}
          >
            <FolderOpenDot size={20} />
            <span>Projects</span>
          </Link>
          <Link
            to="/blog"
            className={`flex items-center gap-2 px-3 py-2 transition-colors ${
              isActive("/blog")
                ? "text-purple-400"
                : "text-gray-300 hover:text-purple-400"
            }`}
            onClick={() => setIsMenuOpen(false)}
          >
            <BookOpen size={20} />
            <span>Blog</span>
          </Link>
          <Link
            to="/experiences"
            className={`flex items-center gap-2 px-3 py-2 transition-colors ${
              isActive("/experiences")
                ? "text-purple-400"
                : "text-gray-300 hover:text-purple-400"
            }`}
            onClick={() => setIsMenuOpen(false)}
          >
            <GraduationCap size={20} />
            <span>Experience</span>
          </Link>
          <Link
            to="/certifications"
            className={`flex items-center gap-2 px-3 py-2 transition-colors ${
              isActive("/certifications")
                ? "text-purple-400"
                : "text-gray-300 hover:text-purple-400"
            }`}
            onClick={() => setIsMenuOpen(false)}
          >
            <Award size={20} />
            <span>Certifications</span>
          </Link>
          <Link
            to="/resume"
            className={`flex items-center gap-2 px-3 py-2 transition-colors ${
              isActive("/resume")
                ? "text-purple-400"
                : "text-gray-300 hover:text-purple-400"
            }`}
            onClick={() => setIsMenuOpen(false)}
          >
            <ScrollText size={20} />
            <span>Resume</span>
          </Link>
          <Link
            to="/contact"
            className={`flex items-center gap-2 px-3 py-2 transition-colors ${
              isActive("/contact")
                ? "text-purple-400"
                : "text-gray-300 hover:text-purple-400"
            }`}
            onClick={() => setIsMenuOpen(false)}
          >
            <Phone size={20} />
            <span>Contact</span>
          </Link>
          <div className="flex items-center bg-gray-800 rounded-lg space-x-4 px-3 py-2 w-fit">{/*flex items-center bg-gray-800 rounded-lg px-4 py-2 space-x-4*/}
            <a
              href="https://github.com/PipKcK"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-purple-400 transition-colors"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/ujjwal-baranwal-asu/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-purple-400 transition-colors"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:ujjwalb.official@gmail.com"
              className="text-gray-300 hover:text-purple-400 transition-colors"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-900 text-gray-100 flex flex-col relative">
        {/* Background pattern */}
        <div
          className="fixed inset-0 pointer-events-none"
          style={{
            backgroundImage: `
                            linear-gradient(to right, rgba(75, 85, 99, 0.2) 1px, transparent 1px),
                            linear-gradient(to bottom, rgba(75, 85, 99, 0.2) 1px, transparent 1px)
                        `,
            backgroundSize: "40px 40px",
            maskImage:
              "radial-gradient(circle at center, black, transparent 80%)",
          }}
        />

        <NavigationContent />

        <main className="flex-grow pt-16 relative">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="/social-downloader" element={<SocialDownloader />} />
            <Route path="/experiences" element={<Experience />} />
            <Route path="/certifications" element={<Certifications />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <footer className="bg-gray-800/50 border-t border-gray-800 py-4 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
            <p className="text-gray-400">
              © 2025 Ujjwal Baranwal. All rights reserved.
            </p>
            <div className="flex items-center space-x-4">
              <Link
                to="/contact"
                className="flex items-center space-x-2 bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-400 px-4 py-2 rounded-lg transition-colors duration-300"
              >
                <Phone size={20} />
                <span>Contact Me</span>
              </Link>
              <a
                href="/assets/UjjwalBaranwal-Resume.pdf"
                download
                className="flex items-center space-x-2 bg-purple-600/20 hover:bg-purple-600/30 text-purple-400 px-4 py-2 rounded-lg transition-colors duration-300"
              >
                <FileDown size={20} />
                <span>Download Resume</span>
              </a>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
