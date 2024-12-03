import { Prison } from '../../types/prison';

export const berlin: Prison[] = [
  {
    id: 'jva-tegel',
    name: 'JVA Tegel',
    location: {
      lat: 52.5447,
      lng: 13.2827
    },
    inmates: 850,
    capacity: 898,
    type: 'männlich',
    securityLevel: 'hoch',
    description: 'Die Justizvollzugsanstalt Tegel ist die größte Männerhaftanstalt Deutschlands.',
    imageUrl: 'https://images.unsplash.com/photo-1567595747763-a3ba4b06f8d6?auto=format&fit=crop&q=80',
    contact: {
      address: 'Seidelstraße 39, 13507 Berlin',
      phone: '+49 30 90147-0',
      email: 'poststelle@jvategel.berlin.de',
      website: 'https://www.berlin.de/justizvollzug/anstalten/jva-tegel/'
    },
    facilities: [
      'Werkstätten',
      'Sporthalle',
      'Bibliothek',
      'Medizinische Abteilung',
      'Bildungszentrum'
    ],
    visitingHours: [
      {
        day: 'Montag',
        times: ['09:00 - 12:00', '14:00 - 16:00']
      },
      {
        day: 'Mittwoch',
        times: ['14:00 - 18:00']
      },
      {
        day: 'Samstag',
        times: ['09:00 - 13:00'],
        notes: 'Nur für Familienbesuche'
      }
    ],
    visitingRules: [
      'Besuchsanmeldung mindestens 3 Tage im Voraus',
      'Ausweis erforderlich',
      'Maximale Besuchsdauer: 2 Stunden'
    ]
  },
  {
    id: 'jva-moabit',
    name: 'JVA Moabit',
    location: {
      lat: 52.5275,
      lng: 13.3440
    },
    inmates: 920,
    capacity: 1013,
    type: 'männlich',
    securityLevel: 'hoch',
    description: 'Die JVA Moabit ist eine der bekanntesten Untersuchungshaftanstalten Berlins.',
    imageUrl: 'https://images.unsplash.com/photo-1584292650902-8d0636cf1f4b?auto=format&fit=crop&q=80',
    contact: {
      address: 'Alt-Moabit 12a, 10559 Berlin',
      phone: '+49 30 90140-0',
      email: 'poststelle@jvamoabit.berlin.de',
      website: 'https://www.berlin.de/justizvollzug/anstalten/jva-moabit/'
    },
    facilities: [
      'Krankenstation',
      'Kirche',
      'Bibliothek',
      'Werkstätten',
      'Sporträume'
    ],
    visitingHours: [
      {
        day: 'Dienstag',
        times: ['08:00 - 16:00']
      },
      {
        day: 'Donnerstag',
        times: ['08:00 - 16:00']
      }
    ],
    visitingRules: [
      'Voranmeldung erforderlich',
      'Besuchszeit max. 1 Stunde',
      'Ausweispflicht'
    ]
  },
  {
    id: 'jva-ploetzensee',
    name: 'JVA Plötzensee',
    location: {
      lat: 52.5428,
      lng: 13.3219
    },
    inmates: 580,
    capacity: 640,
    type: 'männlich',
    securityLevel: 'mittel',
    description: 'Die JVA Plötzensee ist eine Justizvollzugsanstalt für männliche Strafgefangene.',
    imageUrl: 'https://images.unsplash.com/photo-1590420485404-f86d22b8abf8?auto=format&fit=crop&q=80',
    contact: {
      address: 'Friedrich-Olbricht-Damm 17, 13627 Berlin',
      phone: '+49 30 90144-0',
      email: 'poststelle@jvaploetzensee.berlin.de',
      website: 'https://www.berlin.de/justizvollzug/anstalten/jva-ploetzensee/'
    },
    facilities: [
      'Werkstätten',
      'Sporthalle',
      'Bibliothek',
      'Freizeiträume'
    ],
    visitingHours: [
      {
        day: 'Montag',
        times: ['08:00 - 15:00']
      },
      {
        day: 'Mittwoch',
        times: ['08:00 - 15:00']
      }
    ],
    visitingRules: [
      'Voranmeldung erforderlich',
      'Ausweispflicht',
      'Keine Wertsachen'
    ]
  }
];