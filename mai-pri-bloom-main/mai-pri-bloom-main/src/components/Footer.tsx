
import { Link } from 'react-router-dom';
import { Instagram, Mail } from 'lucide-react';

const Footer = () => {
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <footer className="bg-black border-t border-yellow-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Tagline */}
          <div className="space-y-4">
            <img 
              src="/lovable-uploads/5f04eed6-9505-4197-acac-35b1ab5782c1.png" 
              alt="MaiPri Studio" 
              className="h-10 w-auto"
            />
            <p className="text-yellow-400 font-medium">
              We don't follow trends. We engineer them.
            </p>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold">Navigate</h3>
            <div className="flex flex-wrap gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="text-gray-400 hover:text-yellow-400 transition-colors text-sm"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact & Social */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold">Connect</h3>
            <div className="space-y-2">
              <a
                href="mailto:mpchronicles2213@gmail.com"
                className="flex items-center space-x-2 text-gray-400 hover:text-yellow-400 transition-colors text-sm"
              >
                <Mail size={16} />
                <span>mpchronicles2213@gmail.com</span>
              </a>
              <div className="flex space-x-4 pt-2">
                <a
                  href="https://instagram.com/MaiPriStudio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-yellow-400 transition-colors"
                >
                  <Instagram size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-yellow-500/20 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            Made with ❤️ by MaiPri Studio • Copyright © 2025
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
