// ─── Spanish Strings ───────────────────────────────────────────────
// Default locale for XV Años invitations.
// Keys are organized by section ID matching inviteConfig.sections.

export const es = {
  // ── Global ──
  global: {
    langToggle: 'English',
    loading: 'Cargando...',
  },

  // ── Hero ──
  hero: {
    preTitle: 'Por favor acompáñanos a celebrar',
    title: "Anaya Valentina's",
    name: 'Quinceañera',
    invitation: 'Con la bendición de Dios y el amor de mi familia, te invito a celebrar mis 15 años, un día que marca el comienzo de una nueva etapa en mi vida.',
    scrollHint: 'Let’s get the vibe check. Hit the music',
  },

  // ── Event Details ──
  details: {
    sectionTitle: 'Programa',
    dateLabel: 'Fecha',
    ceremonyTitle: 'Ceremonia',
    receptionTitle: 'Cena y Baile',
    timeLabel: 'Hora',
    venueLabel: 'Lugar',
    addressLabel: 'Dirección',
    mapButton: 'Llévame ahí',
    dateFormatted: 'Domingo, 02 de Agosto de 2026',
  },

  // ── Countdown ──
  countdown: {
    sectionTitle: 'Cuenta Regresiva',
    subtitle: 'Hay momentos inolvidables que se atesoran en el corazón para siempre, por esta razón quiero que compartas este día tan especial conmigo',
    days: 'Días',
    hours: 'Horas',
    minutes: 'Minutos',
    seconds: 'Segundos',
    eventPassed: '¡El gran día ha llegado!',
  },

  // ── Dress Code ──
  dresscode: {
    sectionTitle: 'Código de Vestimenta',
    subtitle: 'Formal',
    description: 'Te pedimos amablemente que tu vestimenta sea acorde a la siguiente paleta de colores.',
    note: 'Por favor evita vestir de blanco.',
  },

  // ── Gallery ──
  gallery: {
    sectionTitle: 'Comparte el Amor',
    subtitle: '¡Usa nuestro hashtag de Princesa para compartir tus momentos favoritos en las redes sociales! #Vale2026XV',
  },

  // ── Gifts ──
  gifts: {
    sectionTitle: 'Regalos',
    subtitle: 'Tu presencia y amor son los mejores regalos de todos. Para aquellos que deseen dar un pequeño detalle, el árbol de dinero es muy apreciado',
    bankTitle: 'Árbol de Dinero',
    bankLabel: 'Banco',
    clabeLabel: 'CLABE',
    beneficiaryLabel: 'Beneficiario',
    copyButton: 'Copiar',
    copied: '¡Copiado!',
    registryButton: 'Ver mesa de regalos',
  },

  // ── RSVP ──
  rsvp: {
    sectionTitle: 'Confirma tu Asistencia',
    subtitle: 'Por favor confirma tu asistencia antes del 15 de Junio',
    nameLabel: 'Tu nombre',
    namePlaceholder: 'Nombre completo',
    guestsLabel: 'Número de invitados',
    messageLabel: 'Mensaje (opcional)',
    messagePlaceholder: 'Escribe un mensaje...',
    confirmButton: 'Confirmar Asistencia',
    declineButton: 'No podré asistir',
    whatsappConfirm: '¡Hola! Confirmo mi asistencia a los XV Años de Anaya Valentina 🎉\n\nNombre: {name}\nInvitados: {guests}\n{message}',
    whatsappDecline: 'Hola, lamentablemente no podré asistir a los XV Años de Anaya Valentina 😔\n\nNombre: {name}\n{message}',
    noUrlMessage: 'Para poder confirmar tu asistencia, por favor utiliza tu enlace de invitación personalizado.',
  },

  // ── Footer ──
  footer: {
    message: '¡Nos vemos pronto!',
    name: 'Anaya Valentina Padilla',
    credits: 'Padres: Olga Garcia & Jose Padilla | Padrinos: Claudia & Jose Ursua',
    year: '2026',
  },

  // ── Music Player ──
  music: {
    play: 'Reproducir música',
    pause: 'Pausar música',
  },
};

export type LocaleStrings = typeof es;
