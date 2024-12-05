const ServicesLayout = ({ children }) => {
  return (
    <div>
      <main
        className="pt-10 min-h-screen flex flex-col bg-[#28292c]  bg-repeat"
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
