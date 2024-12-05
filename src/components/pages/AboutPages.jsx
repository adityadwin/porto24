import AboutLayout from "../templates/AboutLayout";

const AboutPages = () => {
  return (
    <AboutLayout>
      <div className="container flex flex-col ">
        <div className="right bg-[#28292c] h-[330px] flex items-top justify-start mx-4 mb-8 rounded-xl">
          {/* Teks Nama yang Ditaruh Vertikal tanpa spasi ke bawah */}
          <h1 className="transform -rotate-90 text-[33px] font-semibold -ms-5 text-[#f7f3f5] whitespace-nowrap">
            ADITYA DWI NANDRA
          </h1>

          {/* Teks 2 dan Years of Experience */}
          <div className=" flex flex-row items-center justify-center text-center">
            <h2 className="text-[15rem] font-bold text-[#f7f3f5] -ms-64">2</h2>
            <p className="text-2xl text-[#f7f3f5]">Years of Experience</p>
          </div>
        </div>

        <div className="left px-4">
          <h2 className="text-xl font-medium">- About Me</h2>
          <h1 className="text-5xl font-semibold">
            Who is <span className="text-[#50b4df]">Aditya Dwi Nandra?</span>
          </h1>
          <p className="mt-3 mb-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
            natus quos commodi voluptate quia soluta sequi accusantium illum id
            temporibus?
          </p>
          <div className="count flex flex-row space-x-8">
            <h1 className="text-3xl font-semibold">
              50+
              <br />
              <span className="text-base font-normal">Clients Happy</span>
            </h1>
            <h1 className="text-3xl font-semibold">
              100+
              <br />
              <span className="text-base font-normal">Projects Completed</span>
            </h1>
          </div>
          <button className="px-4 py-2 text-[#f7f3f5] bg-[#50b4df] rounded-2xl hover:bg-[#529cbb] mb-4 mt-4">
            Downlaod CV
          </button>
        </div>
      </div>
    </AboutLayout>
  );
};

export default AboutPages;
