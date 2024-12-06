const EdunExpLayout = ({ children }) => {
  return (
    <div>
      <main
        className="pt-10 min-h-screen flex flex-col bg-[#eaeaea]  bg-repeat"
        style={{
          backgroundImage: `url('https://i.ibb.co.com/hFJ51Pf/pattern.png')`,
        }}
      >
        {children}
      </main>
    </div>
  );
};

export default EdunExpLayout;
