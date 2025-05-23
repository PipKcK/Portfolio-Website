import React from 'react';
import { GraduationCap, Award, BookOpen } from 'lucide-react';

function Education() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold mb-12 text-center">Education</h1>

      <div className="space-y-6">
        {/* Masters Section */}
        <section className="bg-gray-800 rounded-lg p-6">
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
        </section>

        {/* Bachelors Section */}
        <section className="bg-gray-800 rounded-lg p-6">
          <div className="flex items-center mb-4">
            <Award className="w-8 h-8 text-purple-400 mr-3" />
            <h2 className="text-2xl font-bold">Bachelor's Degree</h2>
          </div>
          <div className="ml-11">
            <h3 className="text-xl font-semibold mb-2">Master of Science in Computer Science</h3>
            <p className="text-gray-400 mb-1">Arizona State University (ASU) - Ira Fulton School of Engineering</p>
            <p className="text-gray-400 mb-1">2020 - 2024</p>
            <p className="text-gray-400">GPA: 3.55/4.0</p>
          </div>
        </section>

        {/* High School Section */}
        <section className="bg-gray-800 rounded-lg p-6">
          <div className="flex items-center mb-4">
            <BookOpen className="w-8 h-8 text-purple-400 mr-3" />
            <h2 className="text-2xl font-bold">High School Diploma</h2>
          </div>
          <div className="ml-11">
            <h3 className="text-xl font-semibold mb-2">Higher Secondary Education</h3>
            <p className="text-gray-400 mb-1">Mayoor School, Noida</p>
            <p className="text-gray-400 mb-1">2017 - 2019</p>
            <p className="text-gray-400">Grade: 88.88%</p>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Education;