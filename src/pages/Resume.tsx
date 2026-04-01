import React from 'react';
import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';

function Resume() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="bg-gray-800 rounded-lg p-8 shadow-lg">
        {/* Header section */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold mb-4">Ujjwal Baranwal</h1>
          <p className="text-xl text-gray-400 mb-4">Graduate Student in Computer Science (Cybersecurity)</p>
          <div className="flex justify-center space-x-4 text-gray-400">
            <a href="mailto:asu.ujjwal@gmail.com" className="flex items-center hover:text-purple-400">
              <Mail size={16} className="mr-1" />
              <span>asu.ujjwal@gmail.com</span>
            </a>
            <a href="tel:+16027757995" className="flex items-center hover:text-purple-400">
              <Phone size={16} className="mr-1" />
              <span>+1 (602) 775-7995</span>
            </a>
            <a href="https://github.com/PipKcK" className="flex items-center hover:text-purple-400">
              <Github size={16} className="mr-1" />
              <span>github.com/PipKcK</span>
            </a>
            <a href="https://linkedin.com/in/ujjwal-baranwal-asu" className="flex items-center hover:text-purple-400">
              <Linkedin size={16} className="mr-1" />
              <span>linkedin.com/in/ujjwal-baranwal-asu</span>
            </a>
            <span className="flex items-center">
              <MapPin size={16} className="mr-1" />
              <span>Tempe, AZ</span>
            </span>
          </div>
        </div>

        <hr className="border-t-4 border-gray-200/20 my-8" />

        {/* Technical Skills section */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-purple-400">Technical Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

            <div>
              <h3 className="font-semibold mb-2">Programming Languages</h3>
              <p className="text-gray-300">
                Python, C, C#, JavaScript, Java, Kotlin, Dart, Go, Solidity, Rust, Powershell, Bash, SQL
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Databases</h3>
              <p className="text-gray-300">
                MongoDB, PostgreSQL, CockroachDB, Neo4j, Elasticsearch, Apache Cassandra, DynamoDB, Redis
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Web & App Development</h3>
              <p className="text-gray-300">
                Django, Laravel, Node.js, React, Tailwind, Vite, MAUI, Android Studio
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Security & Forensics</h3>
              <p className="text-gray-300">
                Wireshark, Metasploit, Burp Suite, Ghidra, ProDiscover, Autopsy, Volatility, SIEM, Splunk
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Machine Learning & AI</h3>
              <p className="text-gray-300">
                scikit-learn, pandas, NumPy, PyTorch, TensorFlow, Transformers, OpenCV, Tesseract
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Cloud & DevOps</h3>
              <p className="text-gray-300">
                Azure, AWS, AWS Lambda, Docker, Kubernetes, Terraform, Jenkins, Git, Linux
              </p>
            </div>

          </div>
        </section>

        <hr className="border-t-4 border-gray-200/20 my-8" />

        {/* Certification section */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-purple-400">Certifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gray-800 rounded-lg p-4">
              <h3 className="font-semibold mb-2">CompTIA Security+</h3>
              <p className="text-gray-400">Credential ID: 1234567890</p>
              <p className="text-gray-400">Issued: Jan 2024</p>
            </div>
          </div>
        </section>

        <hr className="border-t-4 border-gray-200/20 my-8" />

        {/* Experience section */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-purple-400">Experience</h2>

          <div className="mb-6">
            <div className="flex justify-between items-start mb-2 relative">
              <h3 className="text-lg font-semibold">GenAI Developer</h3>
              <div className="flex-grow mx-4 mt-3 border-t border-dotted border-gray-600/50"></div>
              <span className="text-gray-400"></span>
            </div>
            <p className="text-gray-400 mb-2">Sayaam For All</p>
            <ul className="list-disc list-inside text-gray-300 space-y-1">
              <li>Developed AI powered response generation using Groq and Gemini APIs for user facing chatbot services</li>
              <li>Enabled chatbot driven access to critical resources including shelters, food banks, and free healthcare information.</li>
              <li>Deployed serverless AI solution using AWS Lambda and API Gateway for scalable and secure service delivery.</li>
            </ul>
          </div>

          <div className="mb-6">
            <div className="flex justify-between items-start mb-2 relative">
              <h3 className="text-lg font-semibold">Full Stack Developer</h3>
              <div className="flex-grow mx-4 mt-3 border-t border-dotted border-gray-600/50"></div>
              <span className="text-gray-400"></span>
            </div>
            <p className="text-gray-400 mb-2">OneCommunity Global</p>
            <ul className="list-disc list-inside text-gray-300 space-y-1">
              <li>Reviewed 10+ pull requests weekly to ensure quality for the employee time management platform</li>
              <li>Collaborated with team and managers to identify and resolve bugs in inactive website modules</li>
              <li>Delivered instant hotfixes and new features based on urgent executive requests</li>
            </ul>
          </div>

          <div className="mb-6">
            <div className="flex justify-between items-start mb-2 relative">
              <h3 className="text-lg font-semibold">Teaching Assistant (Network Security)</h3>
              <div className="flex-grow mx-4 mt-3 border-t border-dotted border-gray-600/50"></div>
              <span className="text-gray-400"></span>
            </div>
            <p className="text-gray-400 mb-2">Arizona State University, Tempe, AZ</p>
            <ul className="list-disc list-inside text-gray-300 space-y-1">
              <li>Partnered with teaching staff and professor to design course structure and material</li>
              <li>Assisted over 55 students with coursework tasks on Traffic Analysis, Network Intrusion and Network Mapping</li>
            </ul>
          </div>

          <div className="mb-6">
            <div className="flex justify-between items-start mb-2 relative">
              <h3 className="text-lg font-semibold">Student Developer</h3>
              <div className="flex-grow mx-4 mt-3 border-t border-dotted border-gray-600/50"></div>
              <span className="text-gray-400"></span>
            </div>
            <p className="text-gray-400 mb-2">Paqt, Toronto, Ontario</p>
            <ul className="list-disc list-inside text-gray-300 space-y-1">
              <li>Integrated Google Calendar API to Paqt for effective teams and time management</li>
              <li>Assisted team in the addition of templates to programmatically create agreements for signing documents</li>
            </ul>
          </div>

          <div className="mb-6">
            <div className="flex justify-between items-start mb-2 relative">
              <h3 className="text-lg font-semibold">App Developer</h3>
              <div className="flex-grow mx-4 mt-3 border-t border-dotted border-gray-600/50"></div>
              <span className="text-gray-400"></span>
            </div>
            <p className="text-gray-400 mb-2">SIS Group Enterprises</p>
            <ul className="list-disc list-inside text-gray-300 space-y-1">
              <li>Developed a real-time application tracking Android app, delivering a functional MVP on schedule</li>
              <li>Converted 50+ Figma UI screens into a responsive and user-friendly mobile interface</li>
              <li>Integrated backend server APIs to enable seamless data retrieval and real-time updates</li>
            </ul>
          </div>

        </section>

        <hr className="border-t-4 border-gray-200/20 my-8" />

        {/* Projects section */}

        {/* Projects section */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-purple-400">Projects</h2>
          <div className="space-y-6 text-gray-300">

            <div>
              <h3 className="text-lg font-semibold">Inventory Tracker Microservice</h3>
              <ul className="list-disc list-inside">
                <li>Built a REST API for adding, updating, and querying product inventory in real time.</li>
                <li>Integrated Redis as a caching layer, cutting response latency for frequent lookups.</li>
                <li>Containerized the application with Docker for consistent development and deployment.</li>
                <li>Configured a GitHub Actions pipeline to run Maven builds, unit tests, and automatic Docker image publishing.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold">AutoDoc Lightweight OCR Automation Tool</h3>
              <ul className="list-disc list-inside">
                <li>Built an OCR pipeline using OpenCV and Tesseract to extract structured text from invoices and receipts</li>
                <li>Used a lightweight YOLO model to detect key fields such as dates, totals, and headers in document images</li>
                <li>Trained a PyTorch classifier with feature extraction techniques to distinguish document types for automated routing</li>
                <li>Evaluated detection, OCR quality, and classification performance using standard vision metrics in a modular Python workflow</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold">HomeLab Network Mapper</h3>
              <ul className="list-disc list-inside">
                <li>Captured 1,000+ packets/sec with Scapy and Snort, detecting 100% of simulated intrusion attempts in testing</li>
                <li>Identified LAN devices with 95%+ OS accuracy for PCs and smartphones using open-ports fingerprinting</li>
                <li>Built a Flask-SocketIO dashboard for live traffic stats, bandwidth tracking, and protocol distribution analysis</li>
              </ul>
            </div>

          </div>

          <h2 className="text-2xl font-bold mb-4 text-purple-400">Projects</h2>
          <div className="space-y-6 text-gray-300">

            <div>
              <div className="flex justify-between items-start mb-2 relative">
                <h3 className="text-lg font-semibold">Blockchain Chain of Custody</h3>
                <div className="flex-grow mx-4 mt-3 border-t border-dotted border-gray-600/50"></div>
                <span className="text-gray-400">Spring 2024</span>
              </div>
              <ul className="list-disc list-inside">
                <li>Developed a blockchain-based Chain of Custody to track evidence from discovery to case resolution</li>
                <li>Deviced the Blockchain to record multiple classes & evidence items, enhancing traceability and integrity in forensics investigation</li>
                <li>Generated functionalities for checking in/out evidence items by authorized parties, improving the transparency of evidence status</li>
                <li>Implemented a verification feature to detect any unauthorized modifications to the blockchain, ensuring the security and legality</li>
              </ul>
            </div>

            <div>
              <div className="flex justify-between items-start mb-2 relative">
                <h3 className="text-lg font-semibold">Hyperledger Fabric: Supply Chain Smart Contract</h3>
                <div className="flex-grow mx-4 mt-3 border-t border-dotted border-gray-600/50"></div>
                <span className="text-gray-400">Spring 2025</span>
              </div>
              <ul className="list-disc list-inside">
                <li>Built and deployed a private blockchain network using Hyperledger Fabric to track product lifecycle in a supply chain</li>
                <li>Implemented chaincode in Go to manage product creation, ownership transfer, and updates</li>
                <li>Deployed on Docker and initialized the ledger with product states for real-time queries</li>
                <li>Configured Fabric network, enhanced transaction integrity, and ensured enterprise-grade security</li>
              </ul>
            </div>

            <div>
              <div className="flex justify-between items-start mb-2 relative">
                <h3 className="text-lg font-semibold">Logic Programming-Driven Robotic Warehouse Optimization</h3>
                <div className="flex-grow mx-4 mt-3 border-t border-dotted border-gray-600/50"></div>
                <span className="text-gray-400">Spring 2025</span>
              </div>
              <ul className="list-disc list-inside">
                <li>Designed a warehouse automation system using LP-driven robots to enhance logistics and minimize human intervention</li>
                <li>Developed grid-based movement planning and collision-avoidance algorithms for autonomous shelf transport</li>
                <li>Integrated strategic routing for fast order fulfillment and dynamic shelf rearrangement</li>
                <li>Focused on scalability and robustness, achieving improvements in throughput and operational efficiency</li>
              </ul>
            </div>

            <div>
              <div className="flex justify-between items-start mb-2 relative">
                <h3 className="text-lg font-semibold">Traffic Accident Hotspot Detection Using Machine Learning</h3>
                <div className="flex-grow mx-4 mt-3 border-t border-dotted border-gray-600/50"></div>
                <span className="text-gray-400">Spring 2025</span>
              </div>
              <ul className="list-disc list-inside">
                <li>Built a predictive system to identify traffic accident hotspots and evaluate accident severity through ML models</li>
                <li>Created a full data mining pipeline with preprocessing, feature engineering, and model evaluation</li>
                <li>Applied Logistic Regression and Random Forest to address spatial imbalance and improve prediction accuracy</li>
                <li>Extracted high-impact factors like visibility and time of day to guide public safety planning</li>
              </ul>
            </div>

            <div>
              <div className="flex justify-between items-start mb-2 relative">
                <h3 className="text-lg font-semibold">Context-Aware Health Monitoring App</h3>
                <div className="flex-grow mx-4 mt-3 border-t border-dotted border-gray-600/50"></div>
                <span className="text-gray-400">Fall 2024</span>
              </div>
              <ul className="list-disc list-inside">
                <li>Developed an Android app that monitors heart and respiratory rates using smartphone sensors and user feedback</li>
                <li>Used back camera with flash and accelerometer/orientation sensors for real-time vital tracking</li>
                <li>Stored health data locally with symptom logging to assist in health trend analysis</li>
                <li>Enhanced app responsiveness through efficient sensor data processing and contextual insights</li>
              </ul>
            </div>

            <div>
              <div className="flex justify-between items-start mb-2 relative">
                <h3 className="text-lg font-semibold">Distributed Media Streaming Analytics Dashboard</h3>
                <div className="flex-grow mx-4 mt-3 border-t border-dotted border-gray-600/50"></div>
                <span className="text-gray-400">Fall 2024</span>
              </div>
              <ul className="list-disc list-inside">
                <li>Engineered a distributed dashboard to analyze content trends and user behavior for streaming services</li>
                <li>Leveraged CockroachDB and AWS-backed Flask APIs for distributed data routing and storage</li>
                <li>Visualized trends using Streamlit to support decision-making on content delivery and subscriptions</li>
                <li>Simulated streaming datasets to evaluate user engagement, enabling future real-time analytics integration</li>
              </ul>
            </div>

          </div>
        </section>

      </div>
    </div>
  );
}

export default Resume;
