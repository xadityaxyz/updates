
import React from "react";
import ServiceCard from "./ServiceCard";

interface Service {
  title: string;
  description: string;
  icon: string;
}

interface AboutTabProps {
  services: Service[];
}

const AboutTab: React.FC<AboutTabProps> = ({ services }) => {
  return (
    <div className="space-y-8 animate-fade-in">
      <section className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">About Me</h2>
        <p className="text-gray-400 mb-8 leading-relaxed">
          I'm a DevOps Engineer specializing in AWS cloud infrastructure and automation. With expertise in containerization,
          CI/CD pipelines, and infrastructure as code, I help organizations build and maintain scalable, reliable systems.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default AboutTab;
