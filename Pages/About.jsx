import React from 'react'

const About = () => {
  return (
    <>

    <section className="relative overflow-hidden">
  {/* Animated Background Elements */}
  <div className="absolute inset-0 overflow-hidden -z-10">
    <div className="absolute top-20 left-20 w-40 h-40 rounded-full bg-primary/10 blur-xl animate-float" />
    <div className="absolute bottom-20 right-20 w-40 h-40 rounded-full bg-secondary/10 blur-xl animate-float" />
    <div className="absolute top-1/3 right-1/4 w-24 h-24 rounded-full bg-accent/10 blur-lg animate-float" />
  </div>
  {/* Main Content */}
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      {/* Left Content */}
      <div className="text-center lg:text-left">
        <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider text-primary uppercase rounded-full bg-primary/10 mb-4">
          Full Stack Developer
        </span>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-4">
          Hi, I'm <span className="text-gradient">Kuldeep Prajapati</span>
        </h1>
        <p className="text-xl text-gray-400 mb-8 max-w-lg">
          I build <span className="font-semibold text-primary">scalable web apps</span> with modern technologies like <span className="font-semibold text-secondary">React, Node.js &amp; MongoDB</span>.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
          <a href="#" className="px-8 py-3.5 rounded-lg bg-gradient-to-r from-primary to-secondary text-white font-semibold shadow-glow hover:shadow-glow-hover transition-all duration-300">
            View My Work
          </a>
          <a href="#" className="px-8 py-3.5 rounded-lg border-2 border-primary/30 text-gray-300 font-semibold hover:bg-primary/5 hover:border-primary/50 transition-all duration-300">
            Contact Me
          </a>
        </div>
        {/* Tech Stack Badges */}
        <div className="mt-12 flex flex-wrap justify-center lg:justify-start gap-3">
          <span className="px-3 py-1 text-sm rounded-full bg-dark border border-gray-800">React.js</span>
          <span className="px-3 py-1 text-sm rounded-full bg-dark border border-gray-800">Node.js</span>
          <span className="px-3 py-1 text-sm rounded-full bg-dark border border-gray-800">MongoDB</span>
          <span className="px-3 py-1 text-sm rounded-full bg-dark border border-gray-800">Tailwind CSS</span>
          <span className="px-3 py-1 text-sm rounded-full bg-dark border border-gray-800">Python</span>
        </div>
      </div>
      {/* Right Content - Profile Image */}
      <div className="relative flex justify-center lg:justify-end">
        <div className="relative group">
          {/* Gradient Border Effect */}
          <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-2xl blur-md opacity-75 group-hover:opacity-100 transition-all duration-300" />
          {/* Profile Image */}
          <div className="relative h-64 w-64 sm:h-80 sm:w-80 rounded-2xl overflow-hidden border-2 border-gray-800 bg-gradient-to-br from-gray-900 to-gray-800">
            <img src="https://avatars.githubusercontent.com/u/124576166?v=4" alt="Kuldeep Prajapati" className="w-full h-full object-cover" />
            {/* Glow Effect on Hover */}
            <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-all duration-300" />
          </div>
          {/* Floating Badge */}
          <div className="absolute -bottom-5 -right-5 bg-dark border border-gray-800 px-4 py-2 rounded-lg shadow-lg">
            <span className="text-sm font-medium">🚀 Open for Work</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


    
    </>
  )
}

export default About