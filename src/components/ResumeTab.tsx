
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Briefcase, GraduationCap } from "lucide-react";
import EducationCard from "./EducationCard";

interface Education {
  degree: string;
  school: string;
  duration: string;
  location: string;
}

interface ResumeTabProps {
  education: Education[];
  skills: string[];
}

const ResumeTab: React.FC<ResumeTabProps> = ({ education, skills }) => {
  return (
    <div className="space-y-12 animate-fade-in">
      <section className="animate-fade-in [--animation-delay:200ms]">
        <h2 className="text-3xl font-bold mb-8 flex items-center gap-2">
          <Briefcase className="w-8 h-8" />
          Experience
        </h2>
        <div className="space-y-6">
          <Card className="bg-[#2a2a2a] border-gray-800 hover:scale-[1.02] transition-all duration-300 hover:border-primary/50">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2">DevOps Engineer Intern</h3>
              <p className="text-primary mb-2">BrightLink Info Technologies Private Limited</p>
              <p className="text-sm text-gray-400 mb-4">10/2024 - Present • Pune, India</p>
              <ul className="list-disc list-inside space-y-2 text-gray-400">
                <li className="hover:text-gray-300 transition-colors">Contributing to the design and deployment of cloud-native applications</li>
                <li className="hover:text-gray-300 transition-colors">Streamlined deployment workflows by implementing Jenkins CI/CD pipelines</li>
                <li className="hover:text-gray-300 transition-colors">Collaborated with cross-functional teams on AWS projects</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-[#2a2a2a] border-gray-800 hover:scale-[1.02] transition-all duration-300 hover:border-primary/50">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2">Internship</h3>
              <p className="text-primary mb-2">Cravita Technologies</p>
              <p className="text-sm text-gray-400 mb-4">02/2024 - 08/2024 • Pune, India</p>
              <ul className="list-disc list-inside space-y-2 text-gray-400">
                <li className="hover:text-gray-300 transition-colors">Completed a 6-month internship focusing on containerization technologies</li>
                <li className="hover:text-gray-300 transition-colors">Built and deployed containerized applications using Docker</li>
                <li className="hover:text-gray-300 transition-colors">Worked on multiple team projects, streamlining project workflows</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="animate-fade-in [--animation-delay:400ms]">
        <h2 className="text-3xl font-bold mb-8 flex items-center gap-2">
          <GraduationCap className="w-8 h-8" />
          Education
        </h2>
        <div className="space-y-6">
          {education.map((edu, index) => (
            <EducationCard
              key={index}
              degree={edu.degree}
              school={edu.school}
              duration={edu.duration}
              location={edu.location}
            />
          ))}
        </div>
      </section>

      <section className="animate-fade-in [--animation-delay:600ms]">
        <h2 className="text-3xl font-bold mb-8">Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {skills.map((skill) => (
            <div 
              key={skill}
              className="bg-[#2a2a2a] text-white px-4 py-3 rounded-lg text-center border border-gray-800 hover:border-primary/50 hover:scale-105 transition-all duration-300"
            >
              {skill}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ResumeTab;
