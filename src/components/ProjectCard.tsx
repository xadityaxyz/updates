
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, MapPin, ExternalLink } from "lucide-react";

interface ProjectCardProps {
  title: string;
  duration: string;
  location: string;
  description: string;
  achievements: string[];
  tech: string[];
  link: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ 
  title, 
  duration, 
  location, 
  description, 
  achievements, 
  tech, 
  link 
}) => {
  return (
    <Card 
      className="bg-[#2a2a2a] border-gray-800 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 group"
    >
      <CardContent className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">{title}</h3>
            <p className="text-primary text-sm mt-1 flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              {duration} 
              <MapPin className="w-4 h-4 ml-2" />
              {location}
            </p>
          </div>
          <a 
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:text-primary/80 transform transition-transform hover:scale-110"
          >
            <ExternalLink className="w-5 h-5" />
          </a>
        </div>
        <p className="text-gray-400 mb-4 leading-relaxed">{description}</p>
        <ul className="list-disc list-inside space-y-2 text-gray-400 mb-4">
          {achievements.map((achievement, idx) => (
            <li 
              key={idx}
              className="hover:text-gray-300 transition-colors cursor-default pl-2"
            >
              {achievement}
            </li>
          ))}
        </ul>
        <div className="flex flex-wrap gap-2">
          {tech.map((tech, techIndex) => (
            <span 
              key={techIndex}
              className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm hover:bg-primary/20 transition-colors cursor-default"
            >
              {tech}
            </span>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
