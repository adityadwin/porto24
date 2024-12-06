import { useState } from "react";
import emailjs from "emailjs-com";
import ContactLayout from "../templates/ContactLayout";

const ContactMe = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
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
        "service_h9bqkz9",
        "template_notiw7q",
        e.target,
        "OBR4sEpZNEtxNlRRr"
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
      <div id="contact" className="container mx-auto">
        <div className="bg-gradient-to-r from-[#50b4df] to-[#4c85f6] px-4 md:p-12">
          <div className="flex flex-col md:flex-row gap-12 ">
            {/* Sisi Kiri */}
            <div className="md:w-1/2 text-white p-2 mt-10">
              <h1 className="text-2xl font-semibold mb-6">- Contact Me</h1>
              <p className="text-5xl mb-6 font-semibold">
                Let&apos;s <span className="text-[#071116]">connect </span> &{" "}
                <span className="text-[#071116]">collaborate</span>
              </p>
              <blockquote className="italic font-medium text-[#fff] mb-8 border-l-4 border-[#fff] pl-4">
                &quot;The best way to predict the future is to create it.&quot;
              </blockquote>
              <div className="space-y-4">
                {/* Icon 1 */}
                <div className="flex items-center gap-4">
                  <div className="p-4 bg-white rounded-full shadow-md">
                    <i className="fas fa-phone-alt text-white"></i>
                  </div>
                  <p className="text-lg">+62 123 456 7890</p>
                </div>
                {/* Icon 2 */}
                <div className="flex items-center gap-4">
                  <div className="p-4 bg-white rounded-full shadow-md">
                    <i className="fas fa-envelope text-white"></i>
                  </div>
                  <p className="text-lg">user@gmail.com</p>
                </div>
                {/* Icon 3 */}
                <div className="flex items-center gap-4">
                  <div className="p-4 bg-white rounded-full shadow-md">
                    <i className="fab fa-instagram text-white"></i>
                  </div>
                  <p className="text-lg">@user99_</p>
                </div>
                {/* Icon 4 */}
                <div className="flex items-center gap-4">
                  <div className="p-4 bg-white rounded-full shadow-md">
                    <i className="fas fa-map-marker-alt text-white"></i>
                  </div>
                  <p className="text-lg">Jakarta, Indonesia</p>
                </div>
              </div>
            </div>

            {/* Sisi Kanan */}
            <div className="md:w-1/2  rounded-lg p-2 mb-6">
              <form className="space-y-6" onSubmit={handleSubmit}>
                {/* First & Last Name */}
                <div className="flex flex-col md:flex-row gap-4">
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="First Name"
                    className="flex-1 p-4 bg-white border border-gray-300 rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 outline-none"
                    required
                  />
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Last Name"
                    className="flex-1 p-4 bg-white-100 border border-gray-300 rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 outline-none"
                    required
                  />
                </div>
                {/* Email & Phone */}
                <div className="flex flex-col md:flex-row gap-4">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                    className="flex-1 p-4 bg-white-100 border border-gray-300 rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 outline-none"
                    required
                  />
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone Number"
                    className="flex-1 p-4 bg-white-100 border border-gray-300 rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 outline-none"
                    required
                  />
                </div>
                {/* Subject */}
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject"
                  className="w-full p-4 bg-white-100 border border-gray-300 rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 outline-none"
                  required
                />
                {/* Message */}
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Message"
                  rows="5"
                  className="w-full p-4 bg-white100 border border-gray-300 rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 outline-none"
                  required
                ></textarea>
                {/* Submit Button */}
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
