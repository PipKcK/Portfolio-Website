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
              <h3 className="font-semibold mb-2">Core</h3>
              <p className="text-gray-300">Django, Node.js, Laravel, .NET, MAUI, Android Studio, React Native, Wireshark, Ghidra, Burp Suite, ProDiscover, Autopsy, Volatility, scikit-learn, pandas, NumPy, Decision Trees, Ethereum, Hyperledger Fabric, MetaMask, web3.js, Salesforce, Splunk, Git, Docker, Azure DevOps</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Programming Languages</h3>
              <p className="text-gray-300">Python, C, C++, C#, JavaScript, Java, Kotlin, Go, Solidity</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Databases</h3>
              <p className="text-gray-300">Apache Cassandra, Amazon DynamoDB, CockroachDB, MongoDB, PostgreSQL, Redis, Neo4j, Elasticsearch</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Certifications</h3>
              <p className="text-gray-300">CompTIA Security+</p>
            </div>
          </div>
        </section>

        <hr className="border-t-4 border-gray-200/20 my-8" />

        {/* Experience section */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-purple-400">Experience</h2>

          {/* Paqt Capstone */}
          <div className="mb-6">
            <div className="flex justify-between items-start mb-2 relative">
              <h3 className="text-lg font-semibold">Student Developer (Capstone)</h3>
              <div className="flex-grow mx-4 mt-3 border-t border-dotted border-gray-600/50"></div>
              <span className="text-gray-400">Aug 2023 – May 2024</span>
            </div>
            <p className="text-gray-400 mb-2">Paqt, Toronto, Ontario</p>
            <ul className="list-disc list-inside text-gray-300 space-y-1">
              <li>Integrated Google Calendar API for team management using Node.js & Laravel</li>
              <li>Helped design document agreement templates using Node.js & ReactJS</li>
            </ul>
          </div>

          {/* SIS Internships */}
          <div className="mb-6">
            <div className="flex justify-between items-start mb-2 relative">
              <h3 className="text-lg font-semibold">Intern</h3>
              <div className="flex-grow mx-4 mt-3 border-t border-dotted border-gray-600/50"></div>
              <span className="text-gray-400">May 2024 – Jun 2024</span>
            </div>
            <p className="text-gray-400 mb-2">SIS Group Enterprises, Delhi, India</p>
            <ul className="list-disc list-inside text-gray-300 space-y-1">
              <li>Built executive Power BI reports visualizing sales, revenue, and KPIs</li>
              <li>Added sentiment analysis and regional insights for competitive planning</li>
            </ul>
          </div>

          <div className="mb-6">
            <div className="flex justify-between items-start mb-2 relative">
              <h3 className="text-lg font-semibold">Intern</h3>
              <div className="flex-grow mx-4 mt-3 border-t border-dotted border-gray-600/50"></div>
              <span className="text-gray-400">May 2023 – Jun 2023</span>
            </div>
            <p className="text-gray-400 mb-2">SIS Group Enterprises, Delhi, India</p>
            <ul className="list-disc list-inside text-gray-300 space-y-1">
              <li>Implemented file compression/encryption using RSA & DH key exchange</li>
              <li>Designed secure file transmission with metadata and reconstruction</li>
            </ul>
          </div>

          {/* ASU TA and Peer Mentor */}
          <div className="mb-6">
            <div className="flex justify-between items-start mb-2 relative">
              <h3 className="text-lg font-semibold">Teaching Assistant (Network Security)</h3>
              <div className="flex-grow mx-4 mt-3 border-t border-dotted border-gray-600/50"></div>
              <span className="text-gray-400">Jan 2024 – May 2024</span>
            </div>
            <p className="text-gray-400 mb-2">Arizona State University, Tempe, AZ</p>
            <ul className="list-disc list-inside text-gray-300 space-y-1">
              <li>Supported over 55 students on traffic analysis and network intrusion</li>
              <li>Held weekly office hours for doubt resolution and assignment help</li>
            </ul>
          </div>

          <div className="mb-6">
            <div className="flex justify-between items-start mb-2 relative">
              <h3 className="text-lg font-semibold">Fulton Peer Mentor</h3>
              <div className="flex-grow mx-4 mt-3 border-t border-dotted border-gray-600/50"></div>
              <span className="text-gray-400">Aug 2023 – May 2025</span>
            </div>
            <p className="text-gray-400 mb-2">Arizona State University, Tempe, AZ</p>
            <ul className="list-disc list-inside text-gray-300 space-y-1">
              <li>Mentored over 430 freshmen and hosted 20+ development events</li>
              <li>Led peer collaborations to foster community engagement</li>
            </ul>
          </div>
        </section>

        <hr className="border-t-4 border-gray-200/20 my-8" />

        {/* Projects section */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-purple-400">Projects</h2>
          <div className="space-y-6 text-gray-300">

            <div>
              <h3 className="font-semibold">Sales Performance Analysis</h3>
              <ul className="list-disc list-inside">
                <li>Developed an interactive Power BI dashboard to analyze sales trends, ROI, and performance across multiple channels</li>
                <li>Designed a dynamic executive PowerBI report showcasing total sales, revenue distribution, and key performance indicators</li>
                <li>Built visualizations to compare online, social media, store, and outlet sales, aiding competitive strategy planning</li>
                <li>Integrated sentiment analysis and regional market share insights to identify growth opportunities</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold">Blockchain Chain of Custody</h3>
              <ul className="list-disc list-inside">
                <li>Developed a blockchain-based Chain of Custody to track evidence from discovery to case resolution</li>
                <li>Designed and implemented a blockchain that records multiple classes and evidence items, enhancing traceability and integrity in forensics investigation</li>
                <li>Generated functionalities for checking out and checking in evidence items by authorized parties, improving the transparency of evidence status</li>
                <li>Implemented a verification feature to detect any unauthorized modifications to the blockchain, ensuring the security and legality of the evidence handling process</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold">Hyperledger Fabric: Supply Chain Smart Contract</h3>
              <ul className="list-disc list-inside">
                <li>Built and deployed a private blockchain network using Hyperledger Fabric to track product lifecycle in a supply chain</li>
                <li>Implemented chaincode in Go to manage product creation, ownership transfer, and updates</li>
                <li>Deployed on Docker and initialized the ledger with product states for real-time queries</li>
                <li>Configured Fabric network, enhanced transaction integrity, and ensured enterprise-grade security</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold">Logic Programming-Driven Robotic Warehouse Optimization</h3>
              <ul className="list-disc list-inside">
                <li>Designed a warehouse automation system using LP-driven robots to enhance logistics and minimize human intervention</li>
                <li>Developed grid-based movement planning and collision-avoidance algorithms for autonomous shelf transport</li>
                <li>Integrated strategic routing for fast order fulfillment and dynamic shelf rearrangement</li>
                <li>Focused on scalability and robustness, achieving improvements in throughput and operational efficiency</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold">Traffic Accident Hotspot Detection Using Machine Learning</h3>
              <ul className="list-disc list-inside">
                <li>Built a predictive system to identify traffic accident hotspots and evaluate accident severity through ML models</li>
                <li>Created a full data mining pipeline with preprocessing, feature engineering, and model evaluation</li>
                <li>Applied Logistic Regression and Random Forest to address spatial imbalance and improve prediction accuracy</li>
                <li>Extracted high-impact factors like visibility and time of day to guide public safety planning</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold">Context-Aware Health Monitoring App</h3>
              <ul className="list-disc list-inside">
                <li>Developed an Android app that monitors heart and respiratory rates using smartphone sensors and user feedback</li>
                <li>Used back camera with flash and accelerometer/orientation sensors for real-time vital tracking</li>
                <li>Stored health data locally with symptom logging to assist in health trend analysis</li>
                <li>Enhanced app responsiveness through efficient sensor data processing and contextual insights</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold">Distributed Media Streaming Analytics Dashboard</h3>
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
