const About = () => {
  return (
    <section id="about" className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent" data-aos="fade-up">
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Profile Card */}
          <div data-aos="fade-right" data-aos-duration="1000">
            <div className="bg-white/80 backdrop-blur-md rounded-3xl p-8 shadow-xl border border-white/20 text-center relative">
              <div className="relative mb-6">
                <div className="w-32 h-32 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mx-auto flex items-center justify-center text-6xl text-white border-4 border-white shadow-lg">
                  <i className="fas fa-user-tie"></i>
                </div>
                <div className="absolute bottom-0 right-1/2 transform translate-x-16 w-12 h-12 bg-cyan-500 rounded-full flex items-center justify-center text-white border-3 border-white shadow-md">
                  <i className="fas fa-code"></i>
                </div>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">Shivansh Pawar</h4>
              <p className="text-blue-500 font-medium mb-6">Full-stack Web Developer</p>
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-white/50 rounded-lg p-3">
                  <div className="text-xl font-bold bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">10+</div>
                  <div className="text-sm text-gray-600">Projects</div>
                </div>
                <div className="bg-white/50 rounded-lg p-3">
                  <div className="text-xl font-bold bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">1+</div>
                  <div className="text-sm text-gray-600">Years</div>
                </div>
                <div className="bg-white/50 rounded-lg p-3">
                  <div className="text-xl font-bold bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">100%</div>
                  <div className="text-sm text-gray-600">Passion</div>
                </div>
              </div>
            </div>
          </div>

          {/* About Text */}
          <div data-aos="fade-left" data-aos-duration="1000" data-aos-delay="200">
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-blue-500 mb-3">Who I Am</h3>
                <p className="text-gray-600 leading-relaxed">
                  I’m Shivansh Pawar, a passionate full-stack web developer who loves transforming ideas into impactful digital experiences. Based in Bhopal, MP, India. As a young developer constantly exploring the latest in web technology, I focus on clean structure, modern aesthetics, and practical innovation that solves real-world problems.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-blue-500 mb-3">Passion & Technologies</h3>
                <p className="text-gray-600 leading-relaxed">
                  I’m deeply inspired by how the web connects people, ideas, and opportunities.
                  
                  Technologies I’ve worked with include HTML, CSS, JavaScript, React, Next.js, Tailwind CSS, Node.js, Express.js, Firebase, Supabase, MongoDB, and Git/GitHub.

                  I also prototype interfaces in Figma, ensuring every project is visually appealing and user-friendly. My goal is to build seamless, fast, and meaningful digital solutions — blending technology with creativity to shape a smarter web.
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                  className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300"
                >
                  <i className="fas fa-code mr-2"></i>
                  See My Work
                </button>

                <a
                  href="/Resume.pdf"
                  target="_blank"
                  className="bg-cyan-500 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 flex items-center gap-2"
                >
                  Download my CV
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="none">
                    <path d="M14.9805 7.01556C14.9805 7.01556 15.4805 7.51556 15.9805 8.51556C15.9805 8.51556 17.5687 6.01556 18.9805 5.51556" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                    <path d="M9.99491 2.02134C7.49644 1.91556 5.56618 2.20338 5.56618 2.20338C4.34733 2.29053 2.01152 2.97385 2.01154 6.96454C2.01156 10.9213 1.9857 15.7993 2.01154 17.7439C2.01154 18.932 2.74716 21.7033 5.29332 21.8518C8.38816 22.0324 13.9628 22.0708 16.5205 21.8518C17.2052 21.8132 19.4847 21.2757 19.7732 18.7956C20.0721 16.2263 20.0126 14.4407 20.0126 14.0157" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                    <path d="M21.9999 7.01556C21.9999 9.77698 19.7592 12.0156 16.9951 12.0156C14.231 12.0156 11.9903 9.77698 11.9903 7.01556C11.9903 4.25414 14.231 2.01556 16.9951 2.01556C19.7592 2.01556 21.9999 4.25414 21.9999 7.01556Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"></path>
                    <path d="M6.98053 13.0156H10.9805" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"></path>
                    <path d="M6.98053 17.0156H14.9805" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;