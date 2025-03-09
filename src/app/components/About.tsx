'use client'

import { useRef, useEffect, useState } from "react";
import Link from "next/link";

const About = () => {
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
      id="about"
      ref={sectionRef}
      className="min-h-screen py-24 px-6 md:px-12 flex items-center"
    >
      <div className="container mx-auto max-w-5xl">
        <div
          className={`w-full transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
        >
          <div className="inline-block mb-6">
            <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-secondary">
              Hakkımda
            </span>
          </div>

          <h2 className="text-3xl font-bold tracking-tight mb-6">
            Öğrenmeyi seviyorum, yerinde duran geç kalır.
          </h2>

          <div className="space-y-6 text-muted-foreground max-w-3xl">
            <p>
              <strong>Holding şirketleri, kültür sanat, bankacılık, e-ticaret</strong> ve <strong>dijital bankacılık</strong> gibi çeşitli sektörlerde geniş bir tecrübeye sahibim.
            </p>
            <p>
              Güncel olarak <strong>TailwindCSS</strong>, <strong>React</strong> ve <strong>TypeScript</strong> ile projeler geliştiriyorum ve her geçen gün kendimi daha da ileriye taşıyorum.
            </p>
            <p>
              SEO konusuna özel ilgi duyuyorum; makaleler okuyarak güncel gelişmeleri takip ediyor ve yazdığım kodları sayfa hızı ve SEO kriterlerine uygun şekilde optimize ediyorum.
            </p>
            <p>
              <strong>Engelli</strong> kadrosunda çalışabilirim. Ufak bir yürüme bozukluğum bulunuyor, ancak bu işimi engellememektedir. <strong>%68 rapor</strong> ve İŞKUR kaydım mevcuttur.
            </p>
            <p>
              <Link href="https://diniresimler.com" target="_blank" className="text-primary hover:text-primary/80">diniresimler.com</Link> gibi özel projelerim için Wordpress tema yapımını öğrendim ve kendi temalarımı kodlamaktayım.
            </p>
            <p>
              Cursor, Lovable, Suno, Sora gibi yapay zekaları takip ediyorum. Yetkinliğim olmayan alanlarda kullanıyorum.
            </p>
            <p>
              Sigara kullanmıyorum, önermiyorum.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 