import { useState } from "react";
import emailjs from "emailjs-com";
import ContactLayout from "../templates/ContactLayout";

const ContactMe = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_h9bqkz9", // Replace with your EmailJS service ID
        "template_notiw7q", // Replace with your EmailJS template ID
        e.target,
        "OBR4sEpZNEtxNlRRr" // Replace with your EmailJS user ID
      )
      .then(
        () => {
          alert("Message sent successfully!");
        },
        () => {
          alert("Message failed to send, please try again later.");
        }
      );
  };

  return (
    <ContactLayout>
      <div className="container mx-auto">
        <div className=" px-4 md:p-12 w-full">
          <div className="flex flex-col md:flex-row gap-12">
            {/* Sisi Kiri */}
            <div className="md:w-1/2 text-white p-2 mt-2">
              <h1 className="text-2xl font-semibold mb-6">- Hire Me</h1>
              <p className="text-5xl mb-6 font-semibold">
                Let&apos;s <span className="text-[#071116]">connect</span> &{" "}
                <span className="text-[#071116]">collaborate</span>
              </p>
              <blockquote className="italic font-medium text-[#fff] mb-8 border-l-4 border-[#fff] pl-4">
                &quot;The best way to predict the future is to create it.&quot;
              </blockquote>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="rounded-full w-12 h-12">
                    <img src="../../../images/icons/wa.png" alt="" />
                  </div>
                  <p className="text-lg">+62 881 866 5402</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="rounded-full w-12 h-12">
                    <img src="../../../images/icons/mail.png" alt="" />
                  </div>
                  <p className="text-lg">adityadwinandra1@gmail.com</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="prounded-full w-12 h-12">
                    <img src="../../../images/icons/ig.png" alt="" />
                  </div>
                  <p className="text-lg">@adityadwn99_</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="rounded-full w-12 h-12">
                    <img src="../../../images/icons/loc.png" alt="" />
                  </div>
                  <p className="text-lg">Grobogan, Jawa Tengah</p>
                </div>
              </div>
            </div>

            {/* Sisi Kanan */}
            <div className="md:w-1/2 rounded-lg p-2 mb-6">
              <form className="space-y-6" onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Name"
                  className="w-full p-4 bg-white border border-gray-300 rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 outline-none"
                  required
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  className="w-full p-4 bg-white border border-gray-300 rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 outline-none"
                  required
                />
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone Number"
                  className="w-full p-4 bg-white border border-gray-300 rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 outline-none"
                  required
                />
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Message"
                  rows="5"
                  className="w-full p-4 bg-white border border-gray-300 rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 outline-none"
                  required
                ></textarea>
                <button
                  type="submit"
                  className="bg-gradient-to-r from-[#22323a] to-[#071116] text-white py-3 px-6 rounded-full shadow-md hover:shadow-lg hover:scale-105 transition-all w-full text-lg font-semibold"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </ContactLayout>
  );
};

export default ContactMe;
