const ProjectsLayout = ({ children }) => {
  return (
    <div id="projects">
      <main
        className="pt-10 h-full flex flex-col bg-[#f7f3f5]  bg-repeat"
        style={{
          backgroundImage: `url('https://i.ibb.co.com/hFJ51Pf/pattern.png')`,
        }}
      >
        {children}
      </main>
    </div>
  );
};

export default ProjectsLayout;
