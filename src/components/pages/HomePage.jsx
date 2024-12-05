import NavLayout from "../templates/NavLayout";
import { TypeAnimation } from "react-type-animation";
import Marquee from "react-fast-marquee";

const HomePage = () => {
  return (
    <NavLayout>
      <div className="w-screen">
        <div className="text-center mt-24 px-4 ">
          <h2 className="text-5xl font-normal text-[#f7f3f5] text-left">
            Hello👋
          </h2>
          <h1 className="text-6xl font-semibold text-[#f7f3f5] text-left">
            I&apos;m{" "}
            <span className="text-[#50b4df] underline">
              Aditya,
              <br />
            </span>
            <span className="text-[31px]">
              {" "}
              <TypeAnimation
                sequence={[
                  // Same substring at the start will only be typed out once, initially
                  "A Frontend Developer",
                  900, // wait 1s before replacing "Mice" with "Hamsters"
                  "A Graphic Designer",
                  900,
                  "An UI/UX Designer",
                  900,
                  "An IT Enthusiast",
                  900,
                ]}
                wrapper="span"
                speed={65}
                style={{ display: "inline-block" }}
                repeat={Infinity}
              />
            </span>
          </h1>
        </div>
      </div>

      <div className="w-full">
        {" "}
        <div className="flex  justify-center items-center mt-24">
          <img
            className="w-screen h-full"
            src="https://i.ibb.co.com/CPf9zht/Me.png"
            alt="profile"
          />
        </div>
        <div className="h-12 bg-[#e8e3de] flex flex-row justify-center font-semibold text-lg hover:text-[#29657f] transition-all duration-300 ease-in-out">
          <Marquee speed={180}>
            <p className="mx-3">✦</p>
            <p className="mx-3">HTML</p>
            <p className="mx-3">✦</p>
            <p className="mx-3">CSS</p>
            <p className="mx-3">✦</p>
            <p className="mx-3">Javascript</p>
            <p className="mx-3">✦</p>
            <p className="mx-3">ReactJS</p>
            <p className="mx-3">✦</p>
            <p className="mx-3">NodeJS</p>
            <p className="mx-3">✦</p>
            <p className="mx-3">Wordpress</p>
            <p className="mx-3">✦</p>
            <p className="mx-3">Adobe Photoshop</p>
            <p className="mx-3">✦</p>
            <p className="mx-3">CorelDraw</p>
            <p className="mx-3">✦</p>
            <p className="mx-3">Figma</p>
          </Marquee>
        </div>
      </div>
    </NavLayout>
  );
};

export default HomePage;
