import { useState, useEffect } from 'react';

const Hero = () => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const texts = [
    'Full-Stack Web Developer',
    'Frontend Specialist',
    'Creative Coder'
  ];

  useEffect(() => {
    const type = () => {
      const current = texts[currentIndex];
      const shouldDelete = isDeleting;

      if (shouldDelete) {
        setCurrentText(current.substring(0, currentText.length - 1));
        if (currentText === '') {
          setIsDeleting(false);
          setCurrentIndex((currentIndex + 1) % texts.length);
        }
      } else {
        setCurrentText(current.substring(0, currentText.length + 1));
        if (currentText === current) {
          setTimeout(() => setIsDeleting(true), 2500);
          return;
        }
      }
    };

    const timer = setTimeout(type, isDeleting ? 80 : 120);
    return () => clearTimeout(timer);
  }, [currentText, currentIndex, isDeleting, texts]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden bg-gradient-to-br from-blue-50 to-cyan-50">
      {/* Floating Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full opacity-10 animate-float"></div>
        <div className="absolute top-60 right-20 w-32 h-32 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full opacity-10 animate-float animation-delay-2000"></div>
        <div className="absolute top-40 right-40 w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full opacity-10 animate-float animation-delay-4000"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-24 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div data-aos="fade-up" data-aos-duration="1000">
            <div className="text-lg text-blue-500 font-medium mb-2">Hello, I'm</div>
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
                Shivansh Pawar
              </span>
            </h1>
            <h2 className="text-3xl md:text-4xl text-gray-600 mb-4 font-medium">
              <span className="relative">
                {currentText}
                <span className="animate-blink text-blue-500">|</span>
              </span>
            </h2>
            <p className="text-xl text-blue-500 font-semibold mb-2">
              Turning Ideas into Digital Reality
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              I'm passionate about creating exceptional digital experiences through clean code,
              innovative solutions, and user-centered design. Let's build something amazing together.
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => scrollToSection('projects')}
                className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
              >
                <i className="fas fa-rocket mr-2"></i>
                View My Work
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="border-2 border-blue-500 text-blue-500 px-8 py-3 rounded-lg hover:bg-blue-500 hover:text-white transition-all duration-300"
              >
                <i className="fas fa-envelope mr-2"></i>
                Get In Touch
              </button>
            </div>
          </div>

          {/* Visual */}
          <div data-aos="fade-left" data-aos-duration="1000" data-aos-delay="200">
            <div className="relative">
              <div className="bg-white/80 backdrop-blur-md rounded-3xl p-8 shadow-xl border border-white/20 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 opacity-10 rounded-3xl"></div>
                <div className="relative">
                  {/* Monitor */}
                  <div className="bg-gray-900 rounded-xl p-4 mb-6 relative">
                    <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-16 h-2 bg-gray-700 rounded-full"></div>
                    <div className="bg-gray-800 rounded-lg p-4 min-h-40">
                      <div className="flex flex-col gap-2">
                        <div className="h-3 bg-blue-500 rounded animate-pulse"></div>
                        <div className="h-3 bg-cyan-500 rounded w-3/4 animate-pulse animation-delay-500"></div>
                        <div className="h-3 bg-green-500 rounded animate-pulse animation-delay-1000"></div>
                        <div className="h-3 bg-blue-500 rounded w-1/2 animate-pulse animation-delay-1500"></div>
                        <div className="h-3 bg-cyan-500 rounded w-3/4 animate-pulse animation-delay-2000"></div>
                      </div>
                    </div>
                  </div>

                  {/* Workspace Items */}
                  <div className="flex justify-around">
                    <div className="text-2xl text-blue-500 p-3 bg-white rounded-full border border-gray-200 hover:transform hover:-translate-y-2 transition-all duration-300">
                      <i className="fas fa-coffee"></i>
                    </div>
                    <div className="text-2xl text-green-500 p-3 bg-white rounded-full border border-gray-200 hover:transform hover:-translate-y-2 transition-all duration-300">
                      <i className="fas fa-seedling"></i>
                    </div>
                    <div className="text-2xl text-purple-500 p-3 bg-white rounded-full border border-gray-200 hover:transform hover:-translate-y-2 transition-all duration-300">
                      <i className="fas fa-book-open"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce" data-aos="fade-up" data-aos-delay="1000">
          <button
            onClick={() => scrollToSection('about')}
            className="text-gray-400 hover:text-blue-500 transition-colors"
          >
            <i className="fas fa-chevron-down text-xl"></i>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;