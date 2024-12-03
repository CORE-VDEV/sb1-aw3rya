import { Prison } from '../types/prison';
import { Phone, Mail, Globe, MapPin } from 'lucide-react';

interface PrisonDetailProps {
  prison: Prison;
}

export default function PrisonDetail({ prison }: PrisonDetailProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <img
        src={prison.imageUrl}
        alt={prison.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-2">{prison.name}</h2>
        <div className="flex items-center text-gray-600 mb-4">
          <MapPin className="w-4 h-4 mr-2" />
          <span>{prison.contact.address}</span>
        </div>
        <p className="text-gray-700 mb-4">{prison.description}</p>
        
        <div className="bg-gray-50 p-4 rounded-lg">
          <h3 className="font-semibold mb-3">Kontaktinformationen</h3>
          <div className="space-y-2">
            <div className="flex items-center">
              <Phone className="w-4 h-4 mr-2 text-gray-600" />
              <a href={`tel:${prison.contact.phone}`} className="text-blue-600 hover:underline">
                {prison.contact.phone}
              </a>
            </div>
            <div className="flex items-center">
              <Mail className="w-4 h-4 mr-2 text-gray-600" />
              <a href={`mailto:${prison.contact.email}`} className="text-blue-600 hover:underline">
                {prison.contact.email}
              </a>
            </div>
            {prison.contact.website && (
              <div className="flex items-center">
                <Globe className="w-4 h-4 mr-2 text-gray-600" />
                <a href={prison.contact.website} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                  Website besuchen
                </a>
              </div>
            )}
          </div>
        </div>
        
        <div className="mt-4 p-4 bg-blue-50 rounded-lg">
          <div className="text-center">
            <span className="text-2xl font-bold text-blue-600">{prison.inmates}</span>
            <p className="text-sm text-blue-800">Aktuelle Insassen</p>
          </div>
        </div>
      </div>
    </div>
  );
}