import { FC } from 'react'
import Link from 'next/link'
import { Tooltip } from '@mantine/core'

interface SocialLinkProps {
  href: string
  icon: React.ComponentType<{ size: number }>
  label: string
  isBlank?: boolean
  variant?: 'navigation' | 'hero'
  size?: number
}

export const SocialLink: FC<SocialLinkProps> = ({ 
  href, 
  icon: Icon, 
  label, 
  isBlank = true,
  variant = 'navigation',
  size = 20
}) => {
  const isNavigation = variant === 'navigation';
  
  const linkContent = (
    <Link 
      href={href} 
      target={isBlank ? "_blank" : undefined}
      className={`transition-colors relative group flex items-center justify-center ${
        isNavigation 
          ? 'text-c-darkGray hover:text-c-darkGray md:w-full' 
          : 'text-c-dark hover:text-c-dark'
      }`}
    >
      <Icon size={size} />
    </Link>
  );
  
  if (isNavigation) {
    return (
      <Tooltip
        label={label}
        position="right"
        withArrow
        arrowSize={6}
        classNames={{
          tooltip: 'bg-c-darkGray text-white text-sm rounded px-2 py-1',
        }}
        className="hidden md:block"
      >
        {linkContent}
      </Tooltip>
    );
  }
  
  return linkContent;
} 