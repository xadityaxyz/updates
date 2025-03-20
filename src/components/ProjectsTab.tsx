
import React from "react";
import { Code } from "lucide-react";
import ProjectCard from "./ProjectCard";

interface Project {
  title: string;
  duration: string;
  location: string;
  description: string;
  achievements: string[];
  tech: string[];
  link: string;
}

interface ProjectsTabProps {
  projects: Project[];
}

const ProjectsTab: React.FC<ProjectsTabProps> = ({ projects }) => {
  return (
    <div className="space-y-12 animate-fade-in">
      <section>
        <h2 className="text-3xl font-bold mb-8 flex items-center gap-2">
          <Code className="w-8 h-8" />
          Projects
        </h2>
        <div className="space-y-8">
          {projects.map((project, index) => (
            <ProjectCard 
              key={index} 
              title={project.title}
              duration={project.duration}
              location={project.location}
              description={project.description}
              achievements={project.achievements}
              tech={project.tech}
              link={project.link}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default ProjectsTab;
