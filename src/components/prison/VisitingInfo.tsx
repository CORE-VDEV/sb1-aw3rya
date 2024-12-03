import { useState } from 'react';
import { Calendar, Clock, ChevronDown, ChevronUp, MapPin } from '../icons';
import { Prison } from '../../types/prison';

interface VisitingInfoProps {
  prison: Prison;
}

export default function VisitingInfo({ prison }: VisitingInfoProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
      <div className="p-4 border-b border-gray-200">
        <button 
          className="flex items-center justify-between w-full"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <div className="flex items-center gap-2">
            <Calendar className="w-5 h-5 text-gray-600" />
            <span className="font-medium text-gray-900">Besucherinformationen</span>
          </div>
          {isExpanded ? (
            <ChevronUp className="w-5 h-5 text-gray-400" />
          ) : (
            <ChevronDown className="w-5 h-5 text-gray-400" />
          )}
        </button>
      </div>

      {isExpanded && (
        <div className="p-4 space-y-6">
          {/* Anfahrt */}
          <div>
            <h4 className="text-sm font-medium text-gray-900 mb-2">Anfahrt</h4>
            <div className="flex items-start gap-2 text-sm text-gray-600">
              <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
              <div>
                <p>{prison.contact.address}</p>
                <a 
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(prison.contact.address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-900 hover:underline mt-1 inline-block"
                >
                  Route planen
                </a>
              </div>
            </div>
          </div>

          {/* Besuchszeiten */}
          <div>
            <h4 className="text-sm font-medium text-gray-900 mb-2">Besuchszeiten</h4>
            <div className="space-y-3">
              {prison.visitingHours.map((hours, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-3">
                  <div className="flex items-start gap-2">
                    <Clock className="w-4 h-4 mt-0.5 text-gray-500" />
                    <div>
                      <div className="font-medium text-gray-900">{hours.day}</div>
                      <div className="text-sm text-gray-600 mt-1">
                        {hours.times.join(', ')}
                      </div>
                      {hours.notes && (
                        <div className="text-xs text-gray-500 mt-1">{hours.notes}</div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Besuchsregeln */}
          <div>
            <h4 className="text-sm font-medium text-gray-900 mb-2">Wichtige Hinweise</h4>
            <ul className="space-y-2">
              {prison.visitingRules.map((rule, index) => (
                <li key={index} className="flex items-start gap-2 text-sm text-gray-600">
                  <span className="select-none">•</span>
                  <span>{rule}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Besuch planen */}
          <div className="pt-4 border-t border-gray-200">
            <button
              className="w-full px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors text-sm font-medium"
              onClick={() => {
                // Hier könnte später die Besuchsplanung implementiert werden
                alert('Die Online-Besuchsplanung wird in Kürze verfügbar sein.');
              }}
            >
              Besuch planen
            </button>
            <p className="text-xs text-gray-500 text-center mt-2">
              Bitte beachten Sie die Voranmeldefrist und bringen Sie einen gültigen Ausweis mit.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}