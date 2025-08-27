"use client";

export default function About() {
  const skills = [
    "Python", "Django", "SQL", "MySQL", "MongoDB", 
    "JavaScript", "React", "Next.js", "Docker", "AWS",
    "HTML5", "CSS3", "Git", "REST API", "Power BI"
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            About <span className="text-indigo-600">Me</span>
          </h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Motivated and detail-oriented Computer Science graduate with expertise in
              Python, SQL, Django, and frontend technologies. Skilled in building scalable
              applications, optimizing database performance, and creating responsive UIs.
            </p>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Passionate about problem-solving, data-driven insights, and delivering impactful
              business solutions in collaborative environments. Continuously learning and
              adapting to new technologies to stay at the forefront of development practices.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="bg-indigo-50 p-4 rounded-lg text-center">
                <div className="text-3xl font-bold text-indigo-600">30%</div>
                <div className="text-sm text-gray-600 mt-1">Query Optimization</div>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg text-center">
                <div className="text-3xl font-bold text-purple-600">45%</div>
                <div className="text-sm text-gray-600 mt-1">UX Improvement</div>
              </div>
            </div>
          </div>

          {/* Skills Section */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">Technical Skills</h3>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, index) => (
                <span 
                  key={index}
                  className="px-4 py-2 bg-white border border-indigo-100 rounded-full text-indigo-700 text-sm font-medium shadow-sm hover:shadow-md transition-shadow duration-300 hover:bg-indigo-50"
                >
                  {skill}
                </span>
              ))}
            </div>
            
            {/* Experience Highlights */}
            <div className="mt-10 p-6 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl border border-indigo-100">
              <h4 className="text-lg font-semibold text-indigo-800 mb-3">What I Bring</h4>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 mt-1">✓</span>
                  <span className="text-gray-700">Backend development with Python & Django</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 mt-1">✓</span>
                  <span className="text-gray-700">Database design & optimization</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 mt-1">✓</span>
                  <span className="text-gray-700">Responsive frontend development</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 mt-1">✓</span>
                  <span className="text-gray-700">Data analysis & visualization</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}