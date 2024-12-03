export interface VisitingHours {
  day: 'Montag' | 'Dienstag' | 'Mittwoch' | 'Donnerstag' | 'Freitag' | 'Samstag' | 'Sonntag';
  times: string[];
  notes?: string;
}

export interface RehabilitationPrograms {
  education: string[];
  work: string[];
  rehabilitation: string[];
}

export interface Prison {
  id: string;
  name: string;
  location: {
    lat: number;
    lng: number;
  };
  inmates: number;
  capacity: number;
  type: 'männlich' | 'weiblich' | 'gemischt';
  securityLevel: 'niedrig' | 'mittel' | 'hoch';
  description: string;
  imageUrl: string;
  contact: {
    address: string;
    phone: string;
    email: string;
    website?: string;
  };
  facilities: string[];
  visitingHours: VisitingHours[];
  visitingRules: string[];
  programs: RehabilitationPrograms;
}