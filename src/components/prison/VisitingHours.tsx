import { useState } from 'react';
import { Calendar, Clock, ChevronDown, ChevronUp } from '../icons';
import { Prison } from '../../types/prison';

interface VisitingHoursProps {
  visitingHours: Prison['visitingHours'];
  visitingRules: Prison['visitingRules'];
}

export default function VisitingHours({ visitingHours, visitingRules }: VisitingHoursProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="border-t border-gray-200 pt-4">
      <button 
        className="flex items-center justify-between w-full"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex items-center gap-2">
          <Calendar className="w-4 h-4 text-gray-600" />
          <span className="text-sm font-medium text-gray-900">Besuchszeiten</span>
        </div>
        {isExpanded ? (
          <ChevronUp className="w-4 h-4 text-gray-400" />
        ) : (
          <ChevronDown className="w-4 h-4 text-gray-400" />
        )}
      </button>

      {isExpanded && (
        <div className="mt-3 space-y-3">
          {visitingHours.map((hours, index) => (
            <div key={index} className="bg-gray-100 p-3 rounded-lg">
              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-gray-500 mt-0.5" />
                <div>
                  <div className="font-medium text-sm text-gray-900">{hours.day}</div>
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

          {visitingRules.length > 0 && (
            <div className="bg-gray-100 p-3 rounded-lg">
              <h4 className="text-sm font-medium text-gray-900 mb-2">Besuchsregeln</h4>
              <ul className="space-y-1">
                {visitingRules.map((rule, index) => (
                  <li key={index} className="text-sm text-gray-700 flex items-start">
                    <span className="mr-2">•</span>
                    <span>{rule}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
}