'use client'

import { useEffect, useState } from "react";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section 
      id="home" 
      className="relative min-h-[calc(100vh-70px)] flex items-center justify-center px-6 md:px-12 overflow-hidden"
    >
      <div 
        className={`container mx-auto max-w-5xl transition-all duration-1000  ${
          isVisible ? 'opacity-100' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="flex flex-col gap-6 md:gap-8">
          <p className="font-mono text-sm tracking-wider">Merhaba, ben</p>
          
          <h1 className="text-4xl md:text-7xl font-bold tracking-tight">
            <span className="block">Haktan Tekin</span>
            <span className="block mt-2 text-primary/80">Senior Frontend Developer</span>
          </h1>
          
          <p className="max-w-xl text-lg text-muted-foreground">
            2010 yılında başladığım kariyerime <strong>Senior Frontend Developer</strong> olarak devam ediyorum. <strong>7</strong> farklı şirket ve <strong>30</strong>&apos;dan fazla projede çalışma fırsatı buldum.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <a
              href="#experience"
              className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-c-dark text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              Deneyimlerim
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-6 py-3 rounded-md border border-input bg-background hover:bg-secondary transition-colors"
            >
              İletişim
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 