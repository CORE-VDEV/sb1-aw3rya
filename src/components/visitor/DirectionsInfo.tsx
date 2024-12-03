import { MapPin, Bus, Car, Train } from 'lucide-react';
import { Prison } from '../../types/prison';

interface DirectionsInfoProps {
  prison: Prison;
}

export default function DirectionsInfo({ prison }: DirectionsInfoProps) {
  const getGoogleMapsUrl = () => {
    const address = encodeURIComponent(prison.contact.address);
    return `https://www.google.com/maps/dir/?api=1&destination=${address}`;
  };

  return (
    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
      <div className="p-4 border-b border-gray-200">
        <h3 className="font-medium text-gray-900">Anfahrt</h3>
      </div>

      <div className="p-4 space-y-6">
        {/* Adresse */}
        <div className="flex items-start gap-3">
          <MapPin className="w-5 h-5 text-gray-600 mt-0.5" />
          <div>
            <h4 className="text-sm font-medium text-gray-900 mb-1">Adresse</h4>
            <p className="text-sm text-gray-600">{prison.contact.address}</p>
            <a
              href={getGoogleMapsUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm text-gray-900 hover:underline mt-2"
            >
              <Car className="w-4 h-4" />
              Route planen
            </a>
          </div>
        </div>

        {/* Öffentliche Verkehrsmittel */}
        <div className="flex items-start gap-3">
          <Bus className="w-5 h-5 text-gray-600 mt-0.5" />
          <div>
            <h4 className="text-sm font-medium text-gray-900 mb-1">Mit Bus & Bahn</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• Nächste Bushaltestelle: 5 Minuten Fußweg</li>
              <li>• S-Bahn Station: 15 Minuten Fußweg</li>
              <li>• Regionalbahn: 20 Minuten Fußweg</li>
            </ul>
          </div>
        </div>

        {/* Parkplätze */}
        <div className="flex items-start gap-3">
          <Car className="w-5 h-5 text-gray-600 mt-0.5" />
          <div>
            <h4 className="text-sm font-medium text-gray-900 mb-1">Parkmöglichkeiten</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• Besucherparkplatz direkt vor der JVA</li>
              <li>• Kostenlose Parkplätze in der Umgebung</li>
              <li>• Behindertenparkplätze vorhanden</li>
            </ul>
          </div>
        </div>

        {/* Wichtige Hinweise */}
        <div className="bg-gray-50 rounded-lg p-3">
          <p className="text-sm text-gray-600">
            Bitte planen Sie genügend Zeit für die Sicherheitskontrolle ein und seien Sie
            mindestens 30 Minuten vor Ihrem Besuchstermin vor Ort.
          </p>
        </div>
      </div>
    </div>
  );
}