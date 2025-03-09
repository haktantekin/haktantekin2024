'use client'

import { useState, useEffect, useRef, ReactNode } from "react";
import { Code, Layout, Palette, Terminal, Server } from "lucide-react";
import { cn } from "@/lib/utils";

type Skill = {
  name: string;
  projectCount: number;
  category: "frontend" | "backend" | "design" | "tools" | "other";
  icon?: ReactNode;
};

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState<"all" | "frontend" | "backend" | "design" | "tools" | "other">("all");
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  
  const skills: Skill[] = [
    { name: "React", projectCount: 5, category: "frontend", icon: <Code size={16} /> },
    { name: "React Query", projectCount: 1, category: "frontend", icon: <Code size={16} /> },
    { name: "TypeScript", projectCount: 5, category: "frontend", icon: <Terminal size={16} /> },
    { name: "Next.js", projectCount: 5, category: "frontend", icon: <Code size={16} /> },
    { name: "API Entegrasyonu", projectCount: 15, category: "frontend", icon: <Code size={16} /> },
    { name: "Tailwind CSS", projectCount: 5, category: "frontend", icon: <Code size={16} /> },
    { name: "Redux", projectCount: 1, category: "frontend", icon: <Code size={16} /> },
    { name: "JavaScript", projectCount: 25, category: "frontend", icon: <Terminal size={16} /> },
    { name: "Bootstrap", projectCount: 10, category: "frontend", icon: <Code size={16} /> },
    { name: "Sass/Less", projectCount: 10, category: "frontend", icon: <Code size={16} /> },
    { name: "jQuery", projectCount: 20, category: "frontend", icon: <Terminal size={16} /> },
    { name: "Responsive Design", projectCount: 25, category: "frontend", icon: <Layout size={16} /> },
    { name: "SEO Optimizasyonu", projectCount: 25, category: "frontend", icon: <Terminal size={16} /> },
    // Backend yetenekleri
    { name: ".net / C#", projectCount: 25, category: "backend", icon: <Server size={16} /> },
    { name: "Wordpress", projectCount: 1, category: "backend", icon: <Server size={16} /> },
    // Tasarım yetenekleri
    { name: "Figma", projectCount: 12, category: "design", icon: <Palette size={16} /> },
    { name: "Photoshop", projectCount: 13, category: "design", icon: <Palette size={16} /> },
    { name: "Adobe XD", projectCount: 3, category: "design", icon: <Palette size={16} /> },
    { name: "Zeplin", projectCount: 3, category: "design", icon: <Palette size={16} /> },
    // Araçlar
    { name: "Git", projectCount: 22, category: "tools", icon: <Terminal size={16} /> },
    { name: "TFS", projectCount: 3, category: "tools", icon: <Terminal size={16} /> },
    { name: "npm", projectCount: 25, category: "tools", icon: <Terminal size={16} /> },
    { name: "Webpack", projectCount: 20, category: "tools", icon: <Terminal size={16} /> },
  ];

  const filteredSkills = activeCategory === "all" 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
      }
    );
    
    const currentRef = sectionRef.current;
    
    if (currentRef) {
      observer.observe(currentRef);
    }
    
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="py-24 px-6 md:px-12"
    >
      <div className="container mx-auto max-w-5xl">
        <div
          className={`w-full transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          }`}
        >
          <div className="inline-block mb-6">
            <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-secondary">
              Yeteneklerim
            </span>
          </div>
          
          <h2 className="text-3xl font-bold tracking-tight mb-5 lg:mb-10">
            Teknik Uzmanlık
          </h2>
          
          <div className="mb-8 flex flex-wrap gap-2">
            <button
              onClick={() => setActiveCategory("all")}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-medium transition-colors",
                activeCategory === "all" 
                  ? "bg-primary text-primary-foreground" 
                  : "bg-secondary hover:bg-secondary/80"
              )}
            >
              Tüm Yetenekler
            </button>
            
            <button
              onClick={() => setActiveCategory("frontend")}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-medium transition-colors",
                activeCategory === "frontend" 
                  ? "bg-primary text-primary-foreground" 
                  : "bg-secondary hover:bg-secondary/80"
              )}
            >
              Frontend
            </button>
            
            <button
              onClick={() => setActiveCategory("backend")}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-medium transition-colors",
                activeCategory === "backend" 
                  ? "bg-primary text-primary-foreground" 
                  : "bg-secondary hover:bg-secondary/80"
              )}
            >
              Backend
            </button>
            
            <button
              onClick={() => setActiveCategory("design")}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-medium transition-colors",
                activeCategory === "design" 
                  ? "bg-primary text-primary-foreground" 
                  : "bg-secondary hover:bg-secondary/80"
              )}
            >
              Tasarım
            </button>
            
            <button
              onClick={() => setActiveCategory("tools")}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-medium transition-colors",
                activeCategory === "tools" 
                  ? "bg-primary text-primary-foreground" 
                  : "bg-secondary hover:bg-secondary/80"
              )}
            >
              Araçlar
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {filteredSkills.map((skill) => (
              <div key={skill.name} className="bg-card rounded-xl p-5 shadow-sm border border-border">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <span className="p-1.5 rounded-md bg-primary/10 text-primary">
                      {skill.icon}
                    </span>
                    <span className="font-medium">{skill.name}</span>
                  </div>
                  <span className="text-sm font-medium text-muted-foreground">{skill.projectCount} proje</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills; 