const Card = ({ icon, title, description }) => {
  return (
    <div className="card bg-slate-200 bg-opacity-70 p-8 shadow-md w-[80%] lg:w-[350px] lg:h-[400px]  h-[390px] rounded-[540px] flex flex-col justify-center items-center hover:bg-slate-100 transition-all duration-300 ease-in-out transform hover:scale-95">
      <div className="icon text-center text-8xl mb-2 bg-slate-300 bg-opacity-35 rounded-full w-36 h-36  lg:-mt-10 flex justify-center items-center">
        {icon}
      </div>
      <h3 className="text-2xl font-bold text-center mb-2">{title}</h3>
      <p className="text-gray-800 text-center text-sm">{description}</p>
    </div>
  );
};

// Komponen CardService untuk merender 3 kartu
const CardService = () => {
  return (
    <div className="container flex flex-col mx-auto lg:flex-row md:flex-row md:gap-x-8 lg:gap-x-16 justify-center items-center gap-y-6 md:px-8 px-4 mb-6">
      <Card
        icon={
          <span role="img" aria-label="html">
            <img
              src="../../../images/icons/web.png"
              alt="Frontend Development"
            />
          </span>
        }
        title="Frontend Development"
        description="Crafting interactive, responsive websites using cutting-edge web technologies to deliver seamless and engaging user experiences."
      />
      <Card
        icon={
          <span role="img" aria-label="css">
            <img src="../../../images/icons/gd.png" alt="graphic design" />
          </span>
        }
        title="Graphic Design"
        description="Designing captivating, user-centric visuals that combine creativity with functionality, elevating the overall user experience."
      />
      <Card
        icon={
          <span role="img" aria-label="react">
            <img src="../../../images/icons/ui.png" alt="ui/ux" />
          </span>
        }
        title="Web Design"
        description="Building intuitive, visually appealing interfaces with a focus on user interaction, ensuring a smooth and enjoyable digital journey."
      />
    </div>
  );
};

export default CardService;
