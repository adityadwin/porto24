const ContactLayout = ({ children }) => {
  return (
    <div id="contact">
      <main className="h-full flex flex-col justify-center items-center bg-gradient-to-r from-[#50b4df] to-[#4c85f6] bg-repeat">
        {children}
      </main>
    </div>
  );
};

export default ContactLayout;
