import AboutLayout from "../templates/AboutLayout";
import "../../App.css";

const AboutPages = () => {
  // Fungsi untuk memulai unduhan otomatis
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href =
      "https://drive.google.com/uc?id=1eDGQQK9Z_temo5xFBlqDXH7HcZ0eba6f&export=download";
    link.download = "cv-aditya-dwi-nandra.pdf"; // Nama file untuk diunduh
    link.click();
  };

  return (
    <AboutLayout>
      <div className="container flex flex-col lg:flex-row lg:px-44 ">
        <div
          id="right"
          className="right bg-[#28292c] h-[330px] lg:h-[500px] lg:w-1/2  flex flex-row items-top justify-start mx-4 mb-8 rounded-xl"
        >
          {/* Teks Nama yang Ditaruh Vertikal tanpa spasi ke bawah */}
          <h1 className="transform -rotate-90 lg:text-5xl text-[33px] font-semibold lg:-ms-1 -ms-3 text-[#f7f3f5] whitespace-nowrap">
            ADITYA DWI NANDRA
          </h1>

          {/* Teks 2 dan Years of Experience */}
          <div className="flex flex-row items-center justify-center text-center">
            <h2 className="text-[10rem] lg:text-[20rem] font-bold text-[#f7f3f5] lg:-ms-[440px] -ms-64">
              2
            </h2>
            <p className="text-xl lg:text-4xl text-[#f7f3f5]">
              Years of Experience
            </p>
          </div>
        </div>

        <div className="left px-4 lg:w-1/2">
          <h2 className="text-xl font-medium">- About Me</h2>
          <h1 className="text-5xl lg:text-6xl font-semibold">
            Who is <span className="text-[#50b4df]">Aditya Dwi Nandra?</span>
          </h1>
          <p className="mt-3 mb-3 lg:text-lg text-justify">
            I am a Frontend Developer with a degree in Informatics Engineering.
            Skilled in HTML, CSS, JavaScript, ReactJS, and graphic design. I am
            passionate about building interactive, responsive websites and
            enhancing user experiences through effective problem-solving and
            collaboration. Additionally, I have successfully delivered graphic
            design services to over 50 clients, showcasing a proven ability to
            understand client needs and translate them into compelling visuals
            that drive impact.
          </p>
          <div className="count flex flex-row space-x-8">
            <h1 className="text-3xl font-semibold">
              50+
              <br />
              <span className="text-base font-normal">Clients</span>
            </h1>
            <h1 className="text-3xl font-semibold">
              100+
              <br />
              <span className="text-base font-normal">Projects Completed</span>
            </h1>
          </div>
          {/* Tombol Unduhan CV */}
          <button
            onClick={handleDownload}
            className="px-4 py-2 text-[#f7f3f5] bg-[#50b4df] rounded-2xl hover:bg-[#529cbb] mb-4 mt-4"
          >
            Download CV
          </button>
        </div>
      </div>
    </AboutLayout>
  );
};

export default AboutPages;
