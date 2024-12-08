const Card = ({ image, title, description, texts, reverse }) => {
  return (
    <div
      className={`card bg-white shadow-md w-full rounded-2xl flex flex-col lg:${
        reverse ? "flex-row-reverse" : "flex-row"
      } md:${
        reverse ? "flex-row-reverse" : "flex-row"
      } overflow-hidden hover:shadow-lg transition-all duration-300 ease-in-out`}
    >
      {/* Bagian Gambar */}
      <div className="w-full lg:w-1/2 md:w-1/2 h-[200px] md:h-full lg:h-full p-2">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover rounded-xl"
        />
      </div>
      {/* Bagian Konten */}
      <div className="p-4 flex flex-col justify-between w-full lg:w-1/2 md:w-1/2">
        <div>
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-sm text-gray-600 mb-4">{description}</p>
        </div>
        <div className="flex space-x-4 text-sm text-[#ffff]">
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

const AllCardProject = () => {
  const projects = [
    {
      image:
        "https://www.shutterstock.com/image-photo/calm-weather-on-sea-ocean-600nw-2212935531.jpg",
      title: "Project A",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      texts: ["HTML", "CSS", "ReactJS"],
      reverse: false,
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFCcVRGLovbSiHrgEejCUJDEWf4obMaFU1ag&s",
      title: "Project B",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      texts: ["JavaScript", "TailwindCSS", "NodeJS"],
      reverse: true,
    },
    {
      image:
        "https://www.shutterstock.com/image-photo/calm-weather-on-sea-ocean-600nw-2212935531.jpg",
      title: "Project A",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      texts: ["HTML", "CSS", "ReactJS"],
      reverse: false,
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFCcVRGLovbSiHrgEejCUJDEWf4obMaFU1ag&s",
      title: "Project B",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      texts: ["JavaScript", "TailwindCSS", "NodeJS"],
      reverse: true,
    },
    {
      image:
        "https://www.shutterstock.com/image-photo/calm-weather-on-sea-ocean-600nw-2212935531.jpg",
      title: "Project A",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      texts: ["HTML", "CSS", "ReactJS"],
      reverse: false,
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFCcVRGLovbSiHrgEejCUJDEWf4obMaFU1ag&s",
      title: "Project B",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      texts: ["JavaScript", "TailwindCSS", "NodeJS"],
      reverse: true,
    },
  ];

  return (
    <div className="container mx-auto px-4 lg:px-20 py-8 flex flex-col gap-6">
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

export default AllCardProject;
