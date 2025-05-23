import React from 'react';
import { GraduationCap, Award, BookOpen } from 'lucide-react';
import { Briefcase } from 'lucide-react';

function Education() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold mb-12 text-center">Professional Experiences</h1>

      <div className="space-y-6">
        {/* Masters Section */}
        <section className="bg-gray-800 rounded-lg p-6">
          <div className="flex items-center mb-4">
            <Briefcase className="w-8 h-8 text-purple-400 mr-3" />
            <h2 className="text-2xl font-bold">Student Developer (Intern)</h2>
          </div>
          <div className="ml-11">
            <h3 className="text-xl font-semibold mb-2">Paqt, Toronto, Ontario</h3>
            <p className="text-gray-400 mb-1">August 2023 – May 2024</p>
            <ul className="list-disc list-inside text-gray-400 space-y-1">
              <li>Integrated Google Calendar API to streamline team scheduling and improve time management using Node.js & PHP Laravel.</li>
              <li>Contributed to agreement generation features by adding document templates via Node.js & ReactJS.</li>
            </ul>
          </div>
        </section>

        <section className="bg-gray-800 rounded-lg p-6">
          <div className="flex items-center mb-4">
            <Briefcase className="w-8 h-8 text-purple-400 mr-3" />
            <h2 className="text-2xl font-bold">Intern</h2>
          </div>
          <div className="ml-11">
            <h3 className="text-xl font-semibold mb-2">SIS Group Enterprises, Delhi, India</h3>
            <p className="text-gray-400 mb-1">May 2024 – June 2024</p>
            <ul className="list-disc list-inside text-gray-400 space-y-1">
              <li>Designed a dynamic PowerBI executive report showcasing total sales, revenue distribution, and key KPIs.</li>
              <li>Built visualizations comparing sales from online platforms, social media, stores, and outlets for strategic planning.</li>
              <li>Integrated sentiment analysis and regional insights to highlight growth opportunities.</li>
            </ul>
          </div>
        </section>
        
        <section className="bg-gray-800 rounded-lg p-6">
          <div className="flex items-center mb-4">
            <Briefcase className="w-8 h-8 text-purple-400 mr-3" />
            <h2 className="text-2xl font-bold">Intern</h2>
          </div>
          <div className="ml-11">
            <h3 className="text-xl font-semibold mb-2">SIS Group Enterprises, Delhi, India</h3>
            <p className="text-gray-400 mb-1">May 2023 – June 2023</p>
            <ul className="list-disc list-inside text-gray-400 space-y-1">
              <li>Implemented file compression and encryption using RSA and Diffie-Hellman Key Exchange for data confidentiality.</li>
              <li>Designed a system to securely transmit file metadata (name, date, signature, hash) followed by file data.</li>
              <li>Developed a receiving system to merge, decrypt, and decompress data to a user-specified location.</li>
            </ul>
          </div>
        </section>

        <section className="bg-gray-800 rounded-lg p-6">
          <div className="flex items-center mb-4">
            <Briefcase className="w-8 h-8 text-purple-400 mr-3" />
            <h2 className="text-2xl font-bold">Teaching Assistant (Network Security)</h2>
          </div>
          <div className="ml-11">
            <h3 className="text-xl font-semibold mb-2">Arizona State University, Tempe, AZ</h3>
            <p className="text-gray-400 mb-1">January 2024 – May 2024</p>
            <ul className="list-disc list-inside text-gray-400 space-y-1">
              <li>Collaborated with faculty to design course structure and develop instructional materials.</li>
              <li>Guided 55+ students through assignments on Traffic Analysis, Intrusion Detection, and Network Mapping.</li>
              <li>Conducted weekly office hours (in-person and online) to support student learning.</li>
            </ul>
          </div>
        </section>

        <section className="bg-gray-800 rounded-lg p-6">
          <div className="flex items-center mb-4">
            <Briefcase className="w-8 h-8 text-purple-400 mr-3" />
            <h2 className="text-2xl font-bold">Fulton Peer Mentor</h2>
          </div>
          <div className="ml-11">
            <h3 className="text-xl font-semibold mb-2">Arizona State University, Tempe, AZ</h3>
            <p className="text-gray-400 mb-1">August 2023 – May 2025</p>
            <ul className="list-disc list-inside text-gray-400 space-y-1">
              <li>Mentored 430+ freshmen and organized 20+ large-scale events for academic and personal growth.</li>
              <li>Collaborated with peer mentors to strengthen student support and community engagement.</li>
            </ul>
          </div>
        </section>

      </div>
    </div>
  );
}

export default Education;