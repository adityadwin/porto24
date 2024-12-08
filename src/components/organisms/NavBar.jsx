import { useState } from "react";
import Logo from "../atoms/Logo";
import NavLink from "../atoms/NavLink";
import Button from "../atoms/Button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav className="pt-3 pb-3 lg:px-14 px-4 bg-[#071116] fixed w-screen z-50">
      <div className="flex items-center justify-between mx-auto">
        {/* Logo */}
        <Logo />

        {/* Navigation Links */}
        <div className="hidden md:flex lg:flex space-x-4">
          {/* Tampil di tablet (md) dan desktop (lg) */}
          <NavLink onClick={() => scrollToSection("home")}>Home</NavLink>
          <NavLink onClick={() => scrollToSection("about")}>About</NavLink>
          <NavLink onClick={() => scrollToSection("service")}>Services</NavLink>
          <NavLink onClick={() => scrollToSection("projects")}>
            Projects
          </NavLink>
        </div>

        {/* CTA Button */}
        <div className="hidden md:block lg:block">
          {/* Tampil di tablet dan desktop */}
          <Button
            onClick={() => scrollToSection("contact")}
            className="w-full mt-2 font-semibold rounded-3xl"
          >
            Hire Me
          </Button>
        </div>

        {/* Hamburger Menu (hanya di mobile <768px) */}
        <button
          onClick={toggleMenu}
          className="block md:hidden text-[#f7f3f5] focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={
                isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
              }
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu (visible when menu is open, only on mobile) */}
      {isMenuOpen && (
        <div className="mt-4 space-y-4 md:hidden">
          {/* Hidden di tablet */}
          <NavLink onClick={() => scrollToSection("home")} className="block">
            Home
          </NavLink>
          <NavLink onClick={() => scrollToSection("about")} className="block">
            About
          </NavLink>
          <NavLink onClick={() => scrollToSection("service")} className="block">
            Services
          </NavLink>
          <NavLink
            onClick={() => scrollToSection("projects")}
            className="block"
          >
            Projects
          </NavLink>
          <Button
            onClick={() => scrollToSection("contact")}
            className="w-full mt-2 font-semibold"
          >
            Hire Me
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
