
import { Heart, Target, Eye } from 'lucide-react';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';

const About = () => {
  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              Meet the <span className="text-yellow-400">Founders</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Two women, one vision: to build technology that empowers and inspires.
            </p>
          </div>
        </div>
      </section>

      {/* Founders Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="space-y-8">
              <HoverCard>
                <HoverCardTrigger>
                  <div className="p-8 rounded-lg bg-gray-800/50 border border-yellow-500/20 hover:border-yellow-500/40 transition-all duration-300 cursor-pointer">
                    <h3 className="text-3xl font-bold text-yellow-400 mb-4">Maitri</h3>
                    <p className="text-gray-300 leading-relaxed mb-4">
                      A visionary developer with a passion for creating meaningful digital experiences. 
                      Maitri brings the technical expertise that transforms ideas into reality, 
                      specializing in full-stack development and user experience design.
                    </p>
                    <p className="text-gray-400 text-sm">
                      "Code is poetry, and every function should tell a story."
                    </p>
                  </div>
                </HoverCardTrigger>
                <HoverCardContent className="w-80">
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold">Technical Expertise</h4>
                    <p className="text-sm text-muted-foreground">
                      Full-stack development, UI/UX design, React, TypeScript, and modern web technologies. 
                      Passionate about creating accessible and beautiful digital experiences.
                    </p>
                  </div>
                </HoverCardContent>
              </HoverCard>
              
              <HoverCard>
                <HoverCardTrigger>
                  <div className="p-8 rounded-lg bg-gray-800/50 border border-yellow-500/20 hover:border-yellow-500/40 transition-all duration-300 cursor-pointer">
                    <h3 className="text-3xl font-bold text-yellow-400 mb-4">Priyal</h3>
                    <p className="text-gray-300 leading-relaxed mb-4">
                      A strategic thinker who bridges the gap between technology and impact. 
                      Priyal focuses on product strategy, user research, and ensuring every 
                      solution addresses real-world problems with innovative approaches.
                    </p>
                    <p className="text-gray-400 text-sm">
                      "The best technology is invisible — it just makes life better."
                    </p>
                  </div>
                </HoverCardTrigger>
                <HoverCardContent className="w-80">
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold">Strategic Focus</h4>
                    <p className="text-sm text-muted-foreground">
                      Product strategy, user research, market analysis, and social impact design. 
                      Expert in translating user needs into innovative tech solutions.
                    </p>
                  </div>
                </HoverCardContent>
              </HoverCard>
            </div>
            
            <div className="flex items-center justify-center">
              <div className="w-full max-w-md aspect-square bg-gradient-to-br from-yellow-400/20 to-yellow-600/10 rounded-full flex items-center justify-center border border-yellow-500/30">
                <div className="text-center">
                  <p className="text-yellow-400 font-bold text-3xl mb-2">Founders</p>
                  <p className="text-white text-2xl font-semibold">Maitri & Priyal</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-lg bg-gray-800/30 border border-yellow-500/20 hover:border-yellow-500/40 transition-all duration-300">
              <div className="mb-6">
                <Heart className="w-16 h-16 text-yellow-400 mx-auto" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
              <p className="text-gray-300 leading-relaxed">
                We build tech that cares. Code that empowers. Every project we undertake 
                is designed to create positive impact and meaningful change.
              </p>
            </div>
            
            <div className="text-center p-8 rounded-lg bg-gray-800/30 border border-yellow-500/20 hover:border-yellow-500/40 transition-all duration-300">
              <div className="mb-6">
                <Eye className="w-16 h-16 text-yellow-400 mx-auto" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
              <p className="text-gray-300 leading-relaxed">
                To design solutions that merge purpose with technology, creating a future 
                where innovation serves humanity and empowers communities.
              </p>
            </div>
            
            <div className="text-center p-8 rounded-lg bg-gray-800/30 border border-yellow-500/20 hover:border-yellow-500/40 transition-all duration-300">
              <div className="mb-6">
                <Target className="w-16 h-16 text-yellow-400 mx-auto" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Our Values</h3>
              <p className="text-gray-300 leading-relaxed">
                Authenticity, innovation, and impact guide everything we do. We believe 
                in transparent collaboration and building products that truly matter.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-8 text-white">
            Our <span className="text-yellow-400">Story</span>
          </h2>
          <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
            <p>
              MaiPri Studio was born from a simple belief: technology should be a force for good. 
              As Gen Z founders, we've grown up alongside the digital revolution, witnessing both 
              its incredible potential and its pitfalls.
            </p>
            <p>
              We started this studio because we saw a gap in the market — too many products built 
              without purpose, too many solutions that solve the wrong problems. We wanted to create 
              something different: a studio that puts impact first, innovation second, and profit third.
            </p>
            <p className="text-yellow-400 font-semibold">
              "We're not just building products. We're engineering the future we want to live in."
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
