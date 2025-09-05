export default function App() {
  return (
    <div className="font-sans text-gray-200 bg-gradient-to-r from-gray-900 via-black to-gray-900 scroll-smooth">
      {/* Navbar */}
      <header className="bg-black/50 backdrop-blur-md border-b border-gray-700 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
          <h1 className="text-2xl font-extrabold tracking-wide text-cyan-400 drop-shadow-md hover:scale-110 transition duration-300 cursor-pointer">
            ✦ Irgi Portfolio
          </h1>
          <nav className="space-x-6 text-sm">
            {["About", "Skills", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-300 hover:text-cyan-400 hover:drop-shadow-[0_0_6px_cyan] transition"
              >
                {item}
              </a>
            ))}
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden text-center px-6">
        {/* Background Glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-purple-600/20 blur-3xl animate-pulse"></div>

        <img
          src="Irgi.jpg"
          alt="Profile"
          className="w-40 h-40 rounded-full border-4 border-cyan-400 shadow-[0_0_30px_cyan] mb-6 hover:scale-110 transition duration-500"
        />
        <h2 className="text-5xl font-extrabold mb-2 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent animate-pulse">
          Irgiyansyah Ahmad Fahrezy
        </h2>
        <p className="text-lg mb-6 opacity-80 hover:opacity-100 transition">
          Informatics Engineering Student | Tech Enthusiast 🚀
        </p>
        <a
          href="#contact"
          className="px-8 py-3 bg-cyan-500/20 border border-cyan-400 text-cyan-300 font-semibold rounded-full shadow hover:shadow-[0_0_20px_cyan] hover:scale-110 transition"
        >
          Contact Me
        </a>
      </section>

      {/* About Section */}
      <section id="about" className="max-w-6xl mx-auto py-20 px-6">
        <h3 className="text-3xl font-bold mb-8 text-center text-purple-400 drop-shadow-lg">
          About Me
        </h3>
        <p className="text-gray-300 text-center max-w-3xl mx-auto leading-relaxed">
          Hi, I’m <span className="font-semibold text-cyan-400">Irgiyansyah</span>, a student of Informatics Engineering at Hasanuddin University.  
          I have experience in programming, UI/UX design, and building innovative digital products.  
          I love solving problems with technology and collaborating with great people 💡.
        </p>
      </section>

      {/* Skills Section */}
      <section id="skills" className="bg-black/40 backdrop-blur-lg py-20 px-6 border-t border-b border-gray-800">
        <h3 className="text-3xl font-bold mb-12 text-center text-cyan-400 drop-shadow-lg">
          Skills
        </h3>
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {["💻 Mobile", "⚛️ Creative", "🎨 UI/UX", "🗄️ MySQL"].map((skill, i) => (
            <div
              key={i}
              className="p-6 bg-gradient-to-br from-gray-900 to-gray-800 border border-cyan-500/40 rounded-xl shadow-[0_0_15px_rgba(0,255,255,0.2)] hover:shadow-[0_0_25px_cyan] transform hover:scale-105 transition duration-500"
            >
              <span className="block text-4xl mb-2">{skill.split(" ")[0]}</span>
              <h4 className="font-semibold text-gray-200">{skill.split(" ")[1]}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="max-w-6xl mx-auto py-20 px-6">
        <h3 className="text-3xl font-bold mb-8 text-center text-purple-400 drop-shadow-lg">
          Contact Me
        </h3>
        <div className="max-w-md mx-auto bg-black/40 backdrop-blur-md border border-gray-700 p-6 rounded-xl shadow-lg hover:shadow-[0_0_25px_purple] transition">
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 bg-transparent border border-cyan-400 rounded-lg text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 bg-transparent border border-cyan-400 rounded-lg text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            />
            <textarea
              placeholder="Your Message"
              rows="4"
              className="w-full p-3 bg-transparent border border-cyan-400 rounded-lg text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            ></textarea>
            <button
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg shadow hover:shadow-[0_0_25px_cyan] transition transform hover:scale-105"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/50 backdrop-blur-md border-t border-gray-700 py-6 text-center text-sm text-gray-400">
        © 2025 Irgiyansyah AF. Jangan Diganggu.
      </footer>
    </div>
  );
}
