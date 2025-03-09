'use client'

import { useRef, useEffect, useState } from "react";
import { BriefcaseBusiness, Calendar, ExternalLink } from "lucide-react";
import Link from "next/link";

interface WorkExperience {
  id: number;
  company: string;
  position: string;
  duration: string;
  description: string;
  achievements: string[];
  link?: string;
  tech?: string;
  projects?: string[];
}

const MyWork = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  
  const workExperiences: WorkExperience[] = [
    {
      id: 1,
      company: "Hayat Finans",
      position: "Senior Frontend Developer",
      duration: "05.2024 - halen",
      description: "Finans sektöründe faaliyet gösteren Hayatfinans.com'da çalışıyorum.",
      achievements: [
        "Hayat Finans, bankacılık sektöründeki ilk deneyimimdir. Kariyerimde eksik olduğunu düşündüğüm bu alana yönelik bir teklif aldığımda değerlendirmek istedim. ",
        "Engelli ilanı üzerinden kabul edilerek bu şirkete katıldım. ",
        "Hayat Finans kurumsal site, Bayi Finansmanı ve Hayat Varlık Kiralama projelerinde görev alıyorum. React Query ve React Mantine ile aktif olarak çalışmaktayım."
      ],
      link: "https://hayatfinans.com",
      tech: "react, react query, axios, nextjs, tailwindcss, flex/grid, npm, git, seo optimizasyonu, figma, mvc",
      projects: ["hayatfinans.com.tr"]
    },
    {
      id: 2,
      company: "Hangikredi",
      position: "Senior Frontend Developer",
      duration: "02/2024 - 05/2024",
      description: "Türkiye\'nin en büyük karşılaştırmalı finansal ürünler sunan şirketi.",
      achievements: [
        "Hangikredi şirketinde, sıfır faizli fırsatlar sayfasını SSR ve CSR bileşenleriyle birlikte Next.js, React ve TailwindCSS kullanarak baştan yazdım.",
        "Backend'den aldığım API verilerini TypeScript ile uyumlu bir şekilde kullanarak sayfayı oluşturdum.",
        "Ayrıca, istatistiklerin takibi için Google Tag Manager ve Analytics ayarlamalarını gerçekleştirdim. Bankadan teklif alınca da ayrılma kararı aldım."
      ],
      link: "https://hangikredi.com",
      tech: "react, typescript, nextjs, axios, tailwindcss, flex/grid, scrum, npm, git, seo optimizasyonu, figma",
      projects: ["hangikredi.com"]
    },
    {
      id: 3,
      company: "Encazip",
      position: "Senior Frontend Developer",
      duration: "04/2022 - 02/2024",
      description: "encazip.com elektrik fiyatları karşılaştırma, kredi, sigorta ve telekomunikasyon alanlarında satış yapan bir şirket.",
      achievements: [
        "Encazip'te, site performansını artırmak amacıyla Ant Design ve styled-components'tan TailwindCSS'e geçiş sürecini yönettim.",
        "styled-components paketini kaldırarak tüm bileşenleri TypeScript ve Next.js kullanarak yeniden yazdım. ",
        "Bileşenlerde genellikle CSS grid yapısını kullandım ve Google Lighthouse kriterlerini göz önünde bulundurarak SEO iyileştirmeleri gerçekleştirdim."
      ],
      link: "https://encazip.com",
      tech: "react, typescript, nextjs, axios, styled-components, tailwindcss, flex/grid, scrum, npm, git, seo optimizasyonu, figma",
      projects: ["encazip.com"]
    },
    {
      id: 4,
      company: "Akinon",
      position: "Senior Frontend Developer",
      duration: "01/2021 - 04/2022",
      description: "Akinon'da, Türkiye'nin en büyük e-ticaret şirketleriyle çalışma fırsatı yakaladım ve Masterpass entegrasyonları gerçekleştirdim.",
      achievements: [
        "jQuery kullanılan projelerde ağırlıklı olarak bakım güncellemeleri ve yeniden tasarım süreçlerinde görev aldım.",
        "Bir yılın sonunda, scrum yapısıyla çalıştığımız şirkette en yüksek puanı alan geliştirici oldum.",
        "Daha güncel teknolojilerle çalışmak ve kendimi geliştirmek adına Encazip şirketine geçiş yaptım."
      ],
      link: "https://akinon.com",
      tech: "javascript / jquery, bootstrap, sass, flex/grid, scrum / kanban, jira, npm, git, seo optimizasyonu, zeplin",
      projects: ["derimod.com.tr", "desa.com.tr", "lacoste.com.tr", "superstep.com.tr", "kigili.com", "gap.com.tr", "gant.com.tr", "marksandspencer.com.tr", "salomon.com.tr"]
    },
    {
      id: 5,
      company: "Nuevo Softwarehouse",
      position: "Senior Frontend Developer",
      duration: "05/2019 - 09/2020",
      description: "Türkiye Bankalar Birliği başta olmak üzere 4 projede çalıştım.",
      achievements: [
        "Türkiye Bankalar Birliği web sitesinin frontend dökümünü ilk olarak Bootstrap ve jQuery kullanarak gerçekleştirdim. ",
        "Daha sonra müşteriden gelen .NET kodları üzerine önyüzü giydirdim.",
        "Bu proje dışında, Kızılay gibi devlet projelerinde de görev aldım.",
        "Ayrıca, Gastro Club projesine bakım hizmetleri sundum."
      ],
      link: "https://nuevo.com.tr",
      tech: "javascript, jquery, bootstrap, sass, flexgrid, npm, git, seo optimizasyonu, zeplin",
      projects: ["tbb.org.tr", "gastroclub.com.tr", "riskmerkezi.org", "trlibor.org", "Kızılay (Internal)"]
    },
    {
      id: 6,
      company: "Magiclick",
      position: "Frontend Developer",
      duration: "05/2017 - 07/2018",
      description: "Yapı Kredi Bankası ve onun altındaki beş kurumsal sitenin bakımını üstlendim.",
      achievements: [
        "Kariyerimde TFS'yi kullandığım tek şirket burasıydı. ",
        "Ayrıca, kısa bir süreliğine Avrasya Tüneli web sitesinde LESS teknolojisini ilk kez deneyimlediğim şirkettir."
      ],
      link: "https://yapikredi.com.tr",
      tech: "javascript / jquery, bootstrap, less, tfs, seo optimizasyonu, photoshop",
      projects: ["yapikredi.com.tr", "worldcard.com.tr"]
    },
    {
      id: 7,
      company: "Dreambox",
      position: "Frontend Developer",
      duration: "08/2010 - 06/2017",
      description: "dream-box.tv lise stajı yaptığım ve ardından 7 yıl çalıştığım ilk şirketim.",
      achievements: [
        "dream-box.tv şirketinde stajyer olarak başladım ve ilk iki yıl boyunca MSSQL ortamına içerik girişi yaptım.",
        "Ardından, sonraki iki yılda Pure CSS ve jQuery kullanarak projelerin arayüz geliştirme süreçlerinde yer aldım.",
        "Son üç yıl boyunca ise C# alanında destek vermeye başladım ve büyük holding ile kültür sanat siteleriyle çalışma fırsatı buldum."
      ],
      link: "https://dream-box.tv",
      tech: "javascript / jquery, c# entegrasyonu, seo optimizasyonu, photoshop",
      projects: ["borusan.com.tr", "eczacibasi.com.tr", "erenholding.com.tr", "borusanenbwenerji.com.tr"]
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
      id="experience"
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
              Kariyer Yolculuğum
            </span>
          </div>
          
          <h2 className="text-3xl font-bold tracking-tight mb-5 lg:mb-10">
            İş Deneyimlerim
          </h2>
          
          <div className="space-y-8">
            {workExperiences.map((experience) => (
              <div 
                key={experience.id}
                className={`bg-card border border-border rounded-xl p-6 shadow-sm transition-all duration-300 hover:shadow-md`}
              >
                <div className="flex flex-col md:flex-row md:items-start gap-4">
                  <div className="flex-shrink-0 p-3 bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center">
                    <BriefcaseBusiness className="text-primary" size={24} />
                  </div>
                  
                  <div className="flex-grow">
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                      <h3 className="text-xl font-semibold">{experience.position}</h3>
                      <div className="flex items-center text-muted-foreground text-sm mt-1 md:mt-0">
                        <Calendar size={16} className="mr-1" />
                        <span>{experience.duration}</span>
                      </div>
                    </div>
                    
                    <p className="text-lg font-medium text-primary mt-4 mb-3">{experience.company}</p>
                    
                    <p className="text-muted-foreground mb-4">{experience.description}</p>

                    <h4 className="font-medium mb-2">Teknik:</h4>
                    <ul className="list-disc pl-5 space-y-1 mb-4">
                      {experience.achievements.map((achievement, i) => (
                        <li key={i} className="text-muted-foreground">{achievement}</li>
                      ))}
                    </ul>
                    
                    {experience.link && (
                      <Link
                        href={experience.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-sm text-primary hover: mb-4"
                      >
                        <span className="mr-1">Şirketi ziyaret et</span>
                        <ExternalLink size={14} />
                      </Link>
                    )}
                    
                    {experience.tech && (
                      <div className="mb-4">
                        <div className="flex items-center gap-1 mb-2">
                          <h4 className="font-medium">Kullanılan Teknolojiler:</h4>
                        </div>
                        <p className="text-sm text-muted-foreground">{experience.tech}</p>
                      </div>
                    )}
                    
                    {experience.projects && experience.projects.length > 0 && (
                      <div className="mb-4">
                        <div className="flex items-center gap-1 mb-2">
                          <h4 className="font-medium">Projeler:</h4>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {experience.projects.map((project, i) => (
                            <span 
                              key={i} 
                              className="inline-block px-2 py-1 text-xs bg-secondary/50 rounded-md text-muted-foreground"
                            >
                              {project}
                            </span>
                          ))}
                        </div>
                      </div>
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

export default MyWork; 