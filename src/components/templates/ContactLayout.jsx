const ContactLayout = ({ children }) => {
  return (
    <div id="contact">
      <main className="h-full flex flex-col  bg-gradient-to-r from-[#50b4df] to-[#4c85f6] bg-repeat">
        {children}
      </main>
    </div>
  );
};

export default ContactLayout;
