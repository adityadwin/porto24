import Navbar from "../organisms/NavBar";

const NavLayout = ({ children }) => {
  return (
    <div id="home">
      <Navbar />
      <main
        className="pt-10 h-full lg:min-h-screen flex flex-col bg-[#071116] bg-repeat justify-center items-center"
        style={{
          backgroundImage: `url('https://i.ibb.co.com/hFJ51Pf/pattern.png')`,
        }}
      >
        {children}
      </main>
    </div>
  );
};

export default NavLayout;
