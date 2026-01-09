import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Github, Linkedin, Mail, ChevronDown, ExternalLink } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isResearchOpen, setIsResearchOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Pentest', path: '/pentest' },
    { name: 'Training', path: '/training' },
    { name: 'Mentoring', path: '/mentoring' },
  ];

  const researchLinks = [
    { name: 'OffenSkill Trainings Research', url: 'https://thinkloveshare.com/offenskill/' },
    { name: 'Personal Research', url: 'https://thinkloveshare.com/hacking/' },
    { name: 'Live Hacking Streams', url: 'https://ssrf.offenskill.com/' }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <nav className="fixed w-full top-0 z-50 bg-[#0f172a]/80 backdrop-blur-md border-b border-white/5">
        <div className="container mx-auto px-4 h-20 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group">
            <img src="/assets/original/logo.png" alt="OffenSkill Logo" className="w-10 h-10 object-contain" />
            <span className="font-heading font-bold text-xl tracking-tight text-white group-hover:text-[#c026d3] transition-colors">
              Offen<span className="text-[#c026d3] group-hover:text-white transition-colors">Skill</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-medium transition-colors ${location.pathname === link.path
                    ? 'text-[#c026d3]'
                    : 'text-gray-300 hover:text-white'
                  }`}
              >
                {link.name}
              </Link>
            ))}

            {/* Research Dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => setIsResearchOpen(true)}
              onMouseLeave={() => setIsResearchOpen(false)}
            >
              <button className={`flex items-center gap-1 font-medium transition-colors ${isResearchOpen ? 'text-[#c026d3]' : 'text-gray-300 hover:text-white'
                }`}>
                Public Research <ChevronDown className="w-4 h-4" />
              </button>

              <AnimatePresence>
                {isResearchOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full text-sm right-0 w-64 pt-2"
                  >
                    <div className="bg-[#1e293b] border border-white/10 rounded-xl shadow-xl overflow-hidden p-1 flex flex-col">
                      {researchLinks.map((link) => (
                        <a
                          key={link.url}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block px-4 py-3 text-gray-300 hover:text-white hover:bg-white/5 rounded-lg flex items-center justify-between group/link"
                        >
                          {link.name}
                          <ExternalLink className="w-3 h-3 opacity-0 group-hover/link:opacity-100 transition-opacity text-[#c026d3]" />
                        </a>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              to="/faq"
              className={`font-medium transition-colors ${location.pathname === '/faq'
                  ? 'text-[#c026d3]'
                  : 'text-gray-300 hover:text-white'
                }`}
            >
              FAQ
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-[#0f172a] border-b border-white/5 overflow-hidden"
            >
              <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={`text-lg font-medium ${location.pathname === link.path
                        ? 'text-[#c026d3]'
                        : 'text-gray-300'
                      }`}
                  >
                    {link.name}
                  </Link>
                ))}

                <div className="py-2 border-t border-white/5 border-b mb-2">
                  <span className="text-gray-500 text-sm uppercase tracking-wider mb-2 block">Public Research</span>
                  {researchLinks.map((link) => (
                    <a
                      key={link.url}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setIsOpen(false)}
                      className="block py-2 text-lg font-medium text-gray-300 hover:text-[#c026d3]"
                    >
                      {link.name}
                    </a>
                  ))}
                </div>

                <Link
                  to="/faq"
                  onClick={() => setIsOpen(false)}
                  className={`text-lg font-medium ${location.pathname === '/faq'
                      ? 'text-[#c026d3]'
                      : 'text-gray-300'
                    }`}
                >
                  FAQ
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <main className="flex-grow pt-20">
        {children}
      </main>

      <footer className="bg-[#0f172a] border-t border-white/5 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-center md:text-left">
              <h3 className="font-heading font-bold text-lg mb-2">OffenSkill</h3>
              <p className="text-gray-400 text-sm">
                Your Welcoming Cybersecurity Partner
              </p>
            </div>

            <div className="flex items-center gap-6">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#c026d3] transition-colors">
                <Github className="w-6 h-6" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#c026d3] transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="mailto:contact@offenskill.com" className="text-gray-400 hover:text-[#c026d3] transition-colors">
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>
          <div className="mt-8 text-center text-gray-500 text-sm">
            © {new Date().getFullYear()} OffenSkill. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
