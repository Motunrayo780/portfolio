import React from "react";

const Main = () => {
  return (
    <main className="bg-gray-100 text-gray-800">
      {/* Hero Section */}
      <section className="bg-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <h1 className="text-4xl md:text-6xl font-bold">
            Hi, I'm <span className="text-teal-400">Bakare Motunrayo B</span>
          </h1>
          <p className="mt-4 text-lg md:text-xl">
            I'm a passionate <span className="font-semibold">Web Developer</span> specializing in building beautiful and functional websites.
          </p>
          <div className="mt-8">
            <a
              href="#contact"
              className="px-6 py-3 bg-teal-500 text-white rounded-lg shadow-lg hover:bg-teal-600 transition"
            >
              Contact Me
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-10">About Me</h2>
          <p className="text-lg text-gray-600 text-center">
            I'm a web developer with expertise in front-end and back-end development. I love crafting modern, responsive, and user-friendly websites that bring ideas to life. My goal is to solve problems through clean and efficient code.
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="bg-gray-200 py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-10">Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            <div className="bg-white shadow-md rounded-lg p-6 text-center">
              <h3 className="text-xl font-bold">HTML</h3>
            </div>
            <div className="bg-white shadow-md rounded-lg p-6 text-center">
              <h3 className="text-xl font-bold">CSS</h3>
            </div>
            <div className="bg-white shadow-md rounded-lg p-6 text-center">
              <h3 className="text-xl font-bold">JavaScript</h3>
            </div>
            <div className="bg-white shadow-md rounded-lg p-6 text-center">
              <h3 className="text-xl font-bold">React</h3>
            </div>
            <div className="bg-white shadow-md rounded-lg p-6 text-center">
              <h3 className="text-xl font-bold">Node.js</h3>
            </div>
            <div className="bg-white shadow-md rounded-lg p-6 text-center">
              <h3 className="text-xl font-bold">Tailwind CSS</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-10">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <img
                src="https://via.placeholder.com/400x200"
                alt="Project 1"
                className="w-full"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Project Title 1</h3>
                <p className="text-gray-600">
                  A brief description of the project goes here. It can include
                  the technologies used and the purpose of the project.
                </p>
              </div>
            </div>
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <img
                src="https://via.placeholder.com/400x200"
                alt="Project 2"
                className="w-full"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Project Title 2</h3>
                <p className="text-gray-600">
                  A brief description of the project goes here. It can include
                  the technologies used and the purpose of the project.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-gray-800 text-white py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-10">Contact Me</h2>
          <form className="space-y-6 max-w-lg mx-auto">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-300"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                className="mt-1 block w-full rounded-md bg-gray-700 text-white border-gray-600 focus:ring-teal-500 focus:border-teal-500"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-300"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="mt-1 block w-full rounded-md bg-gray-700 text-white border-gray-600 focus:ring-teal-500 focus:border-teal-500"
                placeholder="Your Email"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-300"
              >
                Message
              </label>
              <textarea
                id="message"
                rows="4"
                className="mt-1 block w-full rounded-md bg-gray-700 text-white border-gray-600 focus:ring-teal-500 focus:border-teal-500"
                placeholder="Your Message"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full px-6 py-3 bg-teal-500 text-white rounded-lg shadow-lg hover:bg-teal-600 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </main>
  );
};

export default Main;
