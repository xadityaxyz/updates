
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, User } from "lucide-react";
import {
  Drawer,
  DrawerContent,
  DrawerTrigger,
} from "@/components/ui/drawer";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

// Import components
import ProfileSidebar from "@/components/ProfileSidebar";
import AboutTab from "@/components/AboutTab";
import ResumeTab from "@/components/ResumeTab";
import ProjectsTab from "@/components/ProjectsTab";
import ContactTab from "@/components/ContactTab";

// Import data
import { services, education, skills, projects } from "@/data/portfolioData";

const Index = () => {
  const [activeTab, setActiveTab] = useState("about");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    
    checkIfMobile();
    
    window.addEventListener('resize', checkIfMobile);
    
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  const renderContent = () => {
    switch (activeTab.toLowerCase()) {
      case 'about':
        return <AboutTab services={services} />;
      case 'resume':
        return <ResumeTab education={education} skills={skills} />;
      case 'portfolio':
      case 'projects':
        return <ProjectsTab projects={projects} />;
      case 'contact':
        return <ContactTab />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-[#1a1a1a] text-white">
      <div className="flex flex-col lg:flex-row">
        <div className="lg:hidden sticky top-0 z-50 flex justify-between items-center bg-[#1a1a1a] border-b border-gray-800 px-4 py-2">
          <h1 className="text-xl font-bold">Aditya Wadekar</h1>
          
          <div className="flex items-center gap-2">
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline" size="icon" className="rounded-full bg-[#222222] border-gray-700 hover:bg-[#333333]">
                  <User className="h-5 w-5" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-80 p-0 bg-[#222222] border-gray-800" side="bottom" align="end">
                <ProfileSidebar />
              </PopoverContent>
            </Popover>
            
            <Button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              variant="outline"
              size="icon"
              className="lg:hidden bg-[#222222] border-gray-700 hover:bg-[#333333]"
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </Button>
          </div>
        </div>

        <div className="md:hidden">
          <Drawer>
            <DrawerTrigger asChild>
              <Button 
                variant="outline" 
                size="icon" 
                className="fixed bottom-4 right-4 z-50 rounded-full bg-yellow-500 text-black border-none hover:bg-yellow-400"
              >
                <User className="h-5 w-5" />
              </Button>
            </DrawerTrigger>
            <DrawerContent className="bg-[#222222] border-t border-gray-800">
              <div className="max-h-[85vh] overflow-y-auto">
                <ProfileSidebar />
              </div>
            </DrawerContent>
          </Drawer>
        </div>

        <div className={`
          ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'} 
          lg:translate-x-0
          w-[300px] min-h-screen bg-[#222222]
          fixed lg:relative top-0 left-0 
          transition-transform duration-300 ease-in-out
          z-[30] border-r border-gray-800
          overflow-y-auto p-0
          hidden lg:block
        `}>
          <ProfileSidebar />
        </div>

        <div className="flex-1">
          <nav className="sticky top-0 lg:top-0 z-20 bg-[#1a1a1a] py-4 border-b lg:border-b-0 border-gray-800">
            <ul className={`
              flex gap-4 lg:gap-8 justify-center px-4
              ${isMobileMenuOpen ? 'fixed inset-x-0 top-[57px] bg-[#1a1a1a] z-40 border-b border-gray-800 py-2' : ''}
            `}>
              {["About", "Resume", "Projects", "Contact"].map((item) => (
                <li key={item}>
                  <button
                    className={`text-lg ${
                      activeTab.toLowerCase() === item.toLowerCase()
                        ? "text-yellow-500 border-b-2 border-yellow-500"
                        : "text-gray-400 hover:text-white"
                    } transition-colors py-2 px-1`}
                    onClick={() => {
                      setActiveTab(item.toLowerCase());
                      setIsMobileMenuOpen(false);
                    }}
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {isMobileMenuOpen && (
            <div 
              className="fixed inset-0 bg-black/50 z-[25] lg:hidden backdrop-blur-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            />
          )}

          <div className="p-4 lg:p-6">
            {renderContent()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
