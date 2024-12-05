import Navbar from "../organisms/NavBar";

const NavLayout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <main
        className="pt-10 min-h-screen flex flex-col bg-[#071116] bg-repeat justify-center items-center"
        style={{
          backgroundImage: `url('/src/assets/pattern.svg')`,
        }}
      >
        {children}
      </main>
    </div>
  );
};

export default NavLayout;
