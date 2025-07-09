export interface NavigationItem {
  name: string;
  href: string;
  current?: boolean;
}

export interface HeroSection {
  title: string;
  subtitle: string;
  description: string;
  ctaText: string;
  ctaHref: string;
  backgroundImage: string;
}

export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
  social: {
    twitter?: string;
    linkedin?: string;
    github?: string;
  };
}

export interface ContactInfo {
  address: string;
  phone: string;
  email: string;
  hours: string;
}