// ─── Section Configuration Types ───────────────────────────────────
// Every section in the invite is described by one of these config objects.
// The dev adds/removes/reorders entries in inviteConfig.ts — components
// stay untouched.

export interface MetaConfig {
  title: string;
  description: string;
  ogImage: string;
  favicon: string;
}

export interface HeroProps {
  backgroundImage: string;
  showCountdown: boolean;
  overlayOpacity?: number;
  dateBlock?: {
    dayOfWeek: string;
    time: string;
    day: string;
    month: string;
    year: string;
  };
}

export interface EventDetailsProps {
  ceremony: {
    venue: string;
    address: string;
    time: string;
    mapUrl?: string;
  };
  cocktail?: {
    venue?: string;
    address?: string;
    time: string;
    mapUrl?: string;
  };
  reception: {
    venue: string;
    address: string;
    time: string;
    mapUrl?: string;
  };
  date: string;
  showMap: boolean;
  embedMapUrl?: string;
  embedMapActionUrl?: string;
}

export interface CountdownProps {
  targetDate: string; // ISO 8601
}

export interface DressCodeProps {
  palette: string[];
}

export interface GalleryProps {
  images: { src: string; alt: string; type?: 'image' | 'video' }[];
  columns?: number;
}

export interface GiftRegistryProps {
  registryUrl?: string;
  showBankDetails?: boolean;
  bankDetails?: {
    bank: string;
    clabe: string;
    beneficiary: string;
  };
}

export interface RSVPProps {
  whatsappNumber: string; // international format, no +
  maxGuests?: number;
}

export interface FooterProps {
  showCredits?: boolean;
}

export interface MusicConfig {
  enabled: boolean;
  src: string; // path to audio file in /public
  autoplay: boolean;
}

// ─── Section discriminated union ───────────────────────────────────

export type SectionConfig =
  | { id: string; component: 'HeroSection'; props: HeroProps }
  | { id: string; component: 'EventDetailsSection'; props: EventDetailsProps }
  | { id: string; component: 'CountdownSection'; props: CountdownProps }
  | { id: string; component: 'DressCodeSection'; props: DressCodeProps }
  | { id: string; component: 'GallerySection'; props: GalleryProps }
  | { id: string; component: 'GiftRegistrySection'; props: GiftRegistryProps }
  | { id: string; component: 'RSVPSection'; props: RSVPProps }
  | { id: string; component: 'FooterSection'; props: FooterProps };

export interface InviteConfig {
  meta: MetaConfig;
  locale: 'es' | 'en';
  music: MusicConfig;
  sections: SectionConfig[];
}
