import CardProject from "../organisms/CardProject";
import ProjectsLayout from "../templates/ProjectsLayout";

const ProjectPages = () => {
  return (
    <ProjectsLayout>
      <div className="container flex flex-col">
        <div className="left px-4 ">
          <h2 className="text-xl font-semibold mb-3">- Projects</h2>
          <div className="flex flex-row justify-center items-center space-x-2">
            {" "}
            <h1 className="text-4xl font-semibold ">
              My <span className="text-[#50b4df]">Latest Projects</span>
            </h1>
            <button className="w-3/5 h-12 rounded-3xl text-white bg-blue-400 font-medium text-sm">
              View All Projects
            </button>
          </div>
        </div>
        <CardProject />
      </div>
    </ProjectsLayout>
  );
};

export default ProjectPages;
