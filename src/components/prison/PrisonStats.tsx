import { Prison } from '../../types/prison';

interface PrisonStatsProps {
  prison: Prison;
}

export default function PrisonStats({ prison }: PrisonStatsProps) {
  const occupancyRate = Math.round((prison.inmates / prison.capacity) * 100);
  
  return (
    <div className="grid grid-cols-2 gap-4">
      <div className="bg-gray-100 rounded-lg p-4">
        <div className="text-sm font-medium text-gray-700">Aktuelle Insassen</div>
        <div className="text-2xl font-bold text-gray-900 mt-1">
          {prison.inmates.toLocaleString('de-DE')}
        </div>
      </div>
      
      <div className="bg-gray-100 rounded-lg p-4">
        <div className="text-sm font-medium text-gray-700">Auslastung</div>
        <div className="text-2xl font-bold text-gray-900 mt-1">
          {occupancyRate}%
        </div>
      </div>
    </div>
  );
}