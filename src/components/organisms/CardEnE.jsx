// Komponen Card
const Card = ({ icon, title, children }) => {
  return (
    <div className="card bg-white shadow-md w-[100%] h-[340px] mb-10 rounded-2xl flex flex-col justify-between items-center  transition-all duration-300 ease-in-out transform hover:scale-95">
      <div className="icon text-center text-6xl mb-2">{icon}</div>
      <div className="flex flex-col items-center justify-between h-full">
        <h3 className="text-2xl font-bold text-center mb-2">{title}</h3>
        <div className="flex-1">{children}</div>
      </div>
    </div>
  );
};

// Komponen CardEnE untuk Pendidikan dan Pengalaman
const CardEnE = () => {
  return (
    <div className="container flex flex-col justify-center items-center px-4  bg-gradient-to-r from-[#50b4df] to-[#4c85f6]">
      {/* Card Pendidikan */}
      <Card
        icon={
          <span role="img" aria-label="education">
            🎓
          </span>
        }
        title="Education"
      >
        {/* List Pendidikan */}
        <div className="space-y-4 p-2">
          <div className="flex justify-between items-center space-x-2">
            {/* Bagian Kiri: Pendidikan */}
            <div className="flex flex-col">
              <h4 className="font-semibold text-base">
                AKI University
                <br />
                <span className="text-xs font-normal">
                  Informatics Engineering | GPA 3.47/4.00
                </span>
              </h4>
            </div>
            {/* Bagian Kanan: Tahun */}
            <div className="text-xs text-[#28292c] -mt-6 bg-[#f5f5f6] rounded-xl p-2">
              <p>2020 - 2024</p>
            </div>
          </div>

          <div className="flex justify-between items-center">
            {/* Bagian Kiri: Pendidikan */}
            <div className="flex flex-col">
              <h4 className="font-semibold text-base">
                SMKS Garuda Nusantara
                <br />
                <span className="text-xs font-normal">
                  Computer & Network Engineering
                </span>
              </h4>
            </div>
            {/* Bagian Kanan: Tahun */}
            <div className="text-xs text-[#28292c] -mt-6 bg-[#f5f5f6] rounded-xl p-2">
              <p>2017 - 2020</p>
            </div>
          </div>

          <div className="flex justify-between items-center">
            {/* Bagian Kiri: Pendidikan */}
            <div className="flex flex-col">
              <h4 className="font-semibold text-base">
                SMPS Perguruan Rakyat 3
                <br />
              </h4>
            </div>
            {/* Bagian Kanan: Tahun */}
            <div className="text-xs text-[#28292c] -mt-2 bg-[#f5f5f6] rounded-xl p-2">
              <p>2015 - 2017</p>
            </div>
          </div>
        </div>
      </Card>

      {/* Card Pengalaman */}
      <Card
        icon={
          <span role="img" aria-label="experience">
            💼
          </span>
        }
        title="Experience"
      >
        {/* List Pengalaman */}
        <div className="space-y-4 p-2">
          <div className="flex justify-between items-center space-x-2">
            {/* Bagian Kiri: Pendidikan */}
            <div className="flex flex-col">
              <h4 className="font-semibold text-base">
                Freelance
                <br />
                <span className="text-xs font-normal">
                  Graphic Designer & IT Technician
                </span>
              </h4>
            </div>
            {/* Bagian Kanan: Tahun */}
            <div className="text-xs text-[#28292c] -mt-6 bg-[#f5f5f6] rounded-xl p-2">
              <p>2021 - Present</p>
            </div>
          </div>

          <div className="flex justify-between items-center">
            {/* Bagian Kiri: Pendidikan */}
            <div className="flex flex-col">
              <h4 className="font-semibold text-base">
                Kodepedia Matari Studio
                <br />
                <span className="text-xs font-normal">Mentor | Internship</span>
              </h4>
            </div>
            {/* Bagian Kanan: Tahun */}
            <div className="text-xs text-[#28292c] -mt-6 bg-[#f5f5f6] rounded-xl p-2">
              <p>Aug - Sep 2023</p>
            </div>
          </div>

          <div className="flex justify-between items-center">
            {/* Bagian Kiri: Pendidikan */}
            <div className="flex flex-col">
              <h4 className="font-semibold text-base">
                PT Ruang Raya Indonesia
                <br />
                <span className="text-xs font-normal">
                  Frontend Engineering | Studi Independen
                </span>
              </h4>
            </div>
            {/* Bagian Kanan: Tahun */}
            <div className="text-xs text-[#28292c] -mt-3 bg-[#f5f5f6] rounded-xl p-2">
              <p>Aug - Dec 2022</p>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default CardEnE;
