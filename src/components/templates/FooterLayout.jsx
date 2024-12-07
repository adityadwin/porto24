const FooterLayout = ({ children }) => {
  return (
    <div id="contact">
      <main
        className="pt-10 min-h-screen flex flex-col bg-[#745062]  bg-repeat"
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
