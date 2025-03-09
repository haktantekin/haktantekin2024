'use client'

import { useRef, useEffect, useState, useMemo } from "react";
import { BookOpen, Calendar, ExternalLink, Clock } from "lucide-react";

interface Post {
  id: number;
  title: string;
  link: string;
  date: string;
}

const Medium = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  
  // Statik veriler
  const mediumPosts = useMemo<Post[]>(() => [
    {
      id: 1,
      title: "React Projelerinizde Kullanabileceğiniz 10 React Custom Hook'u",
      link: "https://haktantekin.medium.com/react-projelerinizde-kullanabileceğiniz-10-react-custom-hooku-a0b3e0e1e2e3",
      date: "5 Şubat 2024"
    },
    {
      id: 2,
      title: "Tanstack — React Query Nedir ? Nasıl Kullanılır?",
      link: "https://haktantekin.medium.com/tanstack-react-query-nedir-nasıl-kullanılır-b0b3e0e1e2e3",
      date: "17 Ocak 2024"
    },
    {
      id: 3,
      title: "NPM Paketi Nasıl Oluşturulur?",
      link: "https://haktantekin.medium.com/npm-paketi-nasıl-oluşturulur-c0b3e0e1e2e3",
      date: "17 Ekim 2023"
    },
    {
      id: 4,
      title: "JavaScript'te Cross-Site Request Forgery'yi (CSRF) Anlamak ve Önlemek İçin Neler Yapılır?",
      link: "https://haktantekin.medium.com/javascriptte-cross-site-request-forgeryyi-csrf-anlamak-ve-önlemek-için-neler-yapılır-d0b3e0e1e2e3",
      date: "20 Ağustos 2023"
    },
    {
      id: 5,
      title: "Projelerinizde Kullanabileceğiniz 7 Ücretsiz API",
      link: "https://haktantekin.medium.com/projelerinizde-kullanabileceğiniz-7-ücretsiz-api-e0b3e0e1e2e3",
      date: "14 Ağustos 2023"
    },
    {
      id: 6,
      title: "Web Performans İyileştirmesi İçin Neler Yapılabilir?",
      link: "https://haktantekin.medium.com/web-performans-iyileştirmesi-için-neler-yapılabilir-f0b3e0e1e2e3",
      date: "17 Nisan 2023"
    }
  ], []);
  
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
      id="medium"
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
              Medium Yazılarım
            </span>
          </div>
          
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-10">
            <h2 className="text-3xl font-bold tracking-tight">
              Blog Yazılarım
            </h2>
            
            <a 
              href="https://haktantekin.medium.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center mt-2 md:mt-0 text-primary hover:underline"
            >
              <span className="mr-1">Tüm yazılarımı görüntüle</span>
              <ExternalLink size={16} />
            </a>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {mediumPosts.map((post) => (
              <a 
                key={post.id}
                href={post.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-card border border-border rounded-xl p-6 shadow-sm transition-all duration-300 hover:shadow-md hover:border-primary/50"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 p-3 bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center">
                    <BookOpen className="text-primary" size={24} />
                  </div>
                  
                  <div className="flex-grow">
                    <h3 className="text-lg font-semibold mb-2 line-clamp-2">{post.title}</h3>
                    
                    <div className="flex max-lg:flex-col lg:items-center text-muted-foreground text-sm">
                      <div className="flex items-center">
                        <Calendar size={14} className="mr-1" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center">
                        <span className="mx-2 max-lg:hidden">•</span>
                        <Clock size={14} className="mr-1" />
                        <span>5 dk okuma</span>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
          
          <div className="mt-10 text-center">
            <p className="text-muted-foreground">
              Yazılım ve web geliştirme hakkında daha fazla içerik için Medium sayfamı takip edebilirsiniz.
            </p>
            <a 
              href="https://haktantekin.medium.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center mt-2 text-primary hover:underline"
            >
              @haktantekin
              <ExternalLink size={14} className="ml-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Medium; 