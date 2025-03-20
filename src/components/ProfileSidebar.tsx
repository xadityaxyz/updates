
import React from "react";
import { Mail, Phone, Calendar, MapPin, Github, Linkedin, Instagram, Twitter } from "lucide-react";

const ProfileSidebar = () => (
  <div className="flex flex-col h-full">
    <div className="bg-[#222222] py-6 px-4 sm:py-8 sm:px-6">
      <div className="flex flex-col items-center">
        <div className="relative w-32 h-32 sm:w-36 sm:h-36 md:w-48 md:h-48 mx-auto mb-4">
          <div className="absolute inset-0 w-full h-full">
            <svg viewBox="0 0 200 200" className="w-full h-full">
              <path 
                d="M20,0 L180,0 C190,0 200,10 200,20 L200,180 C200,190 190,200 180,200 L20,200 C10,200 0,190 0,180 L0,20 C0,10 10,0 20,0 Z" 
                fill="#222222"
              />
              <path 
                d="M30,10 C10,40 10,80 30,160 C50,190 150,190 170,160 C190,80 190,40 170,10 C150,-10 50,-10 30,10 Z" 
                fill="#222222"
              />
              <path 
                d="M160,40 C190,60 190,140 160,160 C140,190 60,190 40,160 C10,140 10,60 40,40 C60,10 140,10 160,40 Z" 
                fill="#4CAF50" 
                className="opacity-50"
              />
              <path 
                d="M40,40 C10,60 10,140 40,160 C60,190 140,190 160,160 C190,140 190,60 160,40 C140,10 60,10 40,40 Z" 
                fill="#3F51B5" 
                className="opacity-50"
              />
            </svg>
          </div>
          <div className="absolute inset-0 m-auto w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 rounded-full overflow-hidden">
            <img
              src="/lovable-uploads/a45718e5-062f-4a5c-97f1-4cb8b0453b0d.png"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <h1 className="text-lg sm:text-xl md:text-2xl font-bold mb-1">Aditya Wadekar</h1>
        <p className="text-yellow-500 text-sm sm:text-base">DevOps Engineer</p>
      </div>
    </div>

    <div className="p-4 sm:p-6 space-y-4 sm:space-y-6">
      <div className="space-y-3 sm:space-y-4">
        <div className="flex items-center gap-3 text-gray-400">
          <div className="w-6 sm:w-7 h-6 sm:h-7 flex items-center justify-center text-yellow-500">
            <Mail className="w-4 sm:w-5 h-4 sm:h-5 flex-shrink-0" />
          </div>
          <div>
            <p className="text-xs text-gray-500 uppercase">EMAIL</p>
            <a href="mailto:adityadwadekar47@gmail.com" className="text-xs sm:text-sm text-gray-300 hover:text-white transition-colors break-all">
              adityadwadekar47@gmail.com
            </a>
          </div>
        </div>
        
        <div className="flex items-center gap-3 text-gray-400">
          <div className="w-6 sm:w-7 h-6 sm:h-7 flex items-center justify-center text-yellow-500">
            <Phone className="w-4 sm:w-5 h-4 sm:h-5 flex-shrink-0" />
          </div>
          <div>
            <p className="text-xs text-gray-500 uppercase">PHONE</p>
            <a href="tel:+917262931415" className="text-xs sm:text-sm text-gray-300 hover:text-white transition-colors">
              +91 7262931415
            </a>
          </div>
        </div>
        
        <div className="flex items-center gap-3 text-gray-400">
          <div className="w-6 sm:w-7 h-6 sm:h-7 flex items-center justify-center text-yellow-500">
            <Calendar className="w-4 sm:w-5 h-4 sm:h-5 flex-shrink-0" />
          </div>
          <div>
            <p className="text-xs text-gray-500 uppercase">AVAILABILITY</p>
            <span className="text-xs sm:text-sm text-gray-300">Available for opportunities</span>
          </div>
        </div>
        
        <div className="flex items-center gap-3 text-gray-400">
          <div className="w-6 sm:w-7 h-6 sm:h-7 flex items-center justify-center text-yellow-500">
            <MapPin className="w-4 sm:w-5 h-4 sm:h-5 flex-shrink-0" />
          </div>
          <div>
            <p className="text-xs text-gray-500 uppercase">LOCATION</p>
            <span className="text-xs sm:text-sm text-gray-300">Pune, India</span>
          </div>
        </div>
      </div>

      <div className="pt-2 sm:pt-4 flex justify-center gap-3 sm:gap-4">
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
            className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center rounded-full border border-gray-700 text-gray-400 hover:text-yellow-500 hover:border-yellow-500 transition-all"
          >
            <social.icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          </a>
        ))}
      </div>
    </div>
  </div>
);

export default ProfileSidebar;
