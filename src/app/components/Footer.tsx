'use client'

import { useEffect, useState } from "react";
import { Github, Linkedin, Mail, Twitter, Instagram, MessageSquare } from "lucide-react";
import { API_URLS } from '@/constants/api';

type SocialLinks = {
  github: string
  linkedin: string
  instagram: string
  email: string
  whatsapp: string
  twitter: string
}

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [social, setSocial] = useState<SocialLinks | null>(null);
  
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const fetchData = async () => {
        try {
          const response = await fetch(API_URLS.CONTENT);
          const data = await response.json();
          setSocial(data.social);
        } catch (error) {
          console.error('Sosyal medya verileri çekilemedi:', error);
        }
      };
      
      fetchData();
    }
  }, []);
  
  const socialLinks = social ? [
    { 
      name: "GitHub",
      icon: Github,
      url: social.github
    },
    { 
      name: "LinkedIn",
      icon: Linkedin,
      url: social.linkedin
    },
    { 
      name: "Instagram",
      icon: Instagram,
      url: social.instagram
    },
    { 
      name: "Twitter",
      icon: Twitter,
      url: social.twitter !== "javascript:;" ? social.twitter : null
    },
    { 
      name: "Email",
      icon: Mail,
      url: `mailto:${social.email}`
    },
    {
      name: "WhatsApp",
      icon: MessageSquare,
      url: `https://wa.me/${social.whatsapp}`
    }
  ].filter(link => link.url !== null) : [];

  return (
    <footer className="py-12 px-6 md:px-12 bg-secondary/50 border-t border-border">
      <div className="container mx-auto max-w-5xl">
        <div className="flex flex-col items-center justify-center">
          <div className="flex items-center justify-center space-x-4 mb-6">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url as string}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 rounded-full bg-background hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label={link.name}
              >
                <link.icon size={20} />
              </a>
            ))}
          </div>
          
          <div className="text-center">
            <p className="text-sm text-muted-foreground">
              © {currentYear} Haktan Tekin
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 