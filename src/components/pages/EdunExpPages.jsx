import EdunExpLayout from "../templates/EdunExpLayout";
import "../../App.css";
import CardEnE from "../organisms/CardEnE";
const EdunExpPages = () => {
  return (
    <EdunExpLayout>
      <div className="bg-gradient-to-r from-[#50b4df] to-[#4c85f6]">
        <div className="text-[#fff] font-semibold text-xl px-4 mt-10 mb-4 md:px-10 lg:px-14">
          - Education & Work
        </div>
        <div className="px-4 text-4xl text-[#fff] font-semibold mb-6 text-center lg:text-left lg:px-14">
          <h1>
            My <span className="text-[#28292c]">Education</span> &{" "}
            <span className="text-[#28292c]">Work Experience</span>
          </h1>
        </div>
        <CardEnE />
      </div>
    </EdunExpLayout>
  );
};

export default EdunExpPages;
