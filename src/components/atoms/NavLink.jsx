const NavLink = ({ onClick, children, className = "" }) => {
  return (
    <button
      onClick={onClick}
      className={`text-[#f7f3f5] hover:text-blue-500 ${className} focus:outline-none`}
    >
      {children}
    </button>
  );
};

export default NavLink;
