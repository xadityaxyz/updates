
import React from "react";
import { Card, CardContent } from "@/components/ui/card";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon }) => {
  return (
    <Card className="bg-[#2a2a2a] border-gray-800 hover:border-primary/50 transition-colors">
      <CardContent className="p-6">
        <div className="text-3xl mb-4">{icon}</div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-400">{description}</p>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
