import type { InviteConfig } from './types';

// ─── Invitation Configuration ──────────────────────────────────────
// This is the ONLY file a developer needs to edit to create a new
// invitation. Add, remove, or reorder sections as needed.
// All strings come from the i18n files — this file only has data/props.

export const inviteConfig: InviteConfig = {
  // ── Page metadata ──
  meta: {
    title: 'Anaya Valentina\'s Quinceañera',
    description: 'Please join us to celebrate Anaya Valentina\'s Quinceañera',
    ogImage: '/og.jpg',
    favicon: '/favicon.svg',
  },

  // ── Default language ──
  locale: 'en',

  // ── Background music ──
  music: {
    enabled: true,
    src: '/music/selena.mp3', // place your audio file here
    autoplay: true,
  },

  // ── Sections (rendered in order) ──
  sections: [
    {
      id: 'hero',
      component: 'HeroSection',
      props: {
        backgroundImage: '/images/hero.jpg',
        showCountdown: true,
        overlayOpacity: 0.6,
        dateBlock: {
          dayOfWeek: 'Sunday',
          time: '4:00 PM',
          day: '02',
          month: 'August',
          year: '2026',
        },
      },
    },
    {
      id: 'countdown',
      component: 'CountdownSection',
      props: {
        targetDate: '2026-08-02T16:00:00-06:00',
      },
    },
    {
      id: 'details',
      component: 'EventDetailsSection',
      props: {
        date: '2026-08-02',
        ceremony: {
          venue: 'Ceremony',
          address: '',
          time: '4:00 PM',
          mapUrl: '',
        },
        cocktail: {
          time: '5:30 PM - 6:30 PM',
        },
        reception: {
          venue: 'Cielo at Castle Pines',
          address: '485 W. Happy Canyon Rd. Castle Rock, CO. 80108',
          time: '6:00 PM - 11:00 PM',
          mapUrl: 'https://www.google.com/maps/place/Cielo+at+Castle+Pines/@39.43096,-104.897841,17z/data=!3m1!4b1!4m6!3m5!1s0x876c9bd402e13f9b:0xd9fee3e367b20284!8m2!3d39.43096!4d-104.897841!16s%2Fg%2F1jkxvy8vj?entry=ttu&g_ep=EgoyMDI2MDUyMC4wIKXMDSoASAFQAw%3D%3D',
        },
        showMap: true,
        embedMapUrl: 'https://maps.google.com/maps?q=Cielo+at+Castle+Pines&t=&z=15&ie=UTF8&iwloc=&output=embed',
        embedMapActionUrl: 'https://www.google.com/maps/place/Cielo+at+Castle+Pines/@39.43096,-104.897841,17z/data=!3m1!4b1!4m6!3m5!1s0x876c9bd402e13f9b:0xd9fee3e367b20284!8m2!3d39.43096!4d-104.897841!16s%2Fg%2F1jkxvy8vj?entry=ttu&g_ep=EgoyMDI2MDUyMC4wIKXMDSoASAFQAw%3D%3D',
      },
    },

    // {
    //   id: 'dresscode',
    //   component: 'DressCodeSection',
    //   props: {
    //     palette: ['#C1121F', '#D4AF37', '#D8A7B1', '#FFFFFF'],
    //   },
    // },
    {
      id: 'gallery',
      component: 'GallerySection',
      props: {
        images: [
          { src: '/images/gallery-4.mp4', alt: 'Foto 1', type: 'video' },
          { src: '/images/gallery-1.jpeg', alt: 'Foto 1' },
          { src: '/images/gallery-2.jpeg', alt: 'Foto 2' },
          { src: '/images/gallery-3.jpeg', alt: 'Foto 3' },
        ],
        columns: 3,
      },
    },
    {
      id: 'gifts',
      component: 'GiftRegistrySection',
      props: {
        showBankDetails: false,
      },
    },
    {
      id: 'rsvp',
      component: 'RSVPSection',
      props: {
        whatsappNumber: '17202534260',
        maxGuests: 3,
      },
    },
    {
      id: 'footer',
      component: 'FooterSection',
      props: {
        showCredits: true,
      },
    },
  ],
};
