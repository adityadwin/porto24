const AboutLayout = ({ children }) => {
  return (
    <div id="about">
      <main
        className="pt-10 lg:pt-24 lg:h-[730px] h-full flex flex-col bg-[#f7f3f5] bg-repeat"
        style={{
          backgroundImage: `url('https://i.ibb.co.com/hFJ51Pf/pattern.png')`,
        }}
      >
        {children}
      </main>
    </div>
  );
};

export default AboutLayout;
