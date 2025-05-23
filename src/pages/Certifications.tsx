import React from 'react';
import { Award, Calendar, ExternalLink, GraduationCap, BookOpen } from 'lucide-react';

const certifications = [
  {
    name: 'CompTIA Security+',
    organization: 'CompTIA',
    date: 'January 2024',
    credentialId: '85cfe960-0da0-4bf8-8d6e-b5815af56c89',
    link: 'https://www.credly.com/badges/85cfe960-0da0-4bf8-8d6e-b5815af56c89/public_url',
    skills: ['Network Security', 'Cryptography', 'Risk Management', 'Security Protocols']
  },
  {
    name: 'JPMorgan Chase & Co. Cybersecurity Job Simulation',
    organization: 'Forage',
    date: 'July 2023',
    credentialId: 'rrvZrsi9k7XJbATCW',
    link: 'https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/J.P.%20Morgan/gWbW5qHAChqQBGWpA_JPMorgan%20Chase%20&%20Co._LNHZhLoYaJ4Aj9v3f_1688705098004_completion_certificate.pdf',
    skills: ['Network Security', 'Threat Analysis', 'Security Operations', 'Incident Response']
  },
  {
    name: 'Ethical Hacking',
    organization: 'MSME-TECHNOLOGY DEVELOPMENT CENTRE (PPDCAGRA)',
    date: 'June 2023',
    credentialId: 'MSME-TDC-EH-2023',
    link: 'https://www.linkedin.com/in/ujjwal-baranwal-asu/details/certifications/1706063202496/single-media-viewer/?profileId=ACoAADXaxUgBuHeCE8L3eW1P054Ai8RwV6zmR6w',
    skills: ['Penetration Testing', 'Vulnerability Assessment', 'Security Tools', 'Ethical Hacking']
  }
];

function Certifications() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold mb-12 text-center">Certifications</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {certifications.map((cert, index) => (
          <div key={index} className="bg-gray-800 rounded-lg p-6 hover:transform hover:scale-105 transition-all duration-300">
            <div className="flex items-start justify-between mb-4">
              <Award className="text-purple-400 w-8 h-8 flex-shrink-0" />
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-purple-400 transition-colors"
              >
                <ExternalLink size={20} />
              </a>
            </div>

            <h2 className="text-xl font-semibold mb-2">{cert.name}</h2>
            <p className="text-gray-400 mb-4">{cert.organization}</p>
            
            <div className="flex items-center text-sm text-gray-500 mb-4">
              <Calendar size={16} className="mr-2" />
              <span>{cert.date}</span>
            </div>

            <div className="mb-4">
              <p className="text-sm text-gray-400">
                Credential ID: {cert.credentialId}
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {cert.skills.map((skill, i) => (
                <span
                  key={i}
                  className="px-3 py-1 bg-purple-400/20 text-purple-300 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Additional Resources */}
      <div className="mt-16 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-2xl font-bold mb-6">Continuing Education</h2>
        <div className="bg-gray-800 rounded-lg p-6">
          <p className="text-gray-300 mb-4">
            Always learning and expanding my knowledge in the field of Cybersecurity.
            Currently pursuing additional certifications in:
          </p>
          <ul className="list-disc list-inside text-gray-400 space-y-2">
            <li>Microsoft Certified: Security, Compliance, and Identity Fundamentals (SC-900)</li>
            <li>Microsoft Certified: Azure Security Engineer Associate (AZ-500)</li>
          </ul>
        </div>
      </div>

      {/* Education */}
      <div className="mt-16 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-2xl font-bold mb-6">Degrees and Diplomas</h2>
        <div className="bg-gray-800 rounded-lg p-6">
          {/* Masters */}
          <div className="flex items-center mb-4">
            <GraduationCap className="w-8 h-8 text-purple-400 mr-3" />
            <h2 className="text-2xl font-bold">Master's Degree</h2>
          </div>
          <div className="ml-11">
            <h3 className="text-xl font-semibold mb-2">Master of Science in Computer Science (Cybersecurity)</h3>
            <p className="text-gray-400 mb-1">Arizona State University (ASU) - Ira Fulton School of Engineering</p>
            <p className="text-gray-400 mb-1">2024 - Present</p>
            <p className="text-gray-400">GPA: 3.94/4.0</p>
          </div>

          <hr className="border-t-4 border-gray-200/20 my-8" />

          {/* Bachelors */}
          <div className="flex items-center mb-4">
            <GraduationCap className="w-8 h-8 text-purple-400 mr-3" />
            <h2 className="text-2xl font-bold">Bachelor's Degree</h2>
          </div>
          <div className="ml-11">
            <h3 className="text-xl font-semibold mb-2">Master of Science in Computer Science</h3>
            <p className="text-gray-400 mb-1">Arizona State University (ASU) - Ira Fulton School of Engineering</p>
            <p className="text-gray-400 mb-1">2020 - 2024</p>
            <p className="text-gray-400">GPA: 3.55/4.0</p>
          </div>

          <hr className="border-t-4 border-gray-200/20 my-8" />

          {/* High School */}
          <div className="flex items-center mb-4">
            <GraduationCap className="w-8 h-8 text-purple-400 mr-3" />
            <h2 className="text-2xl font-bold">High School Diploma</h2>
          </div>
          <div className="ml-11">
            <h3 className="text-xl font-semibold mb-2">Higher Secondary Education</h3>
            <p className="text-gray-400 mb-1">Mayoor School, Noida</p>
            <p className="text-gray-400 mb-1">2017 - 2019</p>
            <p className="text-gray-400">Grade: 88.88%</p>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Certifications;