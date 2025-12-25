const Footer = () => {
  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' }
  ];

  const socialLinks = [
    { icon: 'fab fa-github', url: 'https://github.com/shivansh-16', label: 'GitHub' },
    { icon: 'fab fa-linkedin', url: 'https://www.linkedin.com/in/shivansh-pawar/', label: 'LinkedIn' },
    { icon: 'fab fa-twitter', url: 'https://x.com/ShivanshPa80814', label: 'Twitter' }
  ];

  const scrollToSection = (href) => {
    if (href.startsWith('#')) {
      const element = document.getElementById(href.substring(1));
      if (element) {
        const offsetTop = element.offsetTop - 80;
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      }
    }
  };

  return (
    <footer className="bg-gray-50 border-t border-gray-200 py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Footer Info */}
          <div className="md:col-span-2">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent mb-4">
              Shivansh Pawar
            </div>
            <p className="text-gray-600 max-w-md">
              Crafting digital experiences with passion and precision.
            </p>
          </div>

          {/* Footer Links */}
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h4 className="text-gray-900 font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-gray-600 hover:text-blue-500 transition-colors duration-300"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-gray-900 font-semibold mb-4">Connect</h4>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-100 border border-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:bg-blue-500 hover:text-white hover:border-blue-500 transition-all duration-300"
                    aria-label={social.label}
                  >
                    <i className={social.icon}></i>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="pt-8 border-t border-gray-200 text-center">
          <p className="text-gray-600">
            &copy; 2025 Shivansh Pawar. All rights reserved. Made with ❤️
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;