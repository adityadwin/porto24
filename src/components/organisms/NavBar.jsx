import { useState } from "react";
import Logo from "../atoms/Logo";
import NavLink from "../atoms/NavLink";
import Button from "../atoms/Button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="pt-3 pb-3 px-4 bg-[#071116] fixed w-full z-50">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Logo */}
        <Logo />

        {/* Navigation Links */}
        <div className="hidden md:flex lg:flex space-x-4">
          {/* Tampil di tablet (md) dan desktop (lg) */}
          <NavLink href="#home">Home</NavLink>
          <NavLink href="#about">About</NavLink>
          <NavLink href="#services">Services</NavLink>
          <NavLink href="#contact">Contact</NavLink>
        </div>

        {/* CTA Button */}
        <div className="hidden md:block lg:block">
          {/* Tampil di tablet dan desktop */}
          <Button>Contact Me</Button>
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
          <NavLink href="#home" className="block">
            Home
          </NavLink>
          <NavLink href="#about" className="block">
            About
          </NavLink>
          <NavLink href="#services" className="block">
            Services
          </NavLink>
          <NavLink href="#contact" className="block">
            Contact
          </NavLink>
          <Button className="w-full mt-2 font-semibold">Contact Me</Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
