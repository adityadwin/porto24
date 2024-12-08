import { useEffect } from "react";
import CardProject from "../organisms/AllCardProject";
import AllProjectLayout from "../templates/AllProjectLayout";
import { Link } from "react-router-dom";

const AllProjects = () => {
  useEffect(() => {
    // Scroll ke atas saat halaman dirender
    window.scrollTo(0, 0);
  }, []);

  return (
    <AllProjectLayout>
      <div className="container flex flex-col">
        <div className="left px-4 lg:px-20">
          <Link to="/">
            <h2 className="text-2xl font-semibold mb-3 text-white">- Back</h2>
          </Link>
          <div className="flex flex-row justify-center items-center space-x-2">
            <h1 className="text-4xl font-semibold text-white">
              All <span className="text-[#50b4df]">Projects</span>
            </h1>
          </div>
        </div>
        <CardProject />
      </div>
    </AllProjectLayout>
  );
};

export default AllProjects;
