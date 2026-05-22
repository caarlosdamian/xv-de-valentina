import type { SectionConfig } from '../config/types';
import HeroSection from './HeroSection/HeroSection';
import EventDetailsSection from './EventDetailsSection/EventDetailsSection';
import CountdownSection from './CountdownSection/CountdownSection';
import DressCodeSection from './DressCodeSection/DressCodeSection';
import GallerySection from './GallerySection/GallerySection';
import GiftRegistrySection from './GiftRegistrySection/GiftRegistrySection';
import RSVPSection from './RSVPSection/RSVPSection';
import FooterSection from './FooterSection/FooterSection';

// ─── Component registry ────────────────────────────────────────────
// Maps config `component` string → actual React component.
// To add a new section type: 1) create component, 2) add entry here.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const componentMap: Record<string, React.ComponentType<any>> = {
  HeroSection,
  EventDetailsSection,
  CountdownSection,
  DressCodeSection,
  GallerySection,
  GiftRegistrySection,
  RSVPSection,
  FooterSection,
};

interface SectionRendererProps {
  sections: SectionConfig[];
}

export default function SectionRenderer({ sections }: SectionRendererProps) {
  return (
    <>
      {sections.map((section) => {
        const Component = componentMap[section.component];
        if (!Component) {
          console.warn(`Unknown section component: ${section.component}`);
          return null;
        }
        return <Component key={section.id} {...section.props} />;
      })}
    </>
  );
}
