'use client'

import { useRef, useEffect, useState } from "react";
import { Mail, MapPin } from "lucide-react";

const Contact = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  
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
      id="contact"
      ref={sectionRef}
      className="min-h-screen py-24 px-6 md:px-12 flex items-center"
    >
      <div className="container mx-auto max-w-5xl">
        <div className="flex flex-col md:flex-row gap-16">
          <div 
            className={`w-full transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            <div className="inline-block mb-6">
              <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-secondary">
                İletişim
              </span>
            </div>
            
            <h2 className="text-3xl font-bold tracking-tight mb-6">
              Birlikte Çalışalım
            </h2>
            
            <p className="text-muted-foreground mb-8 max-w-3xl">
              Freelance veya tam zamanlı pozisyonları değerlendirebilirim.  <br />
              Birlikte çalışmak isterseniz, bir sorunuz varsa veya sadece merhaba demek isterseniz,
              iletişime geçmekten çekinmeyin.
            </p>
            
            <div className="space-y-8 max-w-3xl">
              <div className="flex items-start gap-4">
                <div className="mt-1 flex items-center justify-center w-10 h-10 rounded-full bg-secondary flex-shrink-0">
                  <Mail size={20} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">Email</h3>
                  <a 
                    href="mailto:me@haktantekin.com" 
                    className="text-muted-foreground hover:text-primary link-underline"
                  >
                    me@haktantekin.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="mt-1 flex items-center justify-center w-10 h-10 rounded-full bg-secondary flex-shrink-0">
                  <MapPin size={20} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">Konum</h3>
                  <p className="text-muted-foreground">İstanbul, Türkiye</p>
                </div>
              </div>
            </div>
            
            <div className="mt-12 flex flex-wrap gap-4">
              <a 
                href="https://github.com/haktantekin" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-md border border-input bg-background hover:bg-secondary transition-colors"
              >
                GitHub
              </a>
              <a 
                href="https://www.linkedin.com/in/haktantekin/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-md border border-input bg-background hover:bg-secondary transition-colors"
              >
                LinkedIn
              </a>
              <a 
                href="https://haktantekin.com/CV/haktantekinCV.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-md bg-c-dark text-primary-foreground hover:bg-c-dark transition-colors"
              >
                CV İndir
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 