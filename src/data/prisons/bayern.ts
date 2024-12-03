import { Prison } from '../../types/prison';

export const bayern: Prison[] = [
  {
    id: 'jva-stadelheim',
    name: 'JVA München-Stadelheim',
    location: {
      lat: 48.1086,
      lng: 11.5428
    },
    inmates: 1400,
    capacity: 1500,
    type: 'gemischt',
    securityLevel: 'hoch',
    description: 'Die JVA München-Stadelheim ist eine der größten Justizvollzugsanstalten in Deutschland.',
    imageUrl: 'https://images.unsplash.com/photo-1567595747763-a3ba4b06f8d6?auto=format&fit=crop&q=80',
    contact: {
      address: 'Stadelheimer Straße 12, 81549 München',
      phone: '+49 89 69320-0',
      email: 'poststelle@jva-m.bayern.de',
      website: 'https://www.justiz.bayern.de/justizvollzug/anstalten/jva-muenchen/'
    },
    facilities: [
      'Krankenhaus',
      'Werkstätten',
      'Sporthalle',
      'Kirche',
      'Bildungszentrum'
    ],
    visitingHours: [
      {
        day: 'Montag',
        times: ['08:00 - 15:00']
      },
      {
        day: 'Mittwoch',
        times: ['08:00 - 15:00']
      },
      {
        day: 'Freitag',
        times: ['08:00 - 15:00']
      }
    ],
    visitingRules: [
      'Voranmeldung erforderlich',
      'Ausweispflicht',
      'Maximale Besuchsdauer: 1 Stunde'
    ]
  },
  {
    id: 'jva-straubing',
    name: 'JVA Straubing',
    location: {
      lat: 48.8816,
      lng: 12.5724
    },
    inmates: 780,
    capacity: 850,
    type: 'männlich',
    securityLevel: 'hoch',
    description: 'Die JVA Straubing ist eine Justizvollzugsanstalt für männliche Strafgefangene mit langen Haftstrafen.',
    imageUrl: 'https://images.unsplash.com/photo-1590420485404-f86d22b8abf8?auto=format&fit=crop&q=80',
    contact: {
      address: 'Äußere Passauer Straße 90, 94315 Straubing',
      phone: '+49 9421 8630',
      email: 'poststelle@jva-sr.bayern.de',
      website: 'https://www.justiz.bayern.de/justizvollzug/anstalten/jva-straubing/'
    },
    facilities: [
      'Werkstätten',
      'Sporthalle',
      'Bibliothek',
      'Therapieräume'
    ],
    visitingHours: [
      {
        day: 'Dienstag',
        times: ['08:30 - 15:30']
      },
      {
        day: 'Donnerstag',
        times: ['08:30 - 15:30']
      }
    ],
    visitingRules: [
      'Voranmeldung erforderlich',
      'Ausweispflicht',
      'Sicherheitsüberprüfung'
    ]
  }
];