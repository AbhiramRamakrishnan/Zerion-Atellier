import { Instagram, Facebook, Youtube } from 'lucide-react';

const socialLinks = [
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/zerion_atelier/', // TODO: Replace with actual URL
    icon: Instagram,
  },
  {
    name: 'Facebook',
    href: 'https://facebook.com/placeholder', // TODO: Replace with actual URL
    icon: Facebook,
  },
  {
    name: 'YouTube',
    href: 'https://youtube.com/placeholder', // TODO: Replace with actual URL
    icon: Youtube,
  },
  {
    name: 'WhatsApp',
    href: 'https://wa.me/+919746004720', // TODO: Replace with actual number
    icon: null, // Custom SVG below
  },
];

// Custom WhatsApp icon (Lucide doesn't have one)
const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
    <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1" />
  </svg>
);

interface SocialLinksProps {
  className?: string;
  iconSize?: number;
}

const SocialLinks = ({ className = '', iconSize = 20 }: SocialLinksProps) => {
  return (
    <div className={`flex items-center gap-4 ${className}`}>
      {socialLinks.map((social) => {
        const IconComponent = social.icon;
        
        return (
          <a
            key={social.name}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.name}
            className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-sm"
          >
            {IconComponent ? (
              <IconComponent size={iconSize} />
            ) : (
                <WhatsAppIcon className="w-5 h-5" />
            )}
          </a>
        );
      })}
    </div>
  );
};

export default SocialLinks;
