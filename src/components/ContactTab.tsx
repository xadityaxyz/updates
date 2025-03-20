
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, ArrowRight, Linkedin, Github, Instagram, Twitter } from "lucide-react";

const ContactTab: React.FC = () => {
  return (
    <div className="max-w-2xl mx-auto space-y-8 animate-fade-in p-4">
      <div className="animate-fade-in [--animation-delay:200ms]">
        <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
        <p className="text-gray-400 mb-8">
          I'm always interested in hearing about new opportunities and collaborations
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-6 mb-8 animate-fade-in [--animation-delay:400ms]">
        <Card className="bg-[#2a2a2a] border-gray-800 hover:border-primary/50 transition-colors">
          <CardContent className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <Mail className="w-6 h-6 text-primary" />
              <h3 className="text-lg font-semibold">Email</h3>
            </div>
            <p className="text-gray-400 mb-4">Drop me a line anytime</p>
            <a href="mailto:adityadwadekar47@gmail.com" className="text-primary hover:underline">
              adityadwadekar47@gmail.com
            </a>
          </CardContent>
        </Card>

        <Card className="bg-[#2a2a2a] border-gray-800 hover:border-primary/50 transition-colors">
          <CardContent className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <Phone className="w-6 h-6 text-primary" />
              <h3 className="text-lg font-semibold">Phone</h3>
            </div>
            <p className="text-gray-400 mb-4">Available during business hours</p>
            <a href="tel:+917262931415" className="text-primary hover:underline">
              +91 7262931415
            </a>
          </CardContent>
        </Card>
      </div>
      
      <div className="space-y-6 animate-fade-in [--animation-delay:400ms]">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button 
            className="flex items-center gap-2 w-full sm:w-auto hover:scale-105 transition-transform" 
            size="lg" 
            asChild
          >
            <a href="mailto:adityadwadekar47@gmail.com">
              <Mail className="w-5 h-5" />
              Send Email
            </a>
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="w-full sm:w-auto hover:scale-105 transition-transform"
            asChild
          >
            <a 
              href="https://drive.google.com/file/d/1LxRITHZIB8twQQbQb5W1YYh626QiZyuN/view?usp=drive_link" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <ArrowRight className="w-5 h-5" />
              Download CV
            </a>
          </Button>
        </div>
        
        <div className="pt-8 flex justify-center gap-6">
          {[
            { icon: Linkedin, href: "https://www.linkedin.com/in/aditya-wadekar-90a42a22b/" },
            { icon: Github, href: "https://github.com/xadityaxyz" },
            { icon: Instagram, href: "https://www.instagram.com/iadityawadekar" },
            { icon: Twitter, href: "https://x.com/i/flow/login?redirect_after_login=%2FAaditya1907" }
          ].map((social, index) => (
            <a 
              key={index}
              href={social.href}
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-400 hover:text-white transition-colors hover:scale-125 transform duration-300"
            >
              <social.icon className="w-6 h-6" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactTab;
