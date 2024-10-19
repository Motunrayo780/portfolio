import React from 'react'

const Maincon = () => {
  return (
    <div>

      {/* Main Content */}
      <main className="mt-20 p-4">
        {/* Hero Section */}
        <section className="min-h-screen flex flex-col justify-center items-center bg-blue-800 text-white">
          <h1 className="text-5xl font-bold mb-4">Hi, I'm [Bakare Motunrayo B]</h1>
          <p className="text-xl mb-6">A passionate Frontend Developer</p>
          <a href="#projects" className="bg-fuchsia-600 text-white px-6 py-3 rounded-full hover:bg-fuchsia-700">
            See My Work
          </a>
        </section>

        {/* About Section */}
        <section id="about" className="min-h-screen bg-gray-100 text-center py-20">
          <h2 className="text-4xl font-bold text-blue-800 mb-6">About Me</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            I'm a frontend developer with experience in building beautiful and responsive websites. I have a passion for learning and improving my skills in JavaScript, React, and CSS frameworks like Tailwind CSS.
          </p>
        </section>

        {/* Skills Section */}
        <section id="skills" className="min-h-screen bg-white text-center py-20">
          <h2 className="text-4xl font-bold text-blue-800 mb-6">Skills</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <div className="p-4 bg-blue-100 rounded-lg shadow-md">HTML</div>
            <div className="p-4 bg-blue-100 rounded-lg shadow-md">CSS</div>
            <div className="p-4 bg-blue-100 rounded-lg shadow-md">JavaScript</div>
            <div className="p-4 bg-blue-100 rounded-lg shadow-md">React</div>
            <div className="p-4 bg-blue-100 rounded-lg shadow-md">Tailwind CSS</div>
            <div className="p-4 bg-blue-100 rounded-lg shadow-md">Git</div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="min-h-screen bg-gray-100 text-center py-20">
          <h2 className="text-4xl font-bold text-blue-800 mb-6">Projects</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {/* Project 1 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src="https://via.placeholder.com/400x200" alt="Project 1" className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-bold text-blue-800 mb-2">Project One</h3>
                <p className="text-gray-600">A brief description of this amazing project that showcases my skills.</p>
                <a href="#" className="block mt-4 text-fuchsia-600 hover:underline">View Project</a>
              </div>
            </div>
            {/* Project 2 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src="https://via.placeholder.com/400x200" alt="Project 2" className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-bold text-blue-800 mb-2">Project Two</h3>
                <p className="text-gray-600">Another cool project that I worked on recently. Check it out!</p>
                <a href="#" className="block mt-4 text-fuchsia-600 hover:underline">View Project</a>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="min-h-screen bg-white text-center py-20">
          <h2 className="text-4xl font-bold text-blue-800 mb-6">Contact</h2>
          <p className="text-lg text-gray-700 mb-6">Feel free to reach out via email or connect with me on social media!</p>
          <div className="space-x-4">
            <a href="mailto:youremail@example.com" className="text-fuchsia-600 hover:underline">bakaremotunrayo@gmail.com</a>
            <a href="https://www.linkedin.com" className="text-fuchsia-600 hover:underline">LinkedIn</a>
            <a href="https://www.github.com" className="text-fuchsia-600 hover:underline">Motunrayo780</a>
          </div>
        </section>
      </main>
    </div>
  )
}

export default Maincon