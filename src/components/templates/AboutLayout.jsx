const AboutLayout = ({ children }) => {
  return (
    <div>
      <main
        className="pt-10 min-h-screen flex flex-col bg-[#f7f3f5]  bg-repeat"
        style={{
          backgroundImage: `url('/src/assets/pattern.svg')`,
        }}
      >
        {children}
      </main>
    </div>
  );
};

export default AboutLayout;
