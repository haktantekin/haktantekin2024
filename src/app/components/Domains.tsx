'use client'

import { useRef, useEffect, useState } from "react";
import { Globe, Calendar, ExternalLink, Tag } from "lucide-react";

interface Domain {
  id: number;
  name: string;
  purchaseDate: string;
  expiryDate: string;
  category: string;
  description?: string;
  forSale?: boolean;
  price?: string;
}

const Domains = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  
  const domainList: Domain[] = [
    {
      id: 1,
      name: "haktantekin.com",
      purchaseDate: "2014",
      expiryDate: "2029",
      category: "Kişisel",
      description: "Kişisel web sitem.",
      forSale: false
    },
    {
      id: 2,
      name: "diniresimler.com",
      purchaseDate: "2018",
      expiryDate: "2028",
      category: "Dini",
      description: "Wordpress ile yazdığım web ve app projem.",
      forSale: false
    },
    {
      id: 3,
      name: "otomatiksaat.com",
      purchaseDate: "2024",
      expiryDate: "2025",
      category: "",
      description: "",
      forSale: false,
      price: "1500€"
    },
    {
      id: 4,
      name: "canlikonum.com",
      purchaseDate: "2025",
      expiryDate: "2026",
      category: "",
      description: "",
      forSale: false,
      price: "1500€"
    },
    {
      id: 5,
      name: "aracdegeri.com",
      purchaseDate: "2024",
      expiryDate: "2025",
      category: "",
      description: "",
      forSale: false,
      price: "1500€"
    },
    {
      id: 6,
      name: "zerfe.com",
      purchaseDate: "2024",
      expiryDate: "2025",
      category: "",
      description: "Tesettür e-ticaret için aldığım 5 harfli domain.",
      forSale: false,
      price: "1500€"
    },
    {
      id: 7,
      name: "pikcir.com",
      purchaseDate: "2024",
      expiryDate: "2026",
      category: "",
      description: "",
      forSale: false,
      price: "1500€"
    },
    {
      id: 8,
      name: "titr.net",
      purchaseDate: "2025",
      expiryDate: "2026",
      category: "",
      description: "",
      forSale: false,
      price: "1500€"
    },
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
      id="domains"
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
              Domain Koleksiyonum
            </span>
          </div>
          
          <h2 className="text-3xl font-bold tracking-tight mb-5 lg:mb-10">
            Domain Portföyüm
          </h2>
          
          <p className="text-muted-foreground mb-8">
            Yıllar içinde satın aldığım ve yönettiğim domainler. Bazıları satılık olabilir, ilgileniyorsanız lütfen iletişime geçin.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {domainList.map((domain) => (
              <div 
                key={domain.id}
                className="bg-card border border-border rounded-xl p-6 shadow-sm transition-all duration-300 hover:shadow-md"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 p-3 bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center">
                    <Globe className="text-primary" size={24} />
                  </div>
                  
                  <div className="flex-grow">
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                      <h3 className="text-xl font-semibold">{domain.name}</h3>
                      {domain.forSale && (
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100 mt-1 md:mt-0">
                          <Tag size={12} className="mr-1" />
                          Satılık: {domain.price}
                        </span>
                      )}
                    </div>
                    
                    <div className="flex items-center text-muted-foreground text-sm mb-3">
                      <Calendar size={16} className="mr-1" />
                      <span>{domain.purchaseDate} - {domain.expiryDate}</span>
                    </div>
                    {domain.category && (
                      <div className="mb-2">
                      <span className="inline-block px-2 py-1 text-xs bg-secondary/50 rounded-md text-muted-foreground">
                        {domain.category}
                      </span>
                    </div>
                    )}
              
                    
                    {domain.description && (
                      <p className="text-muted-foreground mb-4">{domain.description}</p>
                    )}
                    
                    <a
                      href={`https://${domain.name}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-sm text-primary hover:underline"
                    >
                      <span className="mr-1">Domaini ziyaret et</span>
                      <ExternalLink size={14} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-10 text-center">
            <p className="text-muted-foreground">
              Domain satın almak veya satmak için benimle iletişime geçebilirsiniz.
            </p>
            <a 
              href="mailto:me@haktantekin.com" 
              className="inline-flex items-center mt-2 text-primary hover:underline"
            >
              me@haktantekin.com
              <ExternalLink size={14} className="ml-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Domains; 