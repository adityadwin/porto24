const ServicesLayout = ({ children }) => {
  return (
    <div id="service">
      <main
        className="pt-10  lg:h-[700px] h-full flex flex-col bg-[#28292c]  bg-repeat"
        style={{
          backgroundImage: `url('https://i.ibb.co.com/hFJ51Pf/pattern.png')`,
        }}
      >
        {children}
      </main>
    </div>
  );
};

export default ServicesLayout;
