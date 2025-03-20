
import React from "react";
import { Card, CardContent } from "@/components/ui/card";

interface EducationCardProps {
  degree: string;
  school: string;
  duration: string;
  location: string;
}

const EducationCard: React.FC<EducationCardProps> = ({ degree, school, duration, location }) => {
  return (
    <Card className="bg-[#2a2a2a] border-gray-800 hover:scale-[1.02] transition-all duration-300 hover:border-primary/50">
      <CardContent className="p-6">
        <h3 className="text-xl font-semibold mb-2">{degree}</h3>
        <p className="text-primary mb-2">{school}</p>
        <p className="text-sm text-gray-400">{duration} • {location}</p>
      </CardContent>
    </Card>
  );
};

export default EducationCard;
