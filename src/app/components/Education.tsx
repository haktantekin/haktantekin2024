'use client'

import { useRef, useEffect, useState } from "react";
import { GraduationCap, Calendar, School, MapPin } from "lucide-react";

interface Education {
  id: number;
  school: string;
  degree: string;
  field: string;
  location: string;
  duration: string;
  description?: string;
}

const Education = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  
  const educationList: Education[] = [
    {
      id: 1,
      school: "Anadolu Üniversitesi",
      degree: "Ön Lisans - Uzaktan Eğitim",
      field: "Turizm ve Seyahat Hizmetleri",
      location: "İstanbul",
      duration: "2019 - 2021",
      description: "AÖF üzerinden uzaktan eğitim alarak ön lisans derecemi tamamladım."
    },
    {
      id: 2,
      school: "Fatih Üniversitesi",
      degree: "Ön Lisans - Uzaktan Eğitim",
      field: "Bilgisayar Programcılığı",
      location: "İstanbul",
      duration: "2010 - 2012",
      description: "Bilgisayar Programcılığı alanında ön lisans eğitimimi tamamladım. *Eğitim harici kurum ile alakam yoktur."
    },
    {
      id: 3,
      school: "Şişli Meslek Lisesi",
      degree: "Lise",
      field: "Web Tasarım ve Programlama",
      location: "İstanbul",
      duration: "2006 - 2010",
      description: "Web Tasarım ve Programlama bölümünde lise eğitimimi tamamladım."
    }
  ];
  
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
      id="education"
      ref={sectionRef}
      className="py-24 px-6 md:px-12 bg-background"
    >
      <div className="container mx-auto max-w-5xl">
        <div
          className={`w-full transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          }`}
        >
          <div className="inline-block mb-6">
            <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-secondary">
              Eğitim Geçmişim
            </span>
          </div>
          
          <h2 className="text-3xl font-bold tracking-tight mb-5 lg:mb-10">
            Eğitimim
          </h2>
          
          <div className="space-y-6">
            {educationList.map((edu) => (
              <div 
                key={edu.id}
                className="bg-card border border-border rounded-xl p-6 shadow-sm transition-all duration-300 hover:shadow-md"
              >
                <div className="flex flex-col md:flex-row md:items-start gap-4">
                  <div className="flex-shrink-0 p-3 bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center">
                    <GraduationCap className="text-primary" size={24} />
                  </div>
                  
                  <div className="flex-grow">
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                      <h3 className="text-xl font-semibold">{edu.field} </h3>
                      <div className="flex items-center text-muted-foreground text-sm mt-1 md:mt-0">
                        <Calendar size={16} className="mr-1" />
                        <span>{edu.duration}</span>
                      </div>
                    </div>
                    
                    <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6 mb-3">
                      <div className="flex items-center text-primary">
                        <School size={16} className="mr-1" />
                        <span className="font-medium">{edu.school}</span>
                      </div>
                      
                      <div className="flex items-center text-muted-foreground">
                        <MapPin size={16} className="mr-1" />
                        <span>{edu.location}</span>
                      </div>
                    </div>
                    
                    {edu.description && (
                      <p className="text-muted-foreground">{edu.description}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education; 