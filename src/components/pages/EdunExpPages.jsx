import EdunExpLayout from "../templates/EdunExpLayout";
import "../../App.css";
import CardEnE from "../organisms/CardEnE";
const EdunExpPages = () => {
  return (
    <EdunExpLayout>
      <div className="text-[#28292c] font-semibold text-xl px-4">
        - Education & Work
      </div>
      <div className="px-4 text-4xl text-[#28292c] font-semibold mb-6 text-center">
        <h1>
          My <span className="text-[#50b4df]">Education</span> &{" "}
          <span className="text-[#50b4df]">Work Experience</span>
        </h1>
      </div>
      <CardEnE />
    </EdunExpLayout>
  );
};

export default EdunExpPages;
