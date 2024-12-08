const Card = ({ image, title, description, texts, reverse }) => {
  return (
    <div
      className={`card bg-white shadow-md w-full rounded-2xl flex flex-col ${
        reverse
          ? "lg:flex-row-reverse md:flex-row-reverse"
          : "lg:flex-row md:flex-row"
      } overflow-hidden hover:shadow-lg transition-all duration-300 ease-in-out`}
    >
      {/* Bagian Gambar */}
      <div className="w-full md:w-1/2 h-[200px] md:h-full p-2 ">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover rounded-xl "
        />
      </div>
      {/* Bagian Konten */}
      <div className="p-4 flex flex-col justify-between w-full md:w-1/2">
        <div>
          <h3 className="text-xl font-semibold mb-2 ">{title}</h3>
          <p className="text-sm text-gray-600 mb-4">{description}</p>
        </div>
        <div className="flex space-x-4 text-sm text-[#ffff] ">
          {texts.map((text, index) => (
            <span key={index} className="bg-[#50b4df] w-auto p-2 rounded-xl">
              {text}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const CardProject = () => {
  const projects = [
    {
      image:
        "https://www.shutterstock.com/image-photo/calm-weather-on-sea-ocean-600nw-2212935531.jpg",
      title: "Project A",
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
      texts: ["HTML", "CSS", "ReactJS"],
      reverse: false,
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFCcVRGLovbSiHrgEejCUJDEWf4obMaFU1ag&s",
      title: "Project B",
      description:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum The Extremes of Good and Evil by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum.",
      texts: ["JavaScript", "TailwindCSS", "NodeJS"],
      reverse: true,
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8 flex flex-col gap-6">
      {projects.map((project, index) => (
        <Card
          key={index}
          image={project.image}
          title={project.title}
          description={project.description}
          texts={project.texts}
          reverse={project.reverse}
        />
      ))}
    </div>
  );
};

export default CardProject;
