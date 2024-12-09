import CardProject from "../organisms/CardProject";
import ProjectsLayout from "../templates/ProjectsLayout";
import { Link } from "react-router-dom";
const ProjectPages = () => {
  return (
    <ProjectsLayout>
      <div className="container flex flex-col mx-auto lg:px-10">
        <div className="left px-4">
          <h2 className="text-xl font-semibold mb-3">- Projects</h2>
          <div className="flex flex-row justify-center items-center lg:justify-between  space-x-2">
            {" "}
            <h1 className="text-4xl lg:text-5xl font-semibold">
              My <span className="text-[#50b4df]">Latest Projects</span>
            </h1>
            <Link
              to="/all-projects"
              className="w-2/4 lg:w-1/4 md:w-3/12 h-14 rounded-3xl text-white bg-blue-400 font-medium text-sm lg:text-xl text-center flex items-center justify-center"
            >
              View All Projects
            </Link>
          </div>
        </div>
        <CardProject />
      </div>
    </ProjectsLayout>
  );
};

export default ProjectPages;
