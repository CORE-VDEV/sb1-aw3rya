import { Prison } from '../types/prison';

export const prisons: Prison[] = [
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
    ],
    programs: {
      education: [
        'Hauptschulabschluss',
        'Realschulabschluss',
        'Berufsausbildung im Handwerk',
        'EDV-Grundkurse',
        'Sprachkurse (Deutsch, Englisch)',
        'Alphabetisierungskurse'
      ],
      work: [
        'Schreinerei',
        'Metallwerkstatt',
        'Druckerei',
        'Bäckerei',
        'Gärtnerei',
        'Wäscherei',
        'Gebäudereinigung'
      ],
      rehabilitation: [
        'Anti-Gewalt-Training',
        'Suchtberatung',
        'Soziales Training',
        'Schuldnerberatung',
        'Psychologische Betreuung',
        'Vorbereitung auf die Entlassung'
      ]
    }
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
    ],
    programs: {
      education: [
        'Hauptschulabschluss',
        'Realschulabschluss',
        'Berufliche Qualifizierung',
        'Computerkurse'
      ],
      work: [
        'Küche',
        'Wäscherei',
        'Hausreinigung',
        'Werkstätten'
      ],
      rehabilitation: [
        'Suchtberatung',
        'Schuldnerberatung',
        'Sozialberatung',
        'Entlassungsvorbereitung'
      ]
    }
  }
];