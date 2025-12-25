import projects from '../data/projects.js';

const Projects = () => {
  const featuredProjects = projects.slice(0, 3);

  return (
    <section id="projects" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-6 bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent" data-aos="fade-up">
          My Projects
        </h2>
        <p className="text-center text-gray-600 mb-16 text-lg max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="100">
          Here are some of my key projects that showcase my skills and passion for web development
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project, index) => (
            <div
              key={project.id}
              className="bg-white/80 backdrop-blur-md rounded-2xl overflow-hidden shadow-xl border border-white/20 hover:shadow-2xl hover:transform hover:-translate-y-2 transition-all duration-300"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay={200 + index * 100}
            >
              {/* Project Image */}
              <div className="relative h-48 bg-gradient-to-r from-blue-500 to-cyan-500 overflow-hidden group">
                <div className="absolute inset-0 flex items-center justify-center text-6xl text-white">
                  <i className={project.icon}></i>
                </div>
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-white text-center">
                    <i className="fas fa-eye text-2xl mb-2"></i>
                    <span className="text-sm font-medium">View Project</span>
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed text-sm">{project.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-xs font-medium border border-gray-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-gradient-to-r from-blue-500 to-cyan-500 text-white py-2 px-4 rounded-lg text-center hover:shadow-lg transition-all duration-300 text-sm font-medium"
                  >
                    <i className="fas fa-external-link-alt mr-2"></i>
                    Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 border border-gray-300 text-gray-600 py-2 px-4 rounded-lg text-center hover:bg-gray-50 transition-all duration-300 text-sm font-medium"
                  >
                    <i className="fab fa-github mr-2"></i>
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects Button */}
        <div className="text-center mt-12">
          <a href="/all-projects" className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 inline-block">
            <i className="fas fa-folder-open mr-2"></i>
            View All Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;