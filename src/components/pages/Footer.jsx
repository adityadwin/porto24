import FooterLayout from "../templates/FooterLayout";

const Footer = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <FooterLayout>
      <div className="container mx-auto lg:justify-between lg:px-14 md:px-4 lg:items-center lg:flex px-5 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Sesi 1: Title, Deskripsi, dan Icon */}
        <div className="flex flex-col space-y-4">
          <h2 className="text-xl font-semibold">PORTOFOLIO</h2>
          <p className="text-sm text-gray-400">
            Passionate about web development and creating optimal user
            experiences. Connect with me on
          </p>
          <div className="flex space-x-4 text-xl">
            {/* LinkedIn */}
            {/* LinkedIn */}
            <button
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/adityadwinandra/",
                  "_blank"
                )
              }
              className="hover:text-blue-400"
            >
              <img
                src="../../../images/icons/linkedin.png"
                alt="LinkedIn"
                className="w-6 h-6"
              />
            </button>

            {/* GitHub */}
            <button
              onClick={() => window.open("https://github.com/adityadwin")}
              className="hover:text-gray-400"
            >
              <img
                src="../../../images/icons/github.png"
                alt="GitHub"
                className="w-6 h-6"
              />
            </button>
          </div>
        </div>

        {/* Sesi 2: Navigation */}
        <div className="flex flex-col space-y-4">
          <h2 className="text-xl font-semibold">Navigation</h2>
          <ul className="space-y-2 text-sm">
            <li>
              <button
                onClick={() => scrollToSection("home")}
                className="hover:text-blue-400"
              >
                Home
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("service")}
                className="hover:text-blue-400"
              >
                Services
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("about")}
                className="hover:text-blue-400"
              >
                About
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("projects")}
                className="hover:text-blue-400"
              >
                Projects
              </button>
            </li>
          </ul>
        </div>

        {/* Sesi 3: Contact */}
        <div className="flex flex-col space-y-10">
          <h2 className="text-xl font-semibold">Contact</h2>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>📞 +62 881-8665-402</li>
            <li>📧 adityadwinandra1@gmail.com</li>
            <li>🏠 Grobogan, Jawa Tengah, Indonesia</li>
          </ul>
        </div>
      </div>

      {/* Footer Copyright */}
      <div className="text-center text-white text-sm mt-8">
        © 2024 Aditya Dwi Nandra. All rights reserved.
      </div>
    </FooterLayout>
  );
};

export default Footer;
