const FooterLayout = ({ children }) => {
  return (
    <div id="contact">
      <main
        className="pt-10 lg:h-[280px] flex flex-col bg-[#071116] text-white bg-repeat"
        style={{
          backgroundImage: `url('https://i.ibb.co.com/hFJ51Pf/pattern.png')`,
        }}
      >
        {children}
      </main>
    </div>
  );
};

export default FooterLayout;
