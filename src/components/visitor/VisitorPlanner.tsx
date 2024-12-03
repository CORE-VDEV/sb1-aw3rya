import { useState } from 'react';
import { Calendar, Clock, MapPin, CheckSquare } from 'lucide-react';
import { Prison } from '../../types/prison';

interface VisitorPlannerProps {
  prison: Prison;
}

export default function VisitorPlanner({ prison }: VisitorPlannerProps) {
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [selectedTime, setSelectedTime] = useState<string>('');
  const [visitorCount, setVisitorCount] = useState(1);
  const [hasReadRules, setHasReadRules] = useState(false);

  const getAvailableDays = () => {
    const days = prison.visitingHours.map(vh => vh.day);
    return [...new Set(days)];
  };

  const getAvailableTimesForDay = (day: string) => {
    const daySchedule = prison.visitingHours.find(vh => vh.day === day);
    return daySchedule?.times || [];
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Hier würde später die tatsächliche Buchungslogik implementiert
    alert('Ihre Besuchsanfrage wurde registriert. Sie erhalten in Kürze eine Bestätigung.');
  };

  return (
    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
      <div className="p-4 border-b border-gray-200">
        <h3 className="font-medium text-gray-900">Besuch planen</h3>
      </div>

      <form onSubmit={handleSubmit} className="p-4 space-y-4">
        {/* Datum und Uhrzeit */}
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Besuchstag
            </label>
            <select
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
              required
            >
              <option value="">Tag auswählen</option>
              {getAvailableDays().map(day => (
                <option key={day} value={day}>{day}</option>
              ))}
            </select>
          </div>

          {selectedDate && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Uhrzeit
              </label>
              <select
                value={selectedTime}
                onChange={(e) => setSelectedTime(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
                required
              >
                <option value="">Uhrzeit auswählen</option>
                {getAvailableTimesForDay(selectedDate).map(time => (
                  <option key={time} value={time}>{time}</option>
                ))}
              </select>
            </div>
          )}
        </div>

        {/* Besucheranzahl */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Anzahl der Besucher
          </label>
          <input
            type="number"
            min="1"
            max="3"
            value={visitorCount}
            onChange={(e) => setVisitorCount(parseInt(e.target.value))}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
            required
          />
          <p className="mt-1 text-xs text-gray-500">
            Maximal 3 Besucher pro Termin
          </p>
        </div>

        {/* Besuchsregeln Bestätigung */}
        <div className="flex items-start gap-2">
          <input
            type="checkbox"
            id="rules"
            checked={hasReadRules}
            onChange={(e) => setHasReadRules(e.target.checked)}
            className="mt-1"
            required
          />
          <label htmlFor="rules" className="text-sm text-gray-600">
            Ich habe die Besuchsregeln gelesen und akzeptiere diese
          </label>
        </div>

        <button
          type="submit"
          className="w-full px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors text-sm font-medium"
          disabled={!hasReadRules}
        >
          Besuch anfragen
        </button>
      </form>
    </div>
  );
}