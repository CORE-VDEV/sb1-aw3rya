import { Phone, Mail, Globe } from '../icons';
import { Prison } from '../../types/prison';

interface PrisonContactInfoProps {
  contact: Prison['contact'];
}

export default function PrisonContactInfo({ contact }: PrisonContactInfoProps) {
  return (
    <div className="space-y-3">
      <a 
        href={`tel:${contact.phone}`} 
        className="flex items-center text-gray-600 hover:text-blue-600 transition-colors"
      >
        <Phone className="w-4 h-4 mr-2 flex-shrink-0" />
        <span className="text-sm">{contact.phone}</span>
      </a>
      
      <a 
        href={`mailto:${contact.email}`} 
        className="flex items-center text-gray-600 hover:text-blue-600 transition-colors"
      >
        <Mail className="w-4 h-4 mr-2 flex-shrink-0" />
        <span className="text-sm">{contact.email}</span>
      </a>
      
      {contact.website && (
        <a 
          href={contact.website} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="flex items-center text-gray-600 hover:text-blue-600 transition-colors"
        >
          <Globe className="w-4 h-4 mr-2 flex-shrink-0" />
          <span className="text-sm">Website besuchen</span>
        </a>
      )}
    </div>
  );
}