import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              Our <span className="text-yellow-400">Work</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Every project tells a story. Here's how we're engineering solutions that matter.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Project: SwasthyaTrack */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl border border-yellow-500/20 overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              {/* Project Info */}
              <div className="p-8 lg:p-12">
                <div className="mb-6">
                  <span className="inline-block px-3 py-1 text-sm font-semibold text-black bg-yellow-400 rounded-full mb-4">
                    Featured Project
                  </span>
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    SwasthyaTrack
                  </h2>
                  <p className="text-xl text-gray-300 mb-6">
                    Health Tracker for Residential Schools
                  </p>
                </div>

                {/* Features */}
                <div className="mb-8">
                  <ul className="text-gray-300 space-y-3 text-lg">
                    <li className="flex items-start space-x-3">
                      <span className="text-yellow-400 font-bold">•</span>
                      <span><strong>Daily Meal Logging</strong>: Log meals and track nutrition.</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="text-yellow-400 font-bold">•</span>
                      <span><strong>Health Metric Tracking</strong>: Monitor vital signs and physical activity.</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="text-yellow-400 font-bold">•</span>
                      <span><strong>Visualization Aid</strong>: Interactive dashboards for insights.</span>
                    </li>
                  </ul>
                  <p className="text-gray-300 leading-relaxed mt-6">
                    Designed for students, teachers and staff to promote healthy habits and improve well-being.
                  </p>
                </div>

                {/* Tech Stack */}
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-yellow-400 mb-3">Tech Stack</h3>
                  <div className="flex flex-wrap gap-2">
                    {['React', 'TypeScript', 'Supabase', 'Tailwind CSS', 'Figma', 'Node.js'].map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-sm bg-gray-700 text-gray-300 rounded-full border border-gray-600"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="flex items-center space-x-2 bg-gray-600 text-gray-300 px-6 py-3 rounded-lg font-semibold cursor-not-allowed opacity-70">
                    <ExternalLink size={18} />
                    <span>Coming Soon ✨</span>
                  </button>
                  <button className="flex items-center space-x-2 border border-gray-600 text-gray-400 px-6 py-3 rounded-lg font-semibold cursor-not-allowed opacity-70">
                    <Github size={18} />
                    <span>Coming Soon ✨</span>
                  </button>
                </div>
              </div>

              {/* Project Visual */}
              <div className="bg-gradient-to-br from-yellow-400/10 to-yellow-600/5 p-8 lg:p-12 flex items-center justify-center">
                <div className="w-full max-w-md">
                  <div className="bg-gray-800 rounded-xl p-6 border border-yellow-500/30 shadow-2xl">
                    <div className="bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-lg p-4 mb-4">
                      <h4 className="text-black font-bold text-lg">SwasthyaTrack</h4>
                      <p className="text-black/80 text-sm">Your Health, Simplified</p>
                    </div>
                    <div className="space-y-3">
                      <div className="bg-gray-700 rounded-lg h-4"></div>
                      <div className="bg-gray-700 rounded-lg h-4 w-3/4"></div>
                      <div className="bg-gray-700 rounded-lg h-4 w-1/2"></div>
                      <div className="flex space-x-2 pt-2">
                        <div className="bg-yellow-400 rounded-full w-8 h-8"></div>
                        <div className="bg-gray-600 rounded-full w-8 h-8"></div>
                        <div className="bg-gray-600 rounded-full w-8 h-8"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Coming Soon */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-8 text-white">
            What's <span className="text-yellow-400">Next</span>
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
            We're constantly innovating and building new solutions. Here's what we're working on next.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "EcoConnect",
                description: "Connecting communities through sustainable action tracking",
                status: "In Development"
              },
              {
                title: "LearnFlow",
                description: "Personalized learning paths powered by AI",
                status: "Research Phase"
              },
              {
                title: "MindSpace",
                description: "Mental wellness platform for Gen Z professionals",
                status: "Concept Stage"
              }
            ].map((project, index) => (
              <div
                key={index}
                className="p-6 rounded-lg bg-gray-800/30 border border-yellow-500/20 hover:border-yellow-500/40 transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <span className="inline-block px-3 py-1 text-xs font-semibold text-yellow-400 bg-yellow-400/10 rounded-full border border-yellow-400/30">
                  {project.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
