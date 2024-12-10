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
      className={`card bg-white shadow-md w-full  rounded-2xl flex flex-col lg:${
        reverse ? "flex-row-reverse" : "flex-row"
      } md:${
        reverse ? "flex-row-reverse" : "flex-row"
      } overflow-hidden hover:shadow-lg transition-all duration-300 ease-in-out`}
    >
      {/* Bagian Carousel Gambar */}
      <div className="w-full lg:w-1/2 md:w-1/2 h-auto p-2">
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
      <div className="p-4 flex flex-col  w-full lg:w-1/2 md:w-1/2">
        <div>
          <h3 className="text-xl lg:text-2xl font-semibold mb-2">{title}</h3>
          <p className="text-sm lg:text-base text-gray-900 mb-4">
            {description}
          </p>
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
      images: ["../../../images/projects/2setengah/1.png"],
      title: "Landing Page Using Bento Layout",
      description:
        "This project is a modern landing page with a bento layout, designed to provide an interactive and responsive user experience. Using HTML, CSS, and JavaScript, the page utilizes a grid layout to display content in neat, dynamic, and structured blocks.",
      texts: ["HTML", "CSS", "Javascript"],
      reverse: true,
    },
    {
      images: [
        "../../../images/projects/2/1.png",
        "../../../images/projects/2/2.png",
        "../../../images/projects/2/3.png",
        "../../../images/projects/2/4.png",
        "../../../images/projects/2/5.png",
        "../../../images/projects/2/6.png",
        "../../../images/projects/2/7.png",
      ],
      title: "Mobile App Game Store with Strapi",
      description:
        "The Mobile App Game Store project is a comprehensive solution that combines a mobile application with a powerful backend built using Strapi. This platform allows users to explore, browse, and download games directly from the app. The backend, powered by Strapi, serves as a flexible content management system, handling game data, user accounts, reviews, and other critical aspects seamlessly. With a user-friendly interface and robust features such as search functionality, game categorization, and personalized recommendations, the app ensures an optimal gaming experience. The project demonstrates the integration of modern technologies to provide a scalable and maintainable solution for game distribution and management.",
      texts: ["Dart", "Flutter", "Strapi"],
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

    {
      images: ["../../../images/projects/6/1.png"],
      title: "Learn to Build Front-End Web for Beginners | Bookshelf Apps",
      description:
        "Bookshelf application program that allows users to add new books to the bookshelf, search for books by title, change the status of a book (read/unread), and delete books. The application has a user interface that consists of several sections, including sections for entering new books, searching for books, and displaying a list of books that have not been read and books that have been read. Users can fill out a form with the title, author, year, and status of the book, then add it to the bookshelf. In addition, users can also search for books by title, change book status, and delete books from the shelf. This application uses JavaScript to manage program logic and store book data into localStorage. The interface of this application uses HTML and CSS to set the layout and appearance style.",
      texts: ["HTML", "CSS", "Javascript"],
      reverse: false,
    },

    {
      images: [
        "../../../images/projects/4/1.png",
        "../../../images/projects/4/2.png",
      ],
      title:
        "Spice Detection with Deep Learning: Image Classification Using TensorFlow and Flask",
      description:
        "The above program uses the Python programming language and utilizes the TensorFlow and Keras libraries to build a convolutional neural network (CNN) model that can classify spice images into 3 classes: Ginger, Turmeric, and Galangal. The program uses Google Colab as the development environment and involves data processing, model training, and prediction using image data. Image prediction results are displayed with accuracy and detected classes. In addition, the program also has a web interface using Flask, where users can upload images and view their prediction results through a predefined web page.",
      texts: ["Python", "Depp Learning", "Flask", "Tensorflow"],
      reverse: true,
    },
    {
      images: [
        "../../../images/projects/5/1.png",
        "../../../images/projects/5/2.png",
      ],
      title: "Website Yu-Gi-Oh Card Deck",
      description:
        "One of the final projects in the MSIB Independent Study activity of Ruang Guru is to create a YU-Gi-Oh website using RestAPI and implementing asynchronous with ReactJS. This website has a filter feature to make it easier for users to search for the desired YU-Gi-Oh cards, as well as displaying complete card details when clicked. Through the use of ReactJS and RestAPI technology, this project provides a fun interactive experience for YU-Gi-Oh fans to explore the world of cards.",
      texts: ["ReactJS", "Tailwind CSS", "Rest API"],
      reverse: false,
    },
    // Tambahkan proyek lain sesuai kebutuhan
  ];

  return (
    <div className="container mx-auto px-4 lg:px-20 py-8 flex flex-col gap-6">
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

export default AllCardProject;
