import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Card = ({ images, title, description, texts, reverse }) => {
  const renderArrowPrev = (onClickHandler, hasPrev) =>
    hasPrev && (
      <button
        type="button"
        onClick={onClickHandler}
        className="absolute top-1/2 transform -translate-y-1/2 left-2 z-10 bg-gray-700 p-2 rounded-full text-white hover:bg-gray-900"
        aria-label="Previous Slide"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>
    );

  const renderArrowNext = (onClickHandler, hasNext) =>
    hasNext && (
      <button
        type="button"
        onClick={onClickHandler}
        className="absolute top-1/2 transform -translate-y-1/2 right-2 z-10 bg-gray-700 p-2 rounded-full text-white hover:bg-gray-900"
        aria-label="Next Slide"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>
    );

  return (
    <div
      className={`card bg-white shadow-md w-full h-auto rounded-2xl flex flex-col ${
        reverse
          ? "lg:flex-row-reverse md:flex-row-reverse"
          : "lg:flex-row md:flex-row"
      } overflow-hidden hover:shadow-lg transition-all duration-300 ease-in-out`}
    >
      {/* Bagian Carousel Gambar */}
      <div className="w-full md:w-1/2 h-full md:h-full p-2">
        <Carousel
          showThumbs={false}
          infiniteLoop={true}
          autoPlay={true}
          interval={3000}
          stopOnHover={true}
          showStatus={false}
          renderArrowPrev={renderArrowPrev}
          renderArrowNext={renderArrowNext}
        >
          {images.map((image, index) => (
            <div key={index}>
              <img
                src={image}
                alt={`${title} - Slide ${index + 1}`}
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
          ))}
        </Carousel>
      </div>

      {/* Bagian Konten */}
      <div className="p-4 flex flex-col w-full md:w-1/2">
        <div>
          <h3 className="text-xl font-semibold mb-2 lg:text-2xl">{title}</h3>
          <p className="text-sm lg:text-lg text-gray-900 mb-4">{description}</p>
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

const CardProject = () => {
  const projects = [
    {
      images: [
        "../../../images/projects/1/2.png",
        "../../../images/projects/1/1.png",
        "../../../images/projects/1/3.png",
        "../../../images/projects/1/4.png",
      ],
      title: "Web Design Course Final Project - Bento Layout",
      description:
        "This project is a website designed using the concept of Bento Layout, a popular design style inspired by the grid layout of boxes of varying sizes, as in a bento box. The website is built using HTML, CSS, and JavaScript technologies, which enable interactive and well-structured displays. In this project, I utilized HTML to build the basic framework of the website, where each content is placed in a neat grid structure. CSS is used to embellish the appearance with unique colors, typography, and styles that fit the modern design concept. JavaScript is also added to provide interactivity, such as alerts when the user interacts with the page size. This project demonstrates my understanding in the use of grid-based layouts and my ability to implement modern UI/UX design principles to improve user experience.",
      texts: ["HTML", "CSS", "Javascript"],
      reverse: false,
    },
    {
      images: [
        "../../../images/projects/3/1.png",
        "../../../images/projects/3/2.png",
        "../../../images/projects/3/3.png",
        "../../../images/projects/3/4.png",
        "../../../images/projects/3/5.png",
        "../../../images/projects/3/6.png",
        "../../../images/projects/3/7.png",
      ],

      title: "Build an E-commerce Website with Wordpress",
      description:
        "The final project of semester 6 of E-Business course is to create an e-commerce website using WordPress platform. Our team consisted of 3 people who worked together to design and develop this site. Through this project, we aim to create a platform that allows users to buy and sell products online easily and safely.In developing our e-commerce website, we focus on an attractive and responsive design so that users can access the site comfortably through various devices. We also pay attention to good integration with online payment systems and inventory management. Features such as shopping cart, product search, user reviews.",
      texts: ["Wordpress", "WooCommerce", "Tawk io"],
      reverse: true,
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8 flex flex-col gap-6">
      {projects.map((project, index) => (
        <Card
          key={index}
          images={project.images}
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
