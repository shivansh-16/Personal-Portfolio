const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: 'fas fa-palette',
      skills: [
        { name: 'HTML5', icon: 'fab fa-html5' },
        { name: 'CSS3', icon: 'fab fa-css3-alt' },
        { name: 'Tailwind CSS', icon: 'fab fa-css3-alt' },
        { name: 'JavaScript', icon: 'fab fa-js-square' },
        { name: 'React', icon: 'fab fa-react' },
        { name: 'Bootstrap', icon: 'fab fa-bootstrap' }
      ]
    },
    {
      title: 'Backend Development',
      icon: 'fas fa-server',
      skills: [
        { name: 'Node.js', icon: 'fab fa-node-js' },
        { name: 'Express.js', icon: 'fas fa-server' },
        { name: 'Python', icon: 'fab fa-python' },
        { name: 'MongoDB', icon: 'fas fa-database' },
        { name: 'Next.js', icon: 'fas fa-database' },
        { name: 'Firebase', icon: 'fas fa-fire' }
      ]
    },
    {
      title: 'Tools & Platforms',
      icon: 'fas fa-tools',
      skills: [
        { name: 'Git', icon: 'fab fa-git-alt' },
        { name: 'GitHub', icon: 'fab fa-github' },
        { name: 'Figma', icon: 'fab fa-figma' },
        { name: 'VS Code', icon: 'fas fa-code' },
        { name: 'Responsive', icon: 'fas fa-mobile-alt' },
        { name: 'Performance', icon: 'fas fa-rocket' }
      ]
    }
  ];

  return (
    <section id="skills" className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-6 bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent" data-aos="fade-up">
          Skills & Technologies
        </h2>
        <p className="text-center text-gray-600 mb-16 text-lg" data-aos="fade-up" data-aos-delay="100">
          The technologies and tools I use to bring ideas to life
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="bg-white/80 backdrop-blur-md rounded-2xl p-8 shadow-xl border border-white/20 hover:shadow-2xl hover:transform hover:-translate-y-2 transition-all duration-300"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay={200 + categoryIndex * 100}
            >
              {/* Category Header */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center text-white text-xl">
                  <i className={category.icon}></i>
                </div>
                <h3 className="text-xl font-semibold text-gray-900">{category.title}</h3>
              </div>

              {/* Skills Grid */}
              <div className="grid grid-cols-2 gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="flex flex-col items-center p-4 bg-white/50 rounded-xl border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-all duration-300 group"
                  >
                    <i className={`${skill.icon} text-2xl text-blue-500 mb-2 group-hover:scale-110 transition-transform duration-300`}></i>
                    <span className="text-sm font-medium text-gray-700 text-center">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;