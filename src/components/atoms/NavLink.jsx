const NavLink = ({ href, children, className = "" }) => {
  return (
    <a
      href={href}
      className={`text-[#f7f3f5] hover:text-blue-500 ${className}`}
    >
      {children}
    </a>
  );
};

export default NavLink;
