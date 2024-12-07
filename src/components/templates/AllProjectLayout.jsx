const AllProjectLayout = ({ children }) => {
  return (
    <div id="projects">
      <main
        className="pt-10 min-h-screen flex flex-col bg-[#201e1f]  bg-repeat"
        style={{
          backgroundImage: `url('https://i.ibb.co.com/hFJ51Pf/pattern.png')`,
        }}
      >
        {children}
      </main>
    </div>
  );
};

export default AllProjectLayout;
