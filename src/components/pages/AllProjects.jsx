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
      <div className="container mx-auto flex flex-col">
        <div className="left px-4 lg:px-20 mt-16">
          {" "}
          {/* Added margin-top to push the content down */}
          <Link to="/">
            <h2 className="text-xl font-semibold mb-3 text-[#50b4df] bg-black w-auto rounded-full p-4 block fixed top-4 z-20">
              {" "}
              {/* Fixed position at the top-left */}
              Back
            </h2>
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
