const Card = ({ icon, title, description }) => {
  return (
    <div className="card bg-slate-200 bg-opacity-70 p-8 shadow-md w-[80%] h-[390px] rounded-[540px] flex flex-col justify-center items-center hover:bg-slate-100 transition-all duration-300 ease-in-out transform hover:scale-95">
      <div className="icon text-center text-8xl mb-2 bg-slate-300 bg-opacity-35 rounded-full w-36 h-36 flex justify-center items-center">
        {icon}
      </div>
      <h3 className="text-2xl font-bold text-center mb-2">{title}</h3>
      <p className="text-gray-800 text-center text-base">{description}</p>
    </div>
  );
};

// Komponen CardService untuk merender 3 kartu
const CardService = () => {
  return (
    <div className="container flex flex-col justify-center items-center gap-y-6 px-4 mb-6">
      <Card
        icon={
          <span role="img" aria-label="html">
            🌐
          </span>
        }
        title="Frontend Development"
        description="Build responsive and dynamic websites using the latest technologies."
      />
      <Card
        icon={
          <span role="img" aria-label="css">
            🎨
          </span>
        }
        title="Graphic Design"
        description="Create beautiful and user-friendly interfaces with an emphasis on user experience."
      />
      <Card
        icon={
          <span role="img" aria-label="react">
            ⚛️
          </span>
        }
        title="UI/UX Design"
        description="Develop interactive and modern web applications using React.js and other frontend tools."
      />
    </div>
  );
};

export default CardService;
