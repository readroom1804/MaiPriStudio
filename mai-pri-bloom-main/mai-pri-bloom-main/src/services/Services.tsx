import { Palette, Code, Zap, Users } from 'lucide-react';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';
import TypewriterText from '../components/TypewriterText';

const Services = () => {
  const services = [
    {
      icon: Palette,
      title: "UX/UI Design",
      description: "Creating intuitive, beautiful interfaces that users love to interact with.",
      features: ["User Research & Analysis", "Wireframing & Prototyping", "Visual Design Systems", "Usability Testing"],
      hoverInfo: "We design with empathy, creating user experiences that feel natural and delightful. Our design process is rooted in research and tested with real users."
    },
    {
      icon: Code,
      title: "Web App Development",
      description: "Building robust, scalable web applications with modern technologies.",
      features: ["Full-Stack Development", "React & TypeScript", "Database Design", "API Integration"],
      hoverInfo: "From concept to deployment, we build web applications that scale. Using cutting-edge technologies like React, TypeScript, and modern cloud infrastructure."
    },
    {
      icon: Zap,
      title: "MVP Prototyping",
      description: "Rapidly transforming your ideas into testable, market-ready prototypes.",
      features: ["Rapid Prototyping", "Market Validation", "Technical Feasibility", "Iterative Development"],
      hoverInfo: "Get your idea to market fast. We build MVPs that help you validate concepts, gather user feedback, and secure funding."
    },
    {
      icon: Users,
      title: "Social-Tech Consulting",
      description: "Strategic guidance for products that create positive social impact.",
      features: ["Impact Assessment", "Product Strategy", "Tech for Good", "Community Building"],
      hoverInfo: "Technology for good. We help organizations leverage technology to create meaningful social impact and build sustainable communities."
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white min-h-[120px] flex items-center justify-center">
              <TypewriterText 
                texts={[
                  "What We Offer",
                  "Our Services",
                  "How We Help"
                ]}
                typingSpeed={100}
                deletingSpeed={60}
                pauseDuration={2000}
                className="text-yellow-400"
              />
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              From concept to launch, we provide comprehensive solutions that bring your vision to life.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <HoverCard key={index}>
                  <HoverCardTrigger>
                    <div className="group p-8 rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-yellow-500/20 hover:border-yellow-500/40 transition-all duration-300 hover:scale-105 cursor-pointer">
                      <div className="mb-6">
                        <div className="w-16 h-16 bg-yellow-400/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-yellow-400/20 transition-colors">
                          <IconComponent className="w-8 h-8 text-yellow-400" />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                        <p className="text-gray-300 leading-relaxed mb-6">
                          {service.description}
                        </p>
                      </div>
                      
                      <div className="space-y-3">
                        {service.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center space-x-3">
                            <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                            <span className="text-gray-300 text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </HoverCardTrigger>
                  <HoverCardContent className="w-80">
                    <div className="space-y-2">
                      <h4 className="text-sm font-semibold">{service.title}</h4>
                      <p className="text-sm text-muted-foreground">
                        {service.hoverInfo}
                      </p>
                    </div>
                  </HoverCardContent>
                </HoverCard>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
              Our <span className="text-yellow-400">Process</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We follow a proven methodology that ensures every project delivers maximum impact.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Discover", description: "Understanding your vision, goals, and challenges" },
              { step: "02", title: "Design", description: "Creating user-centered solutions that work" },
              { step: "03", title: "Develop", description: "Building with cutting-edge technologies" },
              { step: "04", title: "Deploy", description: "Launching and optimizing for success" }
            ].map((phase, index) => (
              <div key={index} className="text-center">
                <div className="mb-4">
                  <span className="text-6xl font-bold text-yellow-400/20">{phase.step}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{phase.title}</h3>
                <p className="text-gray-300">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
            Ready to build something <span className="text-yellow-400">amazing</span>?
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Let's discuss your project and explore how we can bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-yellow-400 text-black px-8 py-4 rounded-lg font-semibold hover:bg-yellow-300 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-yellow-400/25"
            >
              Start Your Project
            </a>
            <a
              href="/projects"
              className="border-2 border-yellow-400 text-yellow-400 px-8 py-4 rounded-lg font-semibold hover:bg-yellow-400 hover:text-black transition-all duration-300 hover:scale-105"
            >
              View Our Work
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
