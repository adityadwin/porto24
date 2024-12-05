import CardService from "../organisms/CardService";
import ServicesLayout from "../templates/ServicesLayout";

const Services = () => {
  return (
    <ServicesLayout>
      <div className="text-white text-2xl px-4">- Services</div>
      <div className="px-4 text-4xl text-white font-semibold mb-6">
        <h1>
          My <span className="text-[#50b4df]">Services</span>
        </h1>
      </div>

      <CardService />
    </ServicesLayout>
  );
};

export default Services;
