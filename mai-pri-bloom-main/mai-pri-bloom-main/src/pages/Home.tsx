
import { Link } from 'react-router-dom';
import TypewriterText from '../components/TypewriterText';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-yellow-400/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-yellow-600/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="relative z-10 text-center max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 animate-fade-in">
            <img 
              src="/lovable-uploads/5f04eed6-9505-4197-acac-35b1ab5782c1.png" 
              alt="MaiPri Studio" 
              className="h-40 w-auto mx-auto mb-8 animate-scale-in"
            />
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in delay-200 min-h-[200px] flex items-center justify-center">
            <span className="text-white">
              <TypewriterText 
                texts={[
                  "We don't follow trends.",
                  "We engineer them."
                ]}
                typingSpeed={80}
                deletingSpeed={40}
                pauseDuration={1500}
                className="text-yellow-400"
              />
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed animate-fade-in delay-400">
            A women-led tech studio building impact-first and innovation-fueled digital products.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in delay-600">
            <Link
              to="/projects"
              className="bg-yellow-400 text-black px-8 py-4 rounded-lg font-semibold hover:bg-yellow-300 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-yellow-400/25"
            >
              Explore Projects
            </Link>
            <Link
              to="/contact"
              className="border-2 border-yellow-400 text-yellow-400 px-8 py-4 rounded-lg font-semibold hover:bg-yellow-400 hover:text-black transition-all duration-300 hover:scale-105"
            >
              Connect With Us
            </Link>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold mb-8 text-white">
              Building tech that <span className="text-yellow-400">cares</span>
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed mb-12">
              We're Maitri and Priyal — two Gen Z founders who believe technology should empower, 
              not overwhelm. Every line of code we write serves a purpose, every design choice 
              tells a story, and every product we build makes the world a little better.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6 rounded-lg bg-gray-800/50 border border-yellow-500/20 hover:border-yellow-500/40 transition-all duration-300">
                <h3 className="text-2xl font-bold text-yellow-400 mb-4">Impact-First</h3>
                <p className="text-gray-300">Every project starts with a question: How can this make a difference?</p>
              </div>
              <div className="p-6 rounded-lg bg-gray-800/50 border border-yellow-500/20 hover:border-yellow-500/40 transition-all duration-300">
                <h3 className="text-2xl font-bold text-yellow-400 mb-4">Innovation-Fueled</h3>
                <p className="text-gray-300">We push boundaries, challenge norms, and create what doesn't exist yet.</p>
              </div>
              <div className="p-6 rounded-lg bg-gray-800/50 border border-yellow-500/20 hover:border-yellow-500/40 transition-all duration-300">
                <h3 className="text-2xl font-bold text-yellow-400 mb-4">Purpose-Driven</h3>
                <p className="text-gray-300">Our code doesn't just work — it works for good.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
