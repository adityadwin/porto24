const Button = ({ children, onClick, className = "" }) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 text-[#071116] bg-[#e8e3de] rounded hover:bg-slate-300 ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
