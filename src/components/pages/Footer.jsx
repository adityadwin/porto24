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
      <div className="container mx-auto lg:justify-between lg:px-14 lg:items-center lg:flex px-5 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Sesi 1: Title, Deskripsi, dan Icon */}
        <div className="flex flex-col space-y-4">
          <h2 className="text-xl font-semibold">PORTOFOLIO</h2>
          <p className="text-sm text-gray-400">
            Passionate about web development and creating optimal user
            experiences. Connect with me on
          </p>
          <div className="flex space-x-4 text-xl">
            {/* LinkedIn */}
            <button
              onClick={() => window.open("https://linkedin.com", "_blank")}
              className="hover:text-blue-400"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="w-6 h-6 fill-current"
              >
                <path d="M100.28 448H7.4V148.9h92.88zm-46.44-324a53.6 53.6 0 1 1 53.6 53.6A53.59 53.59 0 0 1 53.84 124zm394 324h-92.68V302.4c0-34.7-12.42-58.4-43.4-58.4-23.64 0-37.64 15.9-43.84 31.3-2.26 5.5-2.82 13.2-2.82 20.9v151h-92.7s1.26-245.1 0-270.5h92.7v38.3a92 92 0 0 1 83.82-46.1c61.3 0 107.3 39.8 107.3 125.4z" />
              </svg>
            </button>

            {/* GitHub */}
            <button
              onClick={() => window.open("https://github.com", "_blank")}
              className="hover:text-gray-400"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 496 512"
                className="w-6 h-6 fill-current"
              >
                <path d="M165.9 397.4c0 2-2.3 3.5-4.1 2.7C82.3 364.5 35 299.3 35 224 35 132.3 114.6 52 206.8 52c92.2 0 171.8 80.3 171.8 172 0 75.3-47.3 140.5-126.8 175.6-1.8.8-4.1-.7-4.1-2.7v-41.3c0-15.1 5.5-29.3 16.1-41 11.4-13.7 27.2-24.1 46.7-30.9-35.3-4.3-66.8-13.1-93.4-26.6-26.6-13.4-47.3-29.3-62.8-47.6-15.6-18.3-23.3-39.3-23.3-62.9 0-27.4 9.7-51.6 29-72.9 19.4-21.2 43.4-35.5 71.6-42.9 28.1-7.3 56.9-5.7 86.2 4.7 1.8.7 2.4 2.4 2.4 4.2v43.2c0 2.2-1.7 4-3.9 4.4-20.6 4.1-38.7 13.3-54.3 26.6-15.6 13.3-28 30.3-37.2 50.8-9.2 20.5-14.3 43.5-15.3 68.8v44c-.1 2-2.4 3.5-4.2 2.7z" />
              </svg>
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
